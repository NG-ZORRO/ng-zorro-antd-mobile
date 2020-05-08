import {
  Input,
  Output,
  OnInit,
  NgZone,
  Injector,
  Renderer2,
  OnChanges,
  OnDestroy,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  EventEmitter,
  ComponentRef,
  ViewContainerRef,
  ComponentFactory,
  ComponentFactoryResolver
} from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[Picker], [nzm-picker]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PickerDirective),
      multi: true
    }
  ]
})
export class PickerDirective implements OnDestroy, OnInit, OnChanges, ControlValueAccessor {
  picker: ComponentRef<PickerComponent>;
  appendToBodyElement: HTMLElement;
  value: Array<any>;
  private _eventListeners: Array<() => void> = [];

  @Input()
  data: Array<any>;
  @Input()
  cols: Number;
  @Input()
  mask: boolean;
  @Input()
  title: string;
  @Input()
  visible: boolean;
  @Input()
  okText: string;
  @Input()
  dismissText: string;
  @Input()
  disabled: boolean;
  @Input()
  cascade: boolean;
  @Input()
  appendToBody: boolean;
  @Input()
  indicatorStyle: object;
  @Output()
  onVisibleChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output()
  onPickerChange: EventEmitter<any> = new EventEmitter();
  @Output()
  onDismiss: EventEmitter<any> = new EventEmitter();

  onChange: (value: any[]) => void = () => null;
  onTouched: () => void = () => null;

  @HostListener('click')
  togglePicker(): void {
    if (!this.picker) {
      this.showPicker();
    } else {
      this.hidePicker();
    }
  }

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _elm: ElementRef,
    private _defaultOptions: PickerOptions,
    private _cfr: ComponentFactoryResolver,
    private _renderer: Renderer2,
    private _zone: NgZone
  ) {}

  ngOnInit(): void {
    this.onVisibleChange.emit(false);
  }

  ngOnChanges(value) {
    if (value.cols && this.picker) {
      this.picker.instance.options.cols = value.cols.currentValue;
    }
    if (value.data && this.picker) {
      if (!this.isPickerDataEqual(this.picker.instance.options.data, value.data.currentValue)) {
        this.picker.instance.options.data = value.data.currentValue;
        this.showPicker();
      }
    }
  }

  ngOnDestroy() {
    this.hidePicker();
  }

  private onDocumentClick(event: Event): void {
    if (
      this.picker &&
      !this._elm.nativeElement.contains(event.target) &&
      !this.picker.location.nativeElement.contains(event.target)
    ) {
      this.hidePicker();
    }
  }

  private showPicker(): void {
    if (this.picker) {
      this._zone.run(() => {
        this.picker.instance.init();
      });
    } else if (!this.picker && !this.disabled) {
      setTimeout(() => {
        this._eventListeners = [
          this._renderer.listen('document', 'click', (event: Event) => this.onDocumentClick(event)),
          this._renderer.listen('document', 'touchend', (event: Event) => this.onDocumentClick(event))
        ];
      });

      const options = new PickerOptions();
      Object.assign(options, this._defaultOptions, {
        hidePicker: (event): void => {
          this.hidePicker();
        },
        updateNgModel: (value: any[]): void => {
          this.value = value;
          this.onChange(value);
        }
      });

      const optionalParams: Array<keyof PickerDirective> = [
        'data',
        'value',
        'cols',
        'mask',
        'title',
        'okText',
        'dismissText',
        'disabled',
        'cascade',
        'appendToBody',
        'indicatorStyle',
        'onPickerChange',
        'onVisibleChange',
        'onDismiss'
      ];
      optionalParams.forEach(param => {
        if (typeof this[param] !== 'undefined') {
          (options as any)[param] = this[param];
        }
      });
      const componentFactory: ComponentFactory<PickerComponent> = this._cfr.resolveComponentFactory(PickerComponent);
      const childInjector = Injector.create([
        {
          provide: PickerOptions,
          useValue: options
        }
      ]);
      this.picker = this._viewContainerRef.createComponent(
        componentFactory,
        this._viewContainerRef.length,
        childInjector
      );
      if (options.appendToBody) {
        this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }

  private hidePicker(): void {
    if (this.appendToBodyElement) {
      document.body.removeChild(this.appendToBodyElement);
      this.appendToBodyElement = null;
    }
    if (this.picker) {
      this.picker.destroy();
      delete this.picker;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach(fn => fn());
      this._eventListeners = [];
    }
  }

  writeValue(value: any[]): void {
    this.value = Array.isArray(value) ? value : [];
    if (this.picker) {
      this.picker.instance.options.value = this.value;
      this.showPicker();
      this.picker.instance.reloadPicker();
    }
  }

  registerOnChange(fn: (value: any[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isPickerDataEqual(data1, data2) {
    if (!data1 && !data2) {
      return true;
    }
    if (!Array.isArray(data1) || !Array.isArray(data2) || data1.length !== data2.length) {
      return false;
    }
    for (let i = 0; i < data1.length; i++) {
      const item1 = data1[i];
      const item2 = data2[i];
      if ((item1 && !item2) || (!item1 && item2)) {
        return false;
      }
      if (item1.value !== item2.value) {
        return false;
      }
      if (item1.label !== item2.label) {
        return false;
      }
      if (item1.children && item2.children) {
        return this.isPickerDataEqual(item1.children, item2.children);
      }
    }
    return true;
  }
}

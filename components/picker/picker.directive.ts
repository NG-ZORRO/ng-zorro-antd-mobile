import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  ElementRef,
  OnChanges,
  OnInit,
  Injector,
  ComponentFactoryResolver,
  Renderer2,
  ComponentFactory,
  SimpleChanges
} from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';

@Directive({
  selector: '[Picker], [nzm-picker]'
})
export class PickerDirective implements OnDestroy, OnChanges, OnInit {
  picker: ComponentRef<PickerComponent>;
  private _eventListeners: Array<() => void> = [];

  @Input()
  data: Array<any>;
  @Input()
  value: Array<any>;
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
  @Output()
  onVisibleChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output()
  onPickerChange: EventEmitter<any> = new EventEmitter();
  @Output()
  onOk: EventEmitter<any> = new EventEmitter();
  @Output()
  onDismiss: EventEmitter<any> = new EventEmitter();

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
    private _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.onVisibleChange.emit(false);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen) {
      if (changes.isOpen.currentValue === true) {
        this.showPicker();
      } else {
        this.hidePicker();
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
    if (!this.picker) {
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
        'onOk',
        'onPickerChange'
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
        document.body.appendChild(this.picker.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }

  private hidePicker(): void {
    if (this.picker) {
      this.picker.destroy();
      delete this.picker;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach(fn => fn());
      this._eventListeners = [];
    }
  }
}

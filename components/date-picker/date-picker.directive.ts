import {
  Input,
  Output,
  OnInit,
  Injector,
  OnChanges,
  OnDestroy,
  Directive,
  forwardRef,
  EventEmitter,
  HostListener,
  ComponentRef,
  SimpleChanges,
  ComponentFactory,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerOptions } from './date-picker-options.provider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
  selector: '[DatePicker]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerDirective),
      multi: true
    }
  ]
})
export class DatePickerDirective implements OnDestroy, OnChanges, OnInit, ControlValueAccessor {
  picker: ComponentRef<DatePickerComponent>;
  appendToBodyElement: HTMLElement;
  private _eventListeners: Array<() => void> = [];
  private _ngModelOnChange: (value: Date) => {};
  private _ngModelOnTouched: () => {};

  @Input()
  isOpen: boolean;
  @Input()
  mode: string;
  @Input()
  minDate: string;
  @Input()
  maxDate: string;
  @Input()
  use12Hours: boolean;
  @Input()
  minuteStep: number = 1;
  @Input()
  value: Date = new Date();
  @Input()
  mask: boolean;
  @Input()
  title: string;
  @Input()
  okText: string;
  @Input()
  dismissText: string;
  @Input()
  disabled: boolean;
  @Input()
  locale: any;
  @Input()
  appendToBody: boolean;
  @Input()
  showErrorToast: boolean;
  @Input()
  showErrorToastInterval: number;
  @Output()
  onVisibleChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output()
  onValueChange: EventEmitter<any> = new EventEmitter();
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
    private _defaultOptions: DatePickerOptions,
    private _cfr: ComponentFactoryResolver
  ) {}

  showPicker(): void {
    if (!this.picker && !this.disabled) {
      setTimeout(() => {
        this._eventListeners = [];
      });

      const options = new DatePickerOptions();
      Object.assign(options, this._defaultOptions, {
        hidePicker: (event): void => {
          this.hidePicker();
        },
        updateNgModel: (value: Date): void => {
          if (this._ngModelOnChange) {
            this.value = value;
            this._ngModelOnChange(value);
          }
        }
      });

      const optionalParams: Array<keyof DatePickerDirective> = [
        'mode',
        'minDate',
        'maxDate',
        'minuteStep',
        'value',
        'mask',
        'title',
        'okText',
        'dismissText',
        'disabled',
        'locale',
        'appendToBody',
        'showErrorToast',
        'showErrorToastInterval',
        'onOk',
        'onDismiss',
        'onValueChange'
      ];
      optionalParams.forEach(param => {
        if (typeof this[param] !== 'undefined') {
          (options as any)[param] = this[param];
        }
      });
      const componentFactory: ComponentFactory<DatePickerComponent> = this._cfr.resolveComponentFactory(
        DatePickerComponent
      );
      const childInjector = Injector.create([
        {
          provide: DatePickerOptions,
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

  hidePicker(): void {
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

  writeValue(value: Date): void {
    this.value = value;
  }

  registerOnChange(fn: (_: Date) => {}): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._ngModelOnTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

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
}

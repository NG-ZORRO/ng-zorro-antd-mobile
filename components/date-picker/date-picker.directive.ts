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
  ComponentFactory,
  SimpleChanges
} from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerOptions } from './date-picker-options.provider';

@Directive({
  selector: '[DatePicker]'
})
export class DatePickerDirective implements OnDestroy, OnChanges, OnInit {
  picker: ComponentRef<DatePickerComponent>;
  private _eventListeners: Array<() => void> = [];

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
    private _elm: ElementRef,
    private _defaultOptions: DatePickerOptions,
    private _cfr: ComponentFactoryResolver
  ) {}

  showPicker(): void {
    if (!this.picker) {
      setTimeout(() => {
        this._eventListeners = [];
      });

      const options = new DatePickerOptions();
      Object.assign(options, this._defaultOptions, {
        hidePicker: (event): void => {
          this.hidePicker();
        }
      });

      const optionalParams: Array<keyof DatePickerDirective> = [
        'mode',
        'minDate',
        'maxDate',
        'value',
        'mask',
        'title',
        'okText',
        'dismissText',
        'disabled',
        'locale',
        'appendToBody',
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
        document.body.appendChild(this.picker.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }

  hidePicker(): void {
    if (this.picker) {
      this.picker.destroy();
      delete this.picker;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach(fn => fn());
      this._eventListeners = [];
    }
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

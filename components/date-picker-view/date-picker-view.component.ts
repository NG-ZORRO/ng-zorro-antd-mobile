import {
  Input,
  OnInit,
  Output,
  Component,
  OnChanges,
  forwardRef,
  HostBinding,
  EventEmitter,
  SimpleChanges,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DatePickerOptions } from '../date-picker/date-picker-options.provider';

@Component({
  selector: 'DatePickerView, nzm-date-picker-view',
  templateUrl: './date-picker-view.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerViewComponent),
      multi: true
    },
    DatePickerOptions
  ],
})
export class DatePickerViewComponent extends DatePickerComponent
  implements OnInit, AfterViewInit, OnChanges, ControlValueAccessor {
  @Input()
  mode: string = 'date';
  @Input()
  minDate: Date = new Date(2000, 5, 1, 0, 0, 0);
  @Input()
  maxDate: Date = new Date(2030, 1, 1, 23, 59, 59);
  @Input()
  value: Date = new Date();
  @Input()
  disabled: boolean = false;
  @Input()
  indicatorStyle: object = {};
  @Input()
  get locale() {
    return this.options.locale;
  }
  set locale(value) {
    this.options.locale = value;
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  @Input()
  showErrorToast: boolean = true;
  @Input()
  showErrorToastInterval: number = 2000;
  @Output()
  onValueChange: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-picker')
  amPicker = true;

  reloadPicker() {
    if (this.currentPicker) {
      const self = this;
      setTimeout(() => {
        self.selectedTarget.forEach((item, i) => {
          self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
          const index = parseInt(item.currentY, 0);
          self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
        });
      }, 0);
    }
  }

  writeValue(value: Date): void {
    if (value) {
      this.value = value;
      this.optionInit();
      this.init();
    }
  }

  registerOnChange(fn: (_: Date) => {}): void {
    this.ngModelOnChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.ngModelOnTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  optionInit() {
    this.options.mode = this.mode;
    this.options.minDate = this.minDate;
    this.options.maxDate = this.maxDate;
    this.options.disabled = this.disabled;
    this.options.locale = this.locale;
    this.options.value = this.value;
    this.options.showErrorToast = this.showErrorToast;
    this.options.showErrorToastInterval = this.showErrorToastInterval;
    this.options.onValueChange = this.onValueChange;
    this.checkMode(this.options.mode);
    const value = this.transformDateFormat(this.options.value).split('-');
    if (value.length > 0) {
      this.currentTime = value.map(item => {
        return parseInt(item, 0);
      });
    }
  }

  ngOnInit() {
    this.optionInit();
    this.localeProvider();
  }

  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.options.value = changes.value.currentValue;
      const value = this.transformDateFormat(this.options.value).split('-');
      if (value.length > 0) {
        this.currentTime = value.map(item => {
          return parseInt(item, 0);
        });
      }
      if (
        !this.judgeEqualArray(this.currentTime, this.resultArr, this.resultArr.length) ||
        this.judgeEqualArray(this.currentTime, this.min_date, this.currentTime.length) ||
        this.judgeTime(this.currentTime, this.max_date)
      ) {
        this.optionInit();
        this.init();
      }
    }

    if (changes.mode || changes.minDate || changes.maxDate || changes.disabled || changes.locale) {
      this.optionInit();
      this.init();
    }
  }
}

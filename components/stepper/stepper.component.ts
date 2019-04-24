import { Component, Input, Output, EventEmitter, OnChanges, HostBinding, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Stepper , nzm-stepper',
  templateUrl: './stepper.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Stepper),
      multi: true
    }
  ]
})
export class Stepper implements OnChanges, ControlValueAccessor {
  prefixCls: string = 'am-stepper';
  upDisableCls: object;
  downDisableCls: object;
  stepperCls: object;
  @ViewChild('inputElement') inputElement: ElementRef;

  private _max: number = Infinity;
  private _min: number = -Infinity;
  private _value: number;
  private _step: number = 1;
  private _defaultValue: number;
  private _disabled: boolean = false;
  private _readOnly: boolean = false;
  private _showNumber: boolean = false;
  private _upDisabled: boolean = false;
  private _downDisabled: boolean = false;
  private _isUpClick: boolean = false;
  private _isDownClick: boolean = false;

  @Input()
  get max(): number {
    return this._max;
  }
  set max(value: number) {
    this._max = value;
  }
  @Input()
  get min(): number {
    return this._min;
  }
  set min(value: number) {
    this._min = value;
  }
  @Input()
  get value(): number {
    return this._value;
  }
  set value(v: number) {
    this._value = v;
  }
  @Input()
  set step(value) {
    this._step = value;
  }
  @Input()
  set defaultValue(value) {
    if (value) {
      this._defaultValue = value;
      this._value = value;
    }
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (value) {
      this._disabled = true;
      this._downDisabled = true;
      this._upDisabled = true;
    }
    this.clsStpDisabled = value;
  }
  @Input()
  get readOnly(): boolean {
    return this._readOnly;
  }
  set readOnly(value: boolean) {
    this._readOnly = value;
  }
  @Input()
  set showNumber(value: boolean) {
    this._showNumber = value;
    this.clsShowNum = value;
  }
  @Output()
  onChange = new EventEmitter<any>();

  @HostBinding('class.am-stepper')
  clsStepper: boolean = true;
  @HostBinding('class.am-stepper-disabled')
  clsStpDisabled: boolean = this._disabled;
  @HostBinding('class.showNumber')
  clsShowNum: boolean = this._showNumber;
  private onChangeFn: (value: number) => void = () => {};
  private onTouchFn: (value: number) => void = () => {};

  constructor() {}

  onIncrease() {
    if (!this._upDisabled) {
      this._value = this.plus(this._value, this._step);
      this.inputElement.nativeElement.value = this._value;
      this.onChange.emit(this._value);
      this.onChangeFn(this._value);
      if (this.plus(this._value, this._step) > this._max) {
        this._upDisabled = true;
      }
      if (this.minus(this._value, this._step) >= this._min) {
        this._downDisabled = false;
      }
      this._isUpClick = true;
      this.setCls();
      setTimeout(() => {
        this._isUpClick = false;
        this.setCls();
      }, 100);
    }
  }

  onDecrease() {
    if (!this._downDisabled) {
      this._value = this.minus(this._value, this._step);
      this.inputElement.nativeElement.value = this._value;
      this.onChange.emit(this._value);
      this.onChangeFn(this._value);
      if (this.minus(this._value, this._step) < this._min) {
        this._downDisabled = true;
      }
      if (this.plus(this._value, this._step) <= this._max) {
        this._upDisabled = false;
      }
      this._isDownClick = true;
      this.setCls();
      setTimeout(() => {
        this._isDownClick = false;
        this.setCls();
      }, 100);
    }
  }

  inputChange(event) {
    const value = event.target.value;
    this._value = value ? parseInt(value, null) : 0;
    if (value < this._min) {
      this._value = this._min;
    }
    if (value > this._max) {
      this._value = this._max;
    }
    this.inputElement.nativeElement.value = this._value;
    this.onChange.emit(this._value);
    this.onChangeFn(this._value);
  }

  setCls() {
    this.upDisableCls = {
      [`${this.prefixCls}-handler-up-disabled`]: this._upDisabled,
      [`${this.prefixCls}-handler-active`]: this._isUpClick
    };
    this.downDisableCls = {
      [`${this.prefixCls}-handler-down-disabled`]: this._downDisabled,
      [`${this.prefixCls}-handler-active`]: this._isDownClick
    };
  }

  ngOnChanges() {
    if (this.plus(this._value, this._step) > this._max) {
      this._upDisabled = true;
    }
    if (this.minus(this._value, this._step) < this._min) {
      this._downDisabled = true;
    }
    this.setCls();
  }

  writeValue(value: number): void {
    this._value = value;
    this.ngOnChanges();
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: (value: number) => void): void {
    this.onTouchFn = fn;
  }

  plus(num1: number, num2: number): number {
    if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
      return;
    }
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
    return (this.times(num1, baseNum) + this.times(num2, baseNum)) / baseNum;
  }

  minus(num1: number, num2: number): number {
    if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
      return;
    }
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
    return (this.times(num1, baseNum) - this.times(num2, baseNum)) / baseNum;
  }

  digitLength(num: number): number {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }

  times(num1: number, num2: number): number {
    const num1Changed = this.floatToFixed(num1);
    const num2Changed = this.floatToFixed(num2);
    const baseNum = this.digitLength(num1) + this.digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    return leftValue / Math.pow(10, baseNum);
  }

  floatToFixed(num: number): number {
    if (num.toString().indexOf('e') === -1) {
      return Number(num.toString().replace('.', ''));
    }
    const dLen = this.digitLength(num);
    return dLen > 0 ? this.strip(num * Math.pow(10, dLen)) : num;
  }

  strip(num: number, precision = 12): number {
    return +parseFloat(num.toPrecision(precision));
  }
}

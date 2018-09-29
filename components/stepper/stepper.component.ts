import { Component, Input, Output, EventEmitter, OnChanges, HostBinding } from '@angular/core';
const classnames = require('classnames');

@Component({
  selector: 'Stepper , nzm-stepper',
  templateUrl: './stepper.component.html'
})
export class Stepper implements OnChanges {
  prefixCls: string = 'am-stepper';
  upDisableCls: object;
  downDisableCls: object;
  stepperCls: object;

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
  get step(): number {
    return this._step;
  }
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
  }
  @Output()
  onChange = new EventEmitter<any>();

  @HostBinding('class')
  get class() {
    return this.stepperCls;
  }

  constructor() {}

  onIncrease() {
    if (!this._upDisabled) {
      this._value = this._value + this._step;
      this.onChange.emit(this._value);
      if (this._value + this._step > this._max) {
        this._upDisabled = true;
      }
      if (this._value - this._step >= this._min) {
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
      this._value = this._value - this._step;
      this.onChange.emit(this._value);
      if (this._value - this._step < this._min) {
        this._downDisabled = true;
      }
      if (this._value + this._step <= this._max) {
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
    this.onChange.emit(this._value);
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
    this.stepperCls = classnames({
      [`${this.prefixCls}`]: true,
      [`${this.prefixCls}-disabled`]: this._disabled,
      showNumber: this._showNumber
    });
  }

  ngOnChanges() {
    if (this._value + this._step > this._max) {
      this._upDisabled = true;
    }
    if (this._value - this._step < this._min) {
      this._downDisabled = true;
    }
    this.setCls();
  }
}

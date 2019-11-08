import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Range , nzm-range',
  templateUrl: './range.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent implements OnInit, ControlValueAccessor {
  prefixCls: string = 'am-slider';
  offset: any[] = [];
  length: any[] = [];
  upperBound: number;
  lowerBound: number;
  maxBound: number[];
  minBound: number[];
  sliderCls: object;
  sliderLength: number;
  sliderStart: number;

  private _min = 0;
  private _max = 100;
  private _step = 1;
  private _value;
  private _defaultValue = [0, 0, 0];
  private _disabled = false;
  private _marks = {};
  private _dots = false;
  private _included = true;
  private _count = 1;
  private _allowCross = true;
  private _pushable;
  private _handleStyle = [];
  private _trackStyle = [];
  private _railStyle;
  private _handleCount;

  @Input()
  get min(): number {
    return this._min;
  }
  set min(value: number) {
    this._min = value;
  }
  @Input()
  get max(): number {
    return this._max;
  }
  set max(value: number) {
    this._max = value;
  }
  @Input()
  get step(): number {
    return this._step;
  }
  set step(value: number) {
    this._step = value;
  }
  @Input()
  get value(): [number] {
    return this._value;
  }
  set value(value: [number]) {
    this.setValue(value);
  }
  @Input()
  set defaultValue(value) {
    this._defaultValue = value;
    this._value = this._defaultValue;
    this.setValue(value);
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  get marks(): object {
    return this._marks;
  }
  set marks(value: object) {
    this._marks = value;
  }
  @Input()
  get dots(): boolean {
    return this._dots;
  }
  set dots(value: boolean) {
    this._dots = value;
  }
  @Input()
  get included(): boolean {
    return this._included;
  }
  set included(value: boolean) {
    this._included = value;
  }
  @Input()
  set count(value: number) {
    this._count = value;
  }
  @Input()
  set allowCross(value: boolean) {
    this._allowCross = value;
    this.setValueBound();
  }
  @Input()
  set pushable(value: number) {
    this._pushable = value;
    if (this.verifyPushable()) {
      this.setValueBound();
    }
  }
  @Input()
  get handleStyle(): any[] {
    return this._handleStyle;
  }
  set handleStyle(value: any[]) {
    this._handleStyle = value;
  }
  @Input()
  get trackStyle(): any[] {
    return this._trackStyle;
  }
  set trackStyle(value: any[]) {
    this._trackStyle = value;
  }
  @Input()
  get railStyle(): any[] {
    return this._railStyle;
  }
  set railStyle(value: any[]) {
    this._railStyle = value;
  }
  @Output()
  onChange = new EventEmitter<any>();
  @Output()
  onAfterChange = new EventEmitter<any>();

  @HostBinding('class.am-slider-wrapper')
  amWrapper: boolean = true;

  private _ngModelOnChange: (value: number[]) => void = () => {};
  private _ngModelOnTouched: (value: number) => void = () => {};

  constructor(private _elf: ElementRef) {}

  setCls() {
    this.sliderCls = {
      [`${this.prefixCls}-disabled`]: this._disabled
    };
  }

  initialValue() {
    const minTemp = this._min;
    if (!this.verifyPushable()) {
      this._pushable = 0;
      console.warn('pushable设置无效，已大于有些value间隔，被强制设为0');
    }
    const initialValue = Array.apply(null, Array(this._count + 1)).map(function() {
      return minTemp;
    });
    this._defaultValue = this._defaultValue !== undefined ? this._defaultValue : initialValue;
    this._value = this._value !== undefined ? this._value : this._defaultValue;
    // 验证count值
    this._count = this._value.length - 1;
    // 验证value区间
    for (let i = 0; i < this._value.length; i++) {
      if (this._value[i] < this._min) {
        this._value[i] = this._min;
      } else if (this._value[i] > this._max) {
        this._value[i] = this._max;
      }
    }
    if (this._count > 0) {
      this.upperBound = Math.max(...this._value);
      this.lowerBound = Math.min(...this._value);
    }
  }

  handleChange(e, i) {
    let temp = [...this._value];
    temp[i] = e;
    this.upperBound = Math.max(...temp);
    this.lowerBound = Math.min(...temp);
    this.setTrackStyle(temp);
    this.onChange.emit(temp);
  }

  handleAfterChange(e, i) {
    setTimeout(() => {
      this._value[i] = e;
      this.upperBound = Math.max(...this._value);
      this.lowerBound = Math.min(...this._value);
      this.setTrackStyle(this._value);
      this.onAfterChange.emit(this._value);
      this._ngModelOnChange(this._value);
      this.setValueBound();
    }, 0);
  }

  setTrackStyle(value) {
    if (value && value.length === this._count + 1) {
      value.sort((a, b) => a - b);
      for (let i = 0; i < this._count; i++) {
        this.offset[i] = (value[i] * 100) / (this._max - this._min);
        this.length[i] = ((value[i + 1] - value[i]) * 100) / (this._max - this._min);
      }
    }
  }

  setValueBound() {
    this.maxBound = [];
    this.minBound = [];
    if ((this._allowCross && this._pushable === undefined) || this._handleCount <= 1) {
      for (let i = 0; i < this._handleCount; i++) {
        this.maxBound[i] = this._max;
        this.minBound[i] = this._min;
      }
    } else {
      if (this._pushable === undefined) {
        this._pushable = 0;
      }
      for (let i = 0; i < this._handleCount; i++) {
        this.maxBound[i] = i === this._handleCount - 1 ? this._max : this._value[i + 1] - this._pushable;
        this.minBound[i] = i === 0 ? this._min : this._value[i - 1] + this._pushable;
      }
    }
  }

  verifyPushable() {
    for (let i = 1; i < this._handleCount; i++) {
      const diff = this._value[i] - this._value[i - 1];
      if (diff < this._pushable) {
        return false;
      }
    }
    return true;
  }

  writeValue(value: number[]): void {
    this.setValue(value, true);
  }

  setValue(value: number[], isWriteValue = false) {
    if (value) {
      this._value = value;
      this._handleCount = this._value.length + 1;
      this.initialValue();
      this.setValueBound();
      this.setCls();
      this.setTrackStyle(this._value);
      if (isWriteValue) {
        this._ngModelOnChange(this._value);
      } else {
        this.onAfterChange.emit(this._value);
      }
    }
  }

  registerOnChange(fn: (value: number[]) => void): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: (value: number) => void): void {
    this._ngModelOnTouched = fn;
  }

  ngOnInit() {
    this.initialValue();
    this.setValueBound();
    this._handleCount = this._count + 1;
    this.setCls();
    const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
    this.sliderLength = sliderCoords.width;
    this.sliderStart = sliderCoords.left;
  }
}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'Range , nzm-range',
  templateUrl: './range.component.html'
})
export class Range implements OnInit {
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
    this._value = value;
  }
  @Input()
  set defaultValue(value) {
    this._defaultValue = value;
    this._value = this._defaultValue;
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

  @HostBinding()
  get class() {
    return 'am-slider-wrapper';
  }

  constructor(private _elf: ElementRef) {}

  setCls() {
    this.sliderCls = {
      [`${this.prefixCls}-disabled`]: this._disabled
    };
  }

  initialValue() {
    const minTemp = this._min;
    const initialValue = Array.apply(null, Array(this._count + 1)).map(function() {
      return minTemp;
    });
    this._defaultValue = this._defaultValue !== undefined ? this._defaultValue : initialValue;
    this._value = this._value !== undefined ? this._value : this._defaultValue;
    if (this._count > 0) {
      this.upperBound = Math.max(...this._value);
      this.lowerBound = Math.min(...this._value);
    }
  }

  handleChange(e, i) {
    let temp = [...this._value];
    if (typeof this._pushable === 'boolean' && this._pushable) {
      const diff = e - this._value[i];
      temp = temp.map(v => (v = v + diff));
    } else {
      temp[i] = e;
    }
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
    if (this._allowCross || this._handleCount <= 1) {
      for (let i = 0; i < this._handleCount; i++) {
        this.maxBound[i] = this._max;
        this.minBound[i] = this._min;
      }
    } else {
      if (typeof this._pushable !== 'number' || (typeof this._pushable === 'boolean' && this._pushable)) {
        this._pushable = 0;
      }
      for (let i = 0; i < this._handleCount; i++) {
        this.maxBound[i] = i === this._handleCount - 1 ? this._max : this._value[i + 1] - this._pushable;
        this.minBound[i] = i === 0 ? this._min : this._value[i - 1] + this._pushable;
      }
    }
  }

  verifyPushable() {
    if (typeof this._pushable === 'number') {
      for (let i = 1; i < this._handleCount; i++) {
        const diff = this._value[i] - this._value[i - 1];
        if (diff < this._pushable) {
          return false;
        }
      }
    }
    return true;
  }

  ngOnInit() {
    if (this._max === undefined || this._min === undefined) {
      return;
    }
    if (this.verifyPushable()) {
      this.setValueBound();
      this._handleCount = this._count + 1;
      this.setCls();
      const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
      this.sliderLength = sliderCoords.width;
      this.sliderStart = sliderCoords.left;
      this.initialValue();
    }
  }
}

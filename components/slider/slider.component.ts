import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewEncapsulation,
  HostBinding,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Slider , nzm-slider',
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ]
})
export class SliderComponent implements OnInit, ControlValueAccessor {
  prefixCls = 'am-slider';
  sliderLength: number;
  sliderStart: number;
  sliderCls: object;
  offset: number = 0;
  length: number = 0;

  private _min: number = 0;
  private _max: number = 100;
  private _step: number = 1;
  private _value: number;
  private _defaultValue: number = 0;
  private _disabled: boolean = false;
  private _marks: object = {};
  private _dots: boolean = false;
  private _included: boolean = true;
  private _handleStyle: object;
  private _trackStyle: object = {};
  private _railStyle: object;

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
  get value(): number {
    return this._value;
  }
  set value(value: number) {
    this.setValue(value);
  }
  @Input()
  set defaultValue(value) {
    this._defaultValue = value;
    this.setValue(value);
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.setCls();
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
  get handleStyle(): object {
    return this._handleStyle;
  }
  set handleStyle(value: object) {
    this._handleStyle = value;
  }
  @Input()
  get trackStyle(): object {
    return this._trackStyle;
  }
  set trackStyle(value: object) {
    this._trackStyle = value;
  }
  @Input()
  get railStyle(): object {
    return this._railStyle;
  }
  set railStyle(value: object) {
    this._railStyle = value;
  }

  @Output()
  onAfterChange = new EventEmitter<any>();
  @Output()
  onChange = new EventEmitter<any>();

  @HostBinding('class.am-slider-wrapper')
  amSliderWrapper: boolean = true;

  private _ngModelOnChange: (value: number) => void = () => {};
  private _ngModelOnTouched: (value: number) => void = () => {};

  constructor(private _elf: ElementRef) {}

  setCls() {
    this.sliderCls = {
      [`${this.prefixCls}-disabled`]: this._disabled
    };
  }

  handleChange(e) {
    setTimeout(() => {
      this.setTrack(e);
      this._value = e;
    }, 10);
    this.onChange.emit(e);
    this._ngModelOnChange(e);
  }

  handleAfterChange(e) {
    setTimeout(() => {
      this.setTrack(e);
      this._value = e;
    }, 10);
    this.onAfterChange.emit(e);
  }

  valueRange() {
    if (this._value < this._min) {
      this._value = this._min;
    }
    if (this._value > this._max) {
      this._value = this._max;
    }
  }

  ngOnInit() {
    this.setCls();
    this.setValue(this._value);
    const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
    this.sliderLength = sliderCoords.width;
    this.sliderStart = sliderCoords.left;
  }

  writeValue(value: number): void {
    this.setValue(value, true);
  }

  setValue(value: number, isWriteValue = false) {
    if (value === 0 || value) {
      this._value = value;
    } else {
      this._value = this._defaultValue;
    }
    this.valueRange();
    this.setTrack(this._value);
    if (isWriteValue) {
      this._ngModelOnChange(this._value);
    } else {
      this.onAfterChange.emit(this._value);
    }
  }

  setTrack(e) {
    this.offset = 0;
    this.length = ((e - this._min) * 100) / (this._max - this._min);
  }

  registerOnChange(fn: (value: number) => void): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: (value: number) => void): void {
    this._ngModelOnTouched = fn;
  }
}

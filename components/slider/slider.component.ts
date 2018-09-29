import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'Slider , nzm-slider',
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None
})
export class Slider implements OnInit {
  prefixCls = 'am-slider';
  sliderLength: number;
  sliderStart: number;
  sliderCls: object;
  offset: number = 0;
  length: number = 0;

  private _min: number = 0;
  private _max: number = 100;
  private _step: number = 1;
  private _value: number = 10;
  private _defaultValue: number;
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
    this._value = value;
    this.valueRange();
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
  onChange = new EventEmitter<any>();
  @Output()
  onAfterChange = new EventEmitter<any>();

  @HostBinding('class.am-slider-wrapper')
  amSliderWrapper: boolean = true;

  constructor(private _elf: ElementRef) {}

  setCls() {
    this.sliderCls = {
      [`${this.prefixCls}-disabled`]: this._disabled
    };
  }

  handleChange(e) {
    setTimeout(() => {
      this.offset = 0;
      this.length = ((e - this._min) * 100) / (this._max - this._min);
      this._value = e;
    }, 10);
    this.onChange.emit(e);
  }

  handleAfterChange(e) {
    setTimeout(() => {
      this.offset = 0;
      this.length = ((e - this._min) * 100) / (this._max - this._min);
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
    this.valueRange();
    const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
    this.sliderLength = sliderCoords.width;
    this.sliderStart = sliderCoords.left;
  }
}

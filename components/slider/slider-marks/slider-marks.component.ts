import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'SliderMarks, nzm-slider-marks',
  templateUrl: './slider-marks.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SliderMarksComponent implements OnInit, AfterViewInit {
  markArray: Array<any> = [];

  private _min: number = 0;
  private _max: number = 100;
  private _marks: object = {};
  private _included: boolean = true;
  private _className: string = 'am-slider-mark';
  private _upperBound: number;
  private _lowerBound: number;
  private _range: number;
  private _markWidth: number;

  @Input()
  set min(value: number) {
    if (value && value <= this._max) {
      this._min = value;
    }
  }
  @Input()
  set max(value: number) {
    if (value && value >= this._min) {
      this._max = value;
    }
  }
  @Input()
  set marks(value: object) {
    this._marks = value;
  }
  @Input()
  set included(value: boolean) {
    this._included = value;
  }
  @Input()
  set upperBound(value: number) {
    if (value && value !== this._upperBound) {
      this._upperBound = value;
      this.setActiveCls();
    }
  }
  @Input()
  set lowerBound(value: number) {
    if (value && value !== this.lowerBound) {
      this._lowerBound = value;
      this.setActiveCls();
    }
  }
  @Output()
  onChange = new EventEmitter<any>();
  @Output()
  onAfterChange = new EventEmitter<any>();

  @HostBinding()
  get class() {
    return this._className;
  }

  constructor(private _elf: ElementRef) {}

  getMarks(marksKeys) {
    this.markArray = [];
    marksKeys
      .map(parseFloat)
      .sort((a, b) => a - b)
      .map(point => {
        const markItem = {
          markLabel: '',
          point: '',
          className: {},
          style: {}
        };
        const markPoint = this._marks[point];
        const markPointIsObject = typeof markPoint === 'object';
        const markLabel = markPointIsObject ? markPoint.label : markPoint;
        if (!markLabel && markLabel !== 0) {
          return null;
        }
        const isActive =
          (!this._included && point === this._upperBound) ||
          (this._included && point <= this._upperBound && point >= this._lowerBound);
        const markClassName = {
          [`${this._className}-text`]: true,
          [`${this._className}-text-active`]: isActive
        };
        const bottomStyle = {
          marginBottom: '-50%',
          bottom: `${((point - this._min) / this._range) * 100}%`
        };
        const leftStyle = {
          width: `${this._markWidth}%`,
          marginLeft: `${-this._markWidth / 2}%`,
          left: `${((point - this._min) / this._range) * 100}%`
        };
        const style = leftStyle;
        const markStyle = markPointIsObject ? { ...style, ...markPoint.style } : style;
        markItem.markLabel = markLabel;
        markItem.point = point;
        markItem.className = Object.keys(markClassName).join(' ');
        markItem.style = markStyle;
        this.markArray.push(markItem);
      });
  }

  setActiveCls() {
    for (let i = 0; i < this.markArray.length; i++) {
      const point = this.markArray[i].point;
      const isActive =
        (!this._included && point === this._upperBound) ||
        (this._included && point <= this._upperBound && point >= this._lowerBound);
      this.markArray[i].className = {
        [`${this._className}-text`]: true,
        [`${this._className}-text-active`]: isActive
      };
    }
  }

  setMarksLable() {
    for (let i = 0; i < this.markArray.length; i++) {
      const markEle = this._elf.nativeElement.getElementsByClassName(this._className + '-text')[i];
      markEle.innerHTML = this.markArray[i].markLabel;
    }
  }

  ngOnInit() {
    const marksKeys = Object.keys(this._marks);
    const marksCount = marksKeys.length;
    const unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
    this._markWidth = unit * 0.9;
    this._range = this._max - this._min;
    this.getMarks(marksKeys);
  }

  ngAfterViewInit() {
    this.setMarksLable();
  }
}

import { Component, OnInit, ElementRef, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'SliderSteps, nzm-slider-steps',
  templateUrl: './slider-steps.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SliderStepsComponent implements OnInit {
  prefixCls = 'am-slider';
  stepArray = [];

  private _min: number = 0;
  private _max: number = 100;
  private _step: number;
  private _marks: object = {};
  private _included: boolean = true;
  private _upperBound: number;
  private _lowerBound: number;
  private _dots: boolean = false;
  private _dotStyle: object;
  private _activeDotStyle: object;

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
  set step(value: number) {
    this._step = value;
  }
  @Input()
  set included(value: boolean) {
    this._included = value;
  }
  @Input()
  set dots(value: boolean) {
    this._dots = value;
  }
  @Input()
  set upperBound(value: number) {
    if (value !== undefined && value !== this._upperBound) {
      this._upperBound = value;
      this.setActiveCls();
    }
  }
  @Input()
  set lowerBound(value: number) {
    if (value !== undefined && value !== this.lowerBound) {
      this._lowerBound = value;
      this.setActiveCls();
    }
  }

  @HostBinding()
  get class() {
    return 'am-slider-step';
  }

  constructor(private _elf: ElementRef) {}

  calPoints() {
    const points = Object.keys(this._marks).map(parseFloat);
    if (this._dots) {
      for (let i = this._min; i <= this._max; i = i + this._step) {
        if (points.indexOf(i) < 0) {
          points.push(i);
        }
      }
    }
    return points;
  }

  getSteps(points) {
    const range = this._max - this._min;
    this.stepArray = [];
    points.map(point => {
      const stepItem = {
        stepStyle: {},
        stepClass: {},
        point: null
      };
      const offset = `${(Math.abs(point - this._min) / range) * 100}%`;
      const isActived =
        (!this._included && point === this._upperBound) ||
        (this._included && point <= this._upperBound && point >= this._lowerBound);
      let style = { left: offset, ...this._dotStyle };
      if (isActived) {
        style = { ...style, ...this._activeDotStyle };
      }

      const pointClassName = {
        [`${this.prefixCls}-dot`]: true,
        [`${this.prefixCls}-dot-active`]: isActived
      };
      stepItem.point = point;
      stepItem.stepStyle = style;
      stepItem.stepClass = pointClassName;
      this.stepArray.push(stepItem);
    });
  }

  setActiveCls() {
    for (let i = 0; i < this.stepArray.length; i++) {
      const point = this.stepArray[i].point;
      const isActived =
        (!this._included && point === this._upperBound) ||
        (this._included && point <= this._upperBound && point >= this._lowerBound);
      this.stepArray[i].stepClass = {
        [`${this.prefixCls}-dot`]: true,
        [`${this.prefixCls}-dot-active`]: isActived
      };
    }
  }

  ngOnInit() {
    const points = this.calPoints();
    this.getSteps(points);
  }
}

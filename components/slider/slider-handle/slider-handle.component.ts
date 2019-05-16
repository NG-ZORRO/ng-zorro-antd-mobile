import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'SliderHandle, nzm-slider-handle',
  templateUrl: './slider-handle.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SliderHandleComponent implements OnInit, OnDestroy {
  left: number;

  private _min: number;
  private _max: number;
  private _step: number;
  private _value: number;
  private _disabled: boolean = false;
  private _marks: object = {};
  private _handleStyle: object;
  private _sliderLength: number;
  private _sliderStart: number;
  private _minBound: number;
  private _maxBound: number;
  private _startX: number;
  private _isDraging: boolean = false;
  private _handleStatus: string;
  private _handleOffsetX: number;
  private _oldValue: number;

  @Input()
  set min(value: number) {
    this._min = value;
  }
  @Input()
  set max(value: number) {
    this._max = value;
  }
  @Input()
  set minBound(value: number) {
    this._minBound = value;
  }
  @Input()
  set maxBound(value: number) {
    this._maxBound = value;
  }
  @Input()
  set step(value: number) {
    this._step = value;
  }
  @Input()
  set value(value: number) {
    this._value = value;
    if (this._value) {
      this.left = this.calcOffset(this._value);
    }
  }
  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  set sliderLength(value: number) {
    this._sliderLength = value;
  }
  @Input()
  set sliderStart(value: number) {
    this._sliderStart = value;
  }
  @Input()
  get handleStyle(): object {
    return this._handleStyle;
  }
  set handleStyle(value: object) {
    this._handleStyle = value;
  }
  @Output()
  onChange = new EventEmitter<any>();
  @Output()
  onAfterChange = new EventEmitter<any>();

  /* 手势操作 */
  @HostListener('touchstart', ['$event'])
  panstart(event) {
    // event.preventDefault();
    if (!this._disabled) {
      this._startX = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
      this._handleStatus = 'start';
      this._isDraging = true;
    }
  }

  @HostListener('touchmove', ['$event'])
  panmove(event) {
    event.preventDefault();
    if (!this._disabled && this._isDraging) {
      const pos = event.changedTouches[0].clientX;
      this._value = Math.round(this.calcValueByPos(pos));
      this.left = this.calcOffset(this._value);
      if (this._oldValue !== this._value) {
        this._oldValue = this._value;
        this.onChange.emit(this._value);
      }
    }
  }
  @HostListener('touchend', ['$event'])
  panend(event) {
    event.preventDefault();
    if (!this._disabled && this._isDraging) {
      this._handleStatus = 'end';
      this._isDraging = false;
      const pos = event.changedTouches[0].clientX;
      this._value = Math.round(this.calcValueByPos(pos));
      this.left = this.calcOffset(this._value);
      this.onAfterChange.emit(this._value);
    }
  }

  constructor(private _elf: ElementRef, private _sanitizer: DomSanitizer) {}

  mouseDown = event => {
    if (!this._disabled && this.isMouseTarget(event)) {
      this._startX = event.clientX;
      this._handleStatus = 'start';
      this._isDraging = true;
      document.addEventListener('mousemove', this.mouseMove, false);
      document.addEventListener('mouseup', this.mouseUp, false);
      this.pauseEvent(event);
    }
  }

  mouseMove = event => {
    if (!this._disabled && this._isDraging) {
      this.pauseEvent(event);
      const pos = event.clientX;
      this._value = Math.round(this.calcValueByPos(pos));
      this.left = this.calcOffset(this._value);
      if (this._oldValue !== this._value) {
        this._oldValue = this._value;
        this.onChange.emit(this._value);
      }
    }
  }

  mouseUp = event => {
    if (!this._disabled && this._isDraging) {
      this._handleStatus = 'end';
      this._isDraging = false;
      const pos = event.clientX;
      this._value = Math.round(this.calcValueByPos(pos));
      this.left = this.calcOffset(this._value);
      this.onAfterChange.emit(this._value);
    }
  }

  calcValueByPos(pos) {
    const offset = pos - this._sliderStart;
    let value = this.calcValue(offset);
    if (value <= this._minBound) {
      value = this._minBound;
    }
    if (value >= this._maxBound) {
      value = this._maxBound;
    }
    const closestPoint = this.getClosestPoint(value);
    return this._step === null ? closestPoint : parseFloat(closestPoint.toFixed(this.getPrecision(this._step)));
  }

  calcValue(offset) {
    const ratio = Math.abs(Math.max(offset, 0) / this._sliderLength);
    const value = ratio * (this._max - this._min) + this._min;
    return value;
  }

  getClosestPoint(val) {
    const points = Object.keys(this._marks).map(parseFloat);
    if (this._step !== null) {
      const closestStep = Math.round((val - this._min) / this._step) * this._step + this._min;
      points.push(closestStep);
    }
    const diffs = points.map(function(point) {
      return Math.abs(val - point);
    });
    return points[diffs.indexOf(Math.min.apply(Math, this.toConsumableArray(diffs)))];
  }

  getPrecision(step) {
    const stepString = step.toString();
    let precision = 0;
    if (stepString.indexOf('.') >= 0) {
      precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision;
  }

  calcOffset(value) {
    const ratio = (value - this._min) / (this._max - this._min);
    return ratio * 100;
  }

  pauseEvent(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  isMouseTarget(event) {
    let target = event.target;
    let parentFound = false;
    while (target !== null && !parentFound) {
      if (target === this._elf.nativeElement) {
        parentFound = true;
      }
      target = target.parentElement;
    }
    return parentFound;
  }

  toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      const arr2 = Array(arr.length);
      for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
  }

  ngOnInit() {
    const self = this;
    this._elf.nativeElement.addEventListener('mousedown', this.mouseDown, false);
    this._handleOffsetX = this._elf.nativeElement.getBoundingClientRect().x;
    this.left = this.calcOffset(this._value);
    this._minBound = this._minBound === undefined ? this._min : this._minBound;
    this._maxBound = this._maxBound === undefined ? this._max : this._maxBound;
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.mouseMove, false);
    document.removeEventListener('mouseup', this.mouseUp, false);
  }
}

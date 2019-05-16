import { Component, ElementRef, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'SliderTrack, nzm-slider-track',
  templateUrl: './slider-track.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SliderTrackComponent implements OnChanges {
  prefixCls = 'am-slider';
  elStyle: object;

  private _className: object;
  private _included: boolean = true;
  private _offset: number;
  private _length: number;
  private _style: object;

  @Input()
  get className(): object {
    return this._className;
  }
  set className(value: object) {
    this._className = value;
  }
  @Input()
  get included(): boolean {
    return this._included;
  }
  set included(value: boolean) {
    this._included = value;
  }
  @Input()
  set offset(value: number) {
    this._offset = value;
  }
  @Input()
  set length(value: number) {
    this._length = value;
  }
  @Input()
  set style(value: object) {
    this._style = value;
  }

  constructor(private _elf: ElementRef, private _sanitizer: DomSanitizer) {}

  ngOnChanges() {
    const positonStyle = {
      left: `${this._offset}%`,
      width: `${this._length}%`
    };
    this.elStyle = {
      ...this._style,
      ...positonStyle
    };
  }
}

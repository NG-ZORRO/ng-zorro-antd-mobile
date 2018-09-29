import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';

@Injectable({
  providedIn: 'root',
})
export class NzMeasureScrollbarService {
  private _scrollbarWidth: number;
  private _scrollbarMeasure = {
    position: 'absolute',
    top     : '-9999px',
    width   : '50px',
    height  : '50px',
    overflow: 'scroll'
  };

  get scrollBarWidth(): number {
    if (isNotNil(this._scrollbarWidth)) {
      return this._scrollbarWidth;
    }
    this.initScrollBarWidth();
    return this._scrollbarWidth;
  }

  initScrollBarWidth(): void {
    const scrollDiv = this._document.createElement('div');
    for (const scrollProp in this._scrollbarMeasure) {
      if (this._scrollbarMeasure.hasOwnProperty(scrollProp)) {
        scrollDiv.style[ scrollProp ] = this._scrollbarMeasure[ scrollProp ];
      }
    }
    this._document.body.appendChild(scrollDiv);
    const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this._document.body.removeChild(scrollDiv);
    this._scrollbarWidth = width;
  }

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.initScrollBarWidth();
  }
}

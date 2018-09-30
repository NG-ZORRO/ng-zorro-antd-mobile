import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class NzUpdateHostClassService {
  private _classMap = {};

  updateHostClass(el: HTMLElement, classMap: object): void {
    this.removeClass(el, this._classMap, this._renderer);
    this._classMap = { ...classMap };
    this.addClass(el, this._classMap, this._renderer);
  }

  private removeClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        renderer.removeClass(el, i);
      }
    }
  }

  private addClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        if (classMap[ i ]) {
          renderer.addClass(el, i);
        }
      }
    }
  }

  constructor(private _renderer: Renderer2) {

  }
}

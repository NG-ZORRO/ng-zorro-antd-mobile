import { ScrollStrategy } from '@angular/cdk/overlay';
import { Renderer2 } from '@angular/core';

export class NzBlockScrollStrategy implements ScrollStrategy {

  constructor(private _document: Document, private _renderer: Renderer2) {
  }

  attach(): void {}

  enable(): void {
    this._renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  disable(): void {
    this._renderer.removeStyle(document.body, 'overflow');
  }

}

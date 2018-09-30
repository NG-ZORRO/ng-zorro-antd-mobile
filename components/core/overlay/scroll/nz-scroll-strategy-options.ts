import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NzBlockScrollStrategy } from './nz-block-scroll-strategy';

@Injectable({providedIn: 'root'})
export class NzScrollStrategyOptions {
  private _document: Document;
  private _renderer: Renderer2;
  constructor(
    rendererFactory: RendererFactory2,
    // tslint:disable-next-line:no-any
    @Inject(DOCUMENT) document: any
  ) {
    this._document = document;
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  block = () => new NzBlockScrollStrategy(this._document, this._renderer);
}

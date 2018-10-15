import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IconHandler } from '../core/util/icon';

@Component({
  selector: 'Icon, nzm-icon',
  templateUrl: './icon.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [IconHandler]
})
export class IconComponent {
  clsMap: object = {};

  private _type: string = '';
  private _size: string = 'md';
  private _src: string = '';

  @Input()
  color: string = '';
  @Input()
  get type(): string {
    return this._type;
  }
  set type(value) {
    this._type = value;
    this.setClsMap();
  }
  @Input()
  get src(): string {
    return this._src;
  }
  set src(value: string) {
    this._src = value;
    this.setClsMap();
  }
  @Input()
  get size(): string {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
    this.setClsMap();
  }

  constructor(private _iconHandler: IconHandler) {
    this._iconHandler.load();
  }

  setClsMap() {
    this.clsMap = {
      [`am-icon-${this._type}`]: true,
      [`am-icon-${this._size}`]: true
    };
  }
}

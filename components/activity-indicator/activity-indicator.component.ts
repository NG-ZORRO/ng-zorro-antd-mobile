import { Component, OnInit, Input, HostBinding } from '@angular/core';
const classnames = require('classnames');

@Component({
  selector: 'ActivityIndicator , nzm-ctivity-indicator',
  templateUrl: './activity-indicator.component.html'
})
export class ActivityIndicator implements OnInit {
  prefixCls: string = 'am-activity-indicator';
  wrapClass: string = '';
  spinnerClass: object = {};

  private _text: string;
  private _size: string = 'small';
  private _toast: boolean = false;
  private _animating: boolean = true;

  @Input()
  get animating(): boolean {
    return this._animating;
  }
  set animating(v: boolean) {
    this._animating = v;
    this.setClass();
  }
  @Input()
  set size(v: string) {
    this._size = v;
    this.setClass();
  }
  @Input()
  get toast(): boolean {
    return this._toast;
  }
  set toast(v: boolean) {
    this._toast = v;
    this.setClass();
  }
  @Input()
  get text(): string {
    return this._text;
  }
  set text(v: string) {
    this._text = v;
  }

  @HostBinding('class')
  get class() {
    return this.wrapClass;
  }

  constructor() {}

  setClass() {
    if (this._animating) {
      this.wrapClass = classnames({
        [`${this.prefixCls}`]: true,
        [`${this.prefixCls}-lg`]: this._size === 'large',
        [`${this.prefixCls}-sm`]: this._size === 'small',
        [`${this.prefixCls}-toast`]: !!this._toast
      });
      this.spinnerClass = {
        [`${this.prefixCls}-spinner`]: true,
        [`${this.prefixCls}-spinner-lg`]: !!this._toast || this._size === 'large'
      };
    } else {
      this.wrapClass = '';
    }
  }

  ngOnInit() {
    this.setClass();
  }
}

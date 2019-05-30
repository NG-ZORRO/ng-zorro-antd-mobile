import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ActivityIndicator , nzm-ctivity-indicator',
  templateUrl: './activity-indicator.component.html'
})
export class ActivityIndicatorComponent implements OnInit {
  prefixCls: string = 'am-activity-indicator';
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

  @HostBinding('class.am-activity-indicator')
  clsActIndicator: boolean = true;
  @HostBinding('class.am-activity-indicator-toast')
  clsActIndicatorToast;
  @HostBinding('class.am-activity-indicator-lg')
  clsActIndicatorLg;
  @HostBinding('class.am-activity-indicator-sm')
  clsActIndicatorSm;

  constructor() {}

  setClass() {
    if (this._animating) {
      this.clsActIndicator = true;
      this.clsActIndicatorToast = !!this._toast;
      this.clsActIndicatorLg = this._size === 'large';
      this.clsActIndicatorSm = this._size === 'small';
      this.spinnerClass = {
        [`${this.prefixCls}-spinner`]: true,
        [`${this.prefixCls}-spinner-lg`]: !!this._toast || this._size === 'large'
      };
    } else {
      this.clsActIndicator = false;
      this.clsActIndicatorLg = false;
      this.clsActIndicatorSm = false;
      this.clsActIndicatorToast = false;
    }
  }

  ngOnInit() {
    this.setClass();
  }
}

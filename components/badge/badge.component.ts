import { Component, OnInit, Input, HostBinding, OnChanges, ElementRef, AfterViewInit } from '@angular/core';
const classnames = require('classnames');

@Component({
  selector: 'Badge, nzm-badge',
  templateUrl: './badge.component.html'
})
export class Badge implements OnChanges, OnInit, AfterViewInit {
  prefixCls: string = 'am-badge';
  scrollNumberCls: object = {};
  style: object = {};

  private _text: string;
  private _badgeCls: string;
  private _setClass: string;
  private _size: string = 'small';
  private _dot: boolean = false;
  private _hot: boolean = false;
  private _corner: boolean = false;
  private _children: boolean = false;
  private _overflowCount: number = 99;

  @Input()
  set size(v: string) {
    this._size = v;
    this.setCls();
  }
  @Input()
  get text(): string {
    return this._text;
  }
  set text(v: string) {
    this._text = v;
    this.setCls();
  }
  @Input()
  set corner(v: boolean) {
    this._corner = v;
    this.setCls();
  }
  @Input()
  get dot(): boolean {
    return this._dot;
  }
  set dot(v: boolean) {
    this._dot = v;
    if (this._dot) {
      this._text = '';
    }
    this.setCls();
  }
  @Input()
  set overflowCount(v: number) {
    this._overflowCount = v;
  }
  @Input()
  set hot(v: boolean) {
    this._hot = v;
    this.setCls();
  }
  @Input()
  set setStyle(v: object) {
    this.style = v;
  }
  @Input()
  set className(v: string) {
    this._setClass = v;
  }

  @HostBinding('class')
  get class(): string {
    return 'am-badge ' + this._badgeCls;
  }

  constructor(private _ref: ElementRef) {}

  setCls() {
    this.scrollNumberCls = classnames({
      [`${this.prefixCls}-dot`]: this._dot,
      [`${this.prefixCls}-dot-large`]: this._dot && this._size === 'large',
      [`${this.prefixCls}-text`]: !this._dot && !this._corner,
      [`${this.prefixCls}-corner`]: this._corner,
      [`${this.prefixCls}-corner-large`]: this._corner && this._size === 'large'
    });

    this._badgeCls = classnames(this._setClass, {
      [`${this.prefixCls}-not-a-wrapper`]: !this._children,
      [`${this.prefixCls}-corner-wrapper`]: this._corner,
      [`${this.prefixCls}-hot`]: !!this._hot,
      [`${this.prefixCls}-corner-wrapper-large`]: this._corner && this._size === 'large'
    });
  }

  ngOnChanges() {
    if (typeof this._text === 'number' && this._text > this._overflowCount) {
      this._text = this._overflowCount + '+';
    }
  }

  ngOnInit() {
    this.setCls();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this._ref.nativeElement.children.length > 1) {
        this._children = true;
        this.setCls();
      }
    }, 10);
  }
}

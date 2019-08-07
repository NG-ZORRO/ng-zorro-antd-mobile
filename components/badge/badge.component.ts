import { Component, OnInit, Input, HostBinding, OnChanges, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'Badge, nzm-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnChanges, OnInit, AfterViewInit {
  prefixCls: string = 'am-badge';
  scrollNumberCls: object = {};
  style: object = {};

  private _text: string;
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
    const clsArr = this._setClass.split(' ');
    clsArr.forEach(cls => {
      this.render.addClass(this._ref.nativeElement, cls);
    });
  }

  @HostBinding('class.am-badge')
  clsBadge: boolean = true;
  @HostBinding('class.am-badge-not-a-wrapper')
  clsBadgeWrp: boolean = !this._children;
  @HostBinding('class.am-badge-corner-wrapper')
  clsBadgeCornerWrp: boolean = this._corner;
  @HostBinding('class.am-badge-hot')
  clsBadgeHot: boolean = !!this._hot;
  @HostBinding('class.am-badge-corner-wrapper-large')
  clsBadgeCornerWrpLg: boolean = this._corner && this._size === 'large';

  constructor(private _ref: ElementRef, private render: Renderer2) {}

  setCls() {
    this.scrollNumberCls = {
      [`${this.prefixCls}-dot`]: this._dot,
      [`${this.prefixCls}-dot-large`]: this._dot && this._size === 'large',
      [`${this.prefixCls}-text`]: !this._dot && !this._corner,
      [`${this.prefixCls}-corner`]: this._corner,
      [`${this.prefixCls}-corner-large`]: this._corner && this._size === 'large'
    };
    this.clsBadgeWrp = !this._children;
    this.clsBadgeCornerWrp = this._corner;
    this.clsBadgeHot = !!this._hot;
    this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
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
      if (
        this._ref.nativeElement.children.length > 1 ||
        (this._ref.nativeElement.children.length === 1 && !this.dot && !this.text)
      ) {
        this._children = true;
        this.setCls();
      }
    }, 10);
  }
}

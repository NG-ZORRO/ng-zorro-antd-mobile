import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  TemplateRef,
  EventEmitter,
  Output,
  OnDestroy,
  HostBinding,
  HostListener
} from '@angular/core';

@Component({
  selector: 'ListItem, nzm-list-item',
  templateUrl: './list-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent implements OnInit, OnDestroy {
  defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'ios',
    rippleStyle: {}
  };
  arrowCls: any = {};
  lineCls: any = {};
  wrapCls: string = '';
  rippleCls: any = {};
  rippleClicked: boolean = false;
  debounceTimeout: any;

  private _thumb_component: boolean = false;
  private _thumb: TemplateRef<any>;
  private _thumb_src: string = '';
  private _extra_component: boolean = false;
  private _extra: TemplateRef<any>;
  private _extra_title: string = '';
  private _arrow: string = '';
  private _disabled: boolean = false;
  private _className: string = '';
  private _active: boolean = false;

  @Input()
  get extra() {
    return this._extra;
  }
  get extra_component() {
    return this._extra_component;
  }
  get extra_title() {
    return this._extra_title;
  }
  set extra(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._extra_component = true;
      this._extra = value;
    } else {
      this._extra_component = false;
      this._extra_title = <string>value;
    }
  }
  @Input()
  set className(value) {
    this._className = value;
    this.setClsMap();
  }
  @Input()
  get arrow() {
    return this._arrow;
  }
  set arrow(value) {
    this._arrow = value;
    this.setClsMap();
  }
  @Input()
  set multipleLine(value) {
    this.defaultProps.multipleLine = value === '' ? true : value;
    this.setClsMap();
  }
  @Input()
  set error(value) {
    this.defaultProps.error = value === '' ? true : value;
    this.setClsMap();
  }
  @Input()
  set wrap(value) {
    this.defaultProps.wrap = value === '' ? true : value;
    this.setClsMap();
  }
  @Input()
  set align(value) {
    this.defaultProps.align = value;
    this.setClsMap();
  }
  @Input()
  set platform(value) {
    this.defaultProps.platform = value;
  }
  @Input()
  set disabled(value) {
    if (typeof value === 'boolean') {
      this._disabled = value;
    } else {
      if (value === 'true') {
        this._disabled = true;
      } else {
        this._disabled = false;
      }
    }
    this.setClsMap();
  }
  @Input()
  get thumb() {
    return this._thumb;
  }
  get thumb_component() {
    return this._thumb_component;
  }
  get thumb_src() {
    return this._thumb_src;
  }
  set thumb(value) {
    if (value instanceof TemplateRef) {
      this._thumb_component = true;
      this._thumb = value;
    } else {
      this._thumb_component = false;
      this._thumb_src = <string>value;
    }
  }
  @Output()
  onClick: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class')
  get bingClassName(): string {
    return this.wrapCls;
  }
  @HostListener('click', ['$event'])
  click(event) {
    this.onItemClick(event);
  }
  @HostListener('touchstart')
  start() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = true;
      this.setClsMap();
    }
  }
  @HostListener('touchmove')
  move() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = false;
      this.setClsMap();
    }
  }
  @HostListener('touchend')
  end() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = false;
      this.setClsMap();
    }
  }
  @HostListener('mousedown')
  mouse_start() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = true;
      this.setClsMap();
    }
  }
  @HostListener('mouseup')
  mouse_end() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = false;
      this.setClsMap();
    }
  }

  constructor() {}

  setClsMap() {
    const classNameList = this._className.split(' ');
    let classNameObj = {};
    this.wrapCls = '';

    for (const value of classNameList) {
      if (value) {
        classNameObj = {
          ...classNameObj,
          ...{ [`${value}`]: true }
        };
      }
    }

    const wrapClsObj = {
      [`${this.defaultProps.prefixCls}-item`]: true,
      [`${this.defaultProps.prefixCls}-item-disabled`]: this._disabled,
      [`${this.defaultProps.prefixCls}-item-active`]: this._active,
      [`${this.defaultProps.prefixCls}-item-error`]: this.defaultProps.error,
      [`${this.defaultProps.prefixCls}-item-top`]: this.defaultProps.align === 'top',
      [`${this.defaultProps.prefixCls}-item-middle`]: this.defaultProps.align === 'middle',
      [`${this.defaultProps.prefixCls}-item-bottom`]: this.defaultProps.align === 'bottom',
      ...classNameObj
    };

    for (const key in wrapClsObj) {
      if (wrapClsObj[key]) {
        this.wrapCls += ` ${key}`;
      }
    }

    this.rippleCls = {
      [`${this.defaultProps.prefixCls}-ripple`]: true,
      [`${this.defaultProps.prefixCls}-ripple-animate`]: this.rippleClicked
    };

    this.lineCls = {
      [`${this.defaultProps.prefixCls}-line`]: true,
      [`${this.defaultProps.prefixCls}-line-multiple`]: this.defaultProps.multipleLine,
      [`${this.defaultProps.prefixCls}-line-wrap`]: this.defaultProps.wrap
    };

    this.arrowCls = {
      [`${this.defaultProps.prefixCls}-arrow`]: true,
      [`${this.defaultProps.prefixCls}-arrow-horizontal`]: this._arrow === 'horizontal',
      [`${this.defaultProps.prefixCls}-arrow-vertical`]: this._arrow === 'down' || this._arrow === 'up',
      [`${this.defaultProps.prefixCls}-arrow-vertical-up`]: this._arrow === 'up'
    };
  }

  onItemClick(ev) {
    const isAndroid = this.defaultProps.platform === 'android';
    if (isAndroid) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
      const Item = ev.currentTarget;
      const RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
      const ClientRect = ev.currentTarget.getBoundingClientRect();
      const pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
      const pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
      const coverRippleStyle = {
        width: `${RippleWidth}px`,
        height: `${RippleWidth}px`,
        left: `${pointX}px`,
        top: `${pointY}px`
      };
      this.defaultProps.rippleStyle = coverRippleStyle;
      this.rippleClicked = true;
      this.setClsMap();
      this.debounceTimeout = setTimeout(() => {
        this.rippleClicked = false;
        this.defaultProps.rippleStyle = { display: 'none' };
        this.setClsMap();
      }, 1000);
    }
    this.onClick.emit(ev);
  }

  ngOnInit() {
    this.defaultProps.rippleStyle = { display: 'none' };
    this.setClsMap();
  }

  ngOnDestroy(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }
}

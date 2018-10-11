import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'Flex, nzm-flex',
  templateUrl: './flex.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FlexComponent {
  defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center'
  };

  // _wrapCls = {};
  private _direction: string = '';
  private _wrap: string;
  private _justify: string = '';
  private _alignContent: string = '';

  @Input()
  set direction(value) {
    this._direction = value;
  }
  @Input()
  set wrap(value) {
    this._wrap = value;
  }
  @Input()
  set justify(value) {
    this._justify = value;
  }
  @Input()
  set align(value) {
    this.defaultProps.align = value;
  }
  @Input()
  set alignContent(value) {
    this._alignContent = value;
  }

  @HostBinding('class.am-flexbox')
  amFlexbox: boolean = true;
  @HostBinding('class.am-flexbox-dir-row')
  get amFlexboxDirRow() {
    return this._direction === 'row';
  }
  @HostBinding('class.am-flexbox-dir-row-reverse')
  get amFlexboxDirRowReverse() {
    return this._direction === 'row-reverse';
  }
  @HostBinding('class.am-flexbox-dir-column')
  get amFlexboxDirColumn() {
    return this._direction === 'column';
  }
  @HostBinding('class.am-flexbox-dir-column-reverse')
  get amFlexboxDirColumnReverse() {
    return this._direction === 'column-reverse';
  }
  @HostBinding('class.am-flexbox-nowrap')
  get amFlexboxNowrap() {
    return this._wrap === 'nowrap';
  }
  @HostBinding('class.am-flexbox-wrap')
  get amFlexboxWrap() {
    return this._wrap === 'wrap';
  }
  @HostBinding('class.am-flexbox-wrap-reverse')
  get amFlexboxWrapReverse() {
    return this._wrap === 'wrap-reverse';
  }
  @HostBinding('class.am-flexbox-justify-start')
  get amFlexboxJustifyStart() {
    return this._justify === 'start';
  }
  @HostBinding('class.am-flexbox-justify-center')
  get amFlexboxJustifyCenter() {
    return this._justify === 'center';
  }
  @HostBinding('class.am-flexbox-justify-end')
  get amFlexboxJustifyEnd() {
    return this._justify === 'end';
  }
  @HostBinding('class.am-flexbox-justify-between')
  get amFlexboxJustifyBetween() {
    return this._justify === 'between';
  }
  @HostBinding('class.am-flexbox-justify-around')
  get amFlexboxAlignAround() {
    return this._justify === 'around';
  }
  @HostBinding('class.am-flexbox-align-start')
  get amFlexboxAlignStart() {
    return this.defaultProps.align === 'start';
  }
  @HostBinding('class.am-flexbox-align-center')
  get amFlexboxAlignCenter() {
    return this.defaultProps.align === 'center';
  }
  @HostBinding('class.am-flexbox-align-end')
  get amFlexboxAlignEnd() {
    return this.defaultProps.align === 'end';
  }
  @HostBinding('class.am-flexbox-align-baseline')
  get amFlexboxAlignBaseline() {
    return this.defaultProps.align === 'baseline';
  }
  @HostBinding('class.am-flexbox-align-stretch')
  get amFlexboxAlignStretch() {
    return this.defaultProps.align === 'stretch';
  }
  @HostBinding('class.am-flexbox-align-content-start')
  get amFlexboxAlignContentStart() {
    return this._alignContent === 'start';
  }
  @HostBinding('class.am-flexbox-align-content-center')
  get amFlexboxAlignCotentCenter() {
    return this._alignContent === 'center';
  }
  @HostBinding('class.am-flexbox-align-content-end')
  get amFlexboxAlignContentEnd() {
    return this._alignContent === 'end';
  }
  @HostBinding('class.am-flexbox-align-content-between')
  get amFlexboxAlignContentBetween() {
    return this._alignContent === 'between';
  }
  @HostBinding('class.am-flexbox-align-content-around')
  get amFlexboxAlignContentAround() {
    return this._alignContent === 'around';
  }
  @HostBinding('class.am-flexbox-align-content-stretch')
  get amFlexboxAlignContentStretch() {
    return this._alignContent === 'stretch';
  }

  constructor() {}
}

@Component({
  selector: 'FlexItem, nzm-flex-item',
  template: `
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FlexItemComponent {
  defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center'
  };

  @HostBinding('class.am-flexbox-item')
  flexboxItem: boolean = true;
}

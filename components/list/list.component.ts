import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'List, nzm-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class List {
  defaultProps: any = {
    prefixCls: 'am-list'
  };

  private _renderHeader: any = '';
  private _renderFooter: any = '';
  private _className: string = '';

  @Input()
  set className(value) {
    this._className = value;
  }
  @Input()
  get renderHeader() {
    return this._renderHeader;
  }
  set renderHeader(value) {
    this._renderHeader = value;
  }
  @Input()
  get renderFooter() {
    return this._renderFooter;
  }
  set renderFooter(value) {
    this._renderFooter = value;
  }

  @HostBinding('class')
  get hostClassName(): string {
    return 'am-list ' + this._className;
  }

  constructor() {}
}

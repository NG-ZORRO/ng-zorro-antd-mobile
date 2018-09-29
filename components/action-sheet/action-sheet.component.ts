import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ActionSheet',
  templateUrl: './action-sheet.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ActionSheetComponent {
  props = {
    prefixCls: 'am-action-sheet',
    cancelButtonText: '取消'
  };
  flag: string = '';
  title: string = '';
  message: string = '';
  transitionName: string = '';
  maskTransitionName: string = '';
  activeClassName = [`${this.props.prefixCls}-button-list-item-active`];
  onPress;

  constructor() {}

  showShare(flag) {
    const cls = { [`${this.props.prefixCls}-share`]: flag === 'SHARE' };
    return cls;
  }

  isTemplateRef(value) {
    if (value) {
      return value instanceof TemplateRef;
    }
    return false;
  }

  isArray(options: any, value: any) {
    if (options.length > 0 && value) {
      return value instanceof Array;
    }
    return false;
  }
}

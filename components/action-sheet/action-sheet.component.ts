import { Component, TemplateRef, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'ActionSheet',
  templateUrl: './action-sheet.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ActionSheetComponent {
  option: any;
  constructor() {}

  onPress(index: any, rowIndex = 0, event) {}
  showShare(option) {
    const cls = { [`${option.prefixCls}-share`]: option.flag === 'SHARE' };
    return cls;
  }

  setActiveClassName(option, suffix) {
    return [`${option.prefixCls}-${suffix}-active`];
  }

  isNoTitle(value: string | TemplateRef<any>) {
    return value === '' || value === null || value === undefined;
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

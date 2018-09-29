import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'Brief, nzm-brief',
  templateUrl: './brief.component.html',
  encapsulation: ViewEncapsulation.None
})
export class Brief {
  defaultProps = {
    prefixCls: 'am-list'
  };
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'Brief, nzm-brief',
  templateUrl: './brief.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BriefComponent {
  defaultProps = {
    prefixCls: 'am-list'
  };
}

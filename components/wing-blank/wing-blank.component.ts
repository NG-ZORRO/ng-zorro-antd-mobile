import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

export type WingBlankSizeType = 'sm' | 'md' | 'lg';

@Component({
  selector: 'WingBlank, nzm-wingblank',
  templateUrl: './wing-blank.component.html',
  encapsulation: ViewEncapsulation.None
})
export class WingBlankComponent {
  prefixCls: string = 'am-wingblank';

  @Input()
  size: WingBlankSizeType = 'lg';

  @HostBinding('class.am-wingblank')
  amWingBlank: boolean = true;
  @HostBinding('class.am-wingblank-sm')
  get amWingBlnkSm(): boolean {
    return this.size === 'sm';
  }
  @HostBinding('class.am-wingblank-md')
  get amWingBlnkMd(): boolean {
    return this.size === 'md';
  }
  @HostBinding('class.am-wingblank-lg')
  get amWingBlnkLg(): boolean {
    return this.size === 'lg';
  }

  constructor() {}
}

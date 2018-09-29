import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

export type sizeType = 'sm' | 'md' | 'lg';

@Component({
  selector: 'WingBlank, nzm-wingblank',
  templateUrl: './wing-blank.component.html',
  encapsulation: ViewEncapsulation.None
})
export class WingBlank {
  prefixCls: string = 'am-wingblank';

  @Input()
  size: sizeType = 'lg';

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

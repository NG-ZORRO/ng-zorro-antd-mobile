import { Component, Input, HostBinding } from '@angular/core';

export type WhiteSpaceSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'WhiteSpace, nzm-whitespace',
  template: ``
})
export class WhiteSpaceComponent {
  prefixCls: string = 'am-whitespace';

  @Input()
  size: WhiteSpaceSizeType = 'md';

  @HostBinding('class.am-whitespace')
  amWhiteSpace: boolean = true;
  @HostBinding('class.am-whitespace-xs')
  get amWhitespaceXs(): boolean {
    return this.size === 'xs';
  }
  @HostBinding('class.am-whitespace-sm')
  get amWhitespaceSm(): boolean {
    return this.size === 'sm';
  }
  @HostBinding('class.am-whitespace-md')
  get amWhitespaceMd(): boolean {
    return this.size === 'md';
  }
  @HostBinding('class.am-whitespace-lg')
  get amWhitespaceLg(): boolean {
    return this.size === 'lg';
  }
  @HostBinding('class.am-whitespace-xl')
  get amWhitespaceXl(): boolean {
    return this.size === 'xl';
  }

  constructor() {}
}

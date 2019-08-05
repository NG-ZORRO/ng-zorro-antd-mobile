import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';

@Component({
  selector: 'CardHeader, nzm-card-header',
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CardHeaderComponent {
  prefixCls: string = 'am-card-header';

  @Input()
  thumb: string | TemplateRef<void> = null;
  @Input()
  thumbStyle: object = null;
  @Input()
  title: string | TemplateRef<void> = null;
  @Input()
  extra: string | TemplateRef<void> = null;

  @HostBinding('class.am-card-header')
  cardBodyWrapper: boolean = true;

  constructor() {}

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
}

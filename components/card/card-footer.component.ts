import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';

@Component({
  selector: 'CardFooter, nzm-card-footer',
  templateUrl: './card-footer.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CardFooterComponent {
  prefixCls: string = 'am-card-footer';

  @Input()
  content: string | TemplateRef<void> = null;
  @Input()
  extra: string | TemplateRef<void> = null;

  @HostBinding('class.am-card-footer')
  cardFooterWrapper: boolean = true;

  constructor() {}

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
}

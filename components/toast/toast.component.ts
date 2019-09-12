import { Component, ViewEncapsulation, Input, TemplateRef, NgZone } from '@angular/core';

@Component({
  selector: 'Toast',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './toast.component.html',
  host: {
    '[class.am-toast]': 'true',
    '[class.am-toast-mask]': 'mask',
    '[class.am-toast-mask-top]': `mask && position === 'top'`,
    '[class.am-toast-mask-middle]': `mask && position === 'middle'`,
    '[class.am-toast-mask-bottom]': `mask && position === 'bottom'`,
    '[class.am-toast-nomask]': '!mask',
    '[class.am-toast-nomask-top]': `!mask && position === 'top'`,
    '[class.am-toast-nomask-middle]': `!mask && position === 'middle'`,
    '[class.am-toast-nomask-bottom]': `!mask && position === 'bottom'`
  }
})
export class ToastComponent {
  prefixCls: string = 'am-toast';
  isContentString: boolean = true;
  maskClassMap;
  transitionName = 'am-fade-enter am-fade-enter-active';

  private _iconType: string = '';
  private _content: string | TemplateRef<any> = '';

  @Input()
  mask: boolean = true;
  @Input()
  get content(): string | TemplateRef<any> {
    return this._content;
  }
  set content(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isContentString = false;
    } else {
      this.isContentString = true;
    }
    this._zone.run(() => {
      this._content = value;
    });
  }
  @Input()
  get iconType(): string {
    return this._iconType;
  }
  set iconType(value: string) {
    this._zone.run(() => {
      this._iconType = value;
    });
  }
  @Input()
  position: string = 'middle';

  constructor(private _zone: NgZone) {}
}

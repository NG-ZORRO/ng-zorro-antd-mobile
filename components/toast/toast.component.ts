import { Component, ViewEncapsulation, Input, TemplateRef, HostBinding } from '@angular/core';

@Component({
  selector: 'Toast',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './toast.component.html'
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
    this._content = value;
  }
  @Input()
  get iconType(): string {
    return this._iconType;
  }
  set iconType(value: string) {
    this._iconType = value;
  }

  @HostBinding('class.am-toast')
  amToast: boolean = true;
  @HostBinding('class.am-toast-mask')
  get amToastMask(): boolean {
    return this.mask;
  }
  @HostBinding('class.am-toast-nomask')
  get amToastNoMask(): boolean {
    return !this.mask;
  }

  constructor() {}
}

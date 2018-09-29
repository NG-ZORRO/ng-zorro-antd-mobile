import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

export interface OnChangeEvent {
  name: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'AgreeItem, nzm-agree-item',
  templateUrl: './agree-item.component.html'
})
export class AgreeItem {
  prefixCls: string = 'am-checkbox';

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
  checked: boolean = false;
  @Input()
  disabled: boolean = false;
  @Output()
  onChange = new EventEmitter<OnChangeEvent>();

  @HostBinding('class.am-checkbox-agree')
  checkboxAgree: boolean = true;

  constructor() {}

  agree() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  change(event) {
    this.onChange.emit(event);
  }
}

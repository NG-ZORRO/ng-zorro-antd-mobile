import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface OnChangeEvent {
  name: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'CheckboxItem, nzm-checkbox-item',
  templateUrl: './checkbox-item.component.html'
})
export class CheckboxItem {
  prefixCls = 'am-checkbox';

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
  @Output()
  onClick = new EventEmitter();

  constructor() {}

  onCheckboxClick(event) {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
    if (this.onClick.observers.length > 0) {
      this.onClick.emit(event);
    }
  }

  change(event) {
    this.onChange.emit(event);
  }
}

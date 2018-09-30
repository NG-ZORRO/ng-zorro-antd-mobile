import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface OnChangeEvent {
  name: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'RadioItem, nzm-radio-item',
  templateUrl: './radio-item.component.html'
})
export class RadioItem {
  prefixCls: string = 'am-radio';

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
  checked: boolean = false;
  @Input()
  disabled: boolean = false;
  @Output()
  onClick = new EventEmitter();
  @Output()
  onChange = new EventEmitter<OnChangeEvent>();

  constructor() {}

  onRadioItemClick(event) {
    if (!this.disabled && !this.checked) {
      this.checked = true;
      this.onChange.emit({
        name: this.name,
        value: this.value,
        checked: true
      });
    }
    if (this.onClick.observers.length > 0) {
      this.onClick.emit(event);
    }
  }
}

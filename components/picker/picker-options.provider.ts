import {EventEmitter} from '@angular/core';
export interface PickerOptionsInterface {
  data: Array<any>;
  cols: number;
  mask: boolean;
  title: string;
  okText: string;
  dismissText: string;
  disabled: boolean;
  cascade: boolean;
  appendToBody: boolean;
}

export class PickerOptions implements PickerOptionsInterface {
  data = [];
  value = [];
  cols = 3;
  mask: boolean = true;
  title = '';
  okText = '确定';
  dismissText = '取消';
  disabled = false;
  cascade = true;
  appendToBody = false;
  onOk: EventEmitter<any> = new EventEmitter();
  onDismiss: EventEmitter<any> = new EventEmitter();
  onPickerChange: EventEmitter<any> = new EventEmitter();
  hidePicker: () => void;
}

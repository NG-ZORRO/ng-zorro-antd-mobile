import { EventEmitter, Injectable } from '@angular/core';
import { zh_CN } from '../locale-provider/locale';
export interface DatePickerOptionsInterface {
  mode: string;
  value: Date;
  minDate: Date;
  maxDate: Date;
  use12Hours: boolean;
  minuteStep: Number;
  locale: any;
  disabled: boolean;
  mask: boolean;
  title: string;
  okText: string;
  dismissText: string;
  appendToBody: boolean;
  showErrorToast: boolean;
  showErrorToastInterval: number;
}

@Injectable()
export class DatePickerOptions implements DatePickerOptionsInterface {
  mode = 'date';
  value = new Date();
  minDate = new Date(2000, 6, 1, 0, 0, 0);
  maxDate = new Date(2030, 1, 1, 23, 59, 59);
  use12Hours = false;
  minuteStep = 1;
  data = [];
  mask: boolean = true;
  title = '';
  okText = '确定';
  dismissText = '取消';
  disabled = false;
  locale;
  appendToBody = false;
  showErrorToast = true;
  showErrorToastInterval = 2000;
  onOk: EventEmitter<any> = new EventEmitter();
  onDismiss: EventEmitter<any> = new EventEmitter();
  onValueChange: EventEmitter<any> = new EventEmitter();
  onChange: EventEmitter<any> = new EventEmitter();
  hidePicker: () => void;
  updateNgModel?: (value: Date) => void;
}

import { Component } from '@angular/core';

@Component({
  selector: 'demo-date-picker-view-basic',
  template: `
    <div class="sub-title">Start datetime {{ getDate(value1) }}</div>
    <DatePickerView [(ngModel)]="value1" (onValueChange)="onValueChange($event)"></DatePickerView>
  `,
  styles: [
    `
      .sub-title {
        margin: 8px;
      }
    `
  ]
})
export class DemoDatePickerViewBasicComponent {
  name1 = '选择';
  name2 = '选择';
  mode = 'date';

  value1 = new Date(2018, 8, 15, 8, 0);
  value2 = new Date();

  currentDateFormat(date, format: string = 'yyyy-mm-dd HH:MM:ss'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth() + 1))
      .replace('dd', pad(date.getDate()))
      .replace('HH', pad(date.getHours()))
      .replace('MM', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));
  }

  getDate(result) {
    let format = 'yyyy-mm-dd';
    if (this.mode === 'year') {
      format = 'yyyy';
    } else if (this.mode === 'month') {
      format = 'yyyy-mm';
    } else if (this.mode === 'date') {
      format = 'yyyy-mm-dd';
    } else if (this.mode === 'datetime') {
      format = 'yyyy-mm-dd HH:MM';
    } else {
      format = 'HH:MM';
    }
    this.value1 = result;
    return this.currentDateFormat(result, format);
  }

  onValueChange(event) {
    console.log(event);
  }

  formatIt(date: Date, form: string) {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    if (form === 'YYYY-MM-DD') {
      return dateStr;
    }
    if (form === 'HH:mm') {
      return timeStr;
    }
    return `${dateStr} ${timeStr}`;
  }
}

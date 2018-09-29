import { Component, ViewEncapsulation } from '@angular/core';
import { en_US, ru_RU, zh_CN, sv_SE } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-date-picker-basic',
  encapsulation: ViewEncapsulation.None,
  template: `
    <List [className]="'date-picker-list'">
      <ListItem DatePicker
                [extra]="name1"
                [arrow]="'horizontal'"
                [mode]="'datetime'"
                [value]="value1"
                (onOk)="onOk1($event)"
                (onValueChange)="onValueChange($event)"
      >
        Datetime
      </ListItem>
      <ListItem DatePicker
                [extra]="name2"
                [arrow]="'horizontal'"
                [mode]="'date'"
                [value]="value2"
                (onOk)="onOk2($event)"
      >
        Date
      </ListItem>
      <ListItem DatePicker
                [extra]="name3"
                [arrow]="'horizontal'"
                [mode]="'time'"
                [value]="value3"
                (onOk)="onOk3($event)"
      >
        Time
      </ListItem>
      <ListItem DatePicker
                [extra]="name4"
                [arrow]="'horizontal'"
                [mode]="'time'"
                [locale]="locale"
                [value]="value4"
                (onOk)="onOk4($event)"
      >
        UTC Time
      </ListItem>
    </List>
  `,
  styles: [
    `
      .date-picker-list .am-list-item .am-list-line .am-list-extra {
        flex-basis: initial;
      }
    `
  ]
})
export class DemoDatePickerBasicComponent {
  locale = en_US;
  name1 = '选择';
  name2 = '选择';
  name3 = '选择';
  name4 = '选择';

  nowTimeStamp = Date.now();
  now = new Date(this.nowTimeStamp);
  utcNow = new Date(this.now.getTime() + this.now.getTimezoneOffset() * 60000);

  value = [];
  value1 = new Date();
  value2 = new Date();
  value3 = new Date();
  value4 = this.utcNow;

  currentDateFormat(date, format: string = 'yyyy-mm-dd HH:MM'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth()))
      .replace('dd', pad(date.getDate()))
      .replace('HH', pad(date.getHours()))
      .replace('MM', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));
  }

  onOk1(result: Date) {
    this.name1 = this.currentDateFormat(result);
    this.value1 = result;
  }

  onOk2(result) {
    this.name2 = this.currentDateFormat(result, 'yyyy-dd-mm');
    this.value2 = result;
  }

  onOk3(result) {
    this.name3 = this.formatIt(result, 'HH:mm');
    this.value3 = result;
  }

  onOk4(result) {
    this.name4 = this.formatIt(result, 'HH:mm');
    this.value4 = result;
  }

  onValueChange(result) {
    this.name1 = this.currentDateFormat(result);
    this.value1 = result;
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

import { Component, ViewEncapsulation } from '@angular/core';
import { en_US, ru_RU, zh_CN, sv_SE, da_DK } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-date-picker-basic',
  encapsulation: ViewEncapsulation.None,
  template: `
    <List [className]="'date-picker-list'">
      <ListItem
        DatePicker
        [extra]="currentDateFormat(value1)"
        [arrow]="'horizontal'"
        [mode]="'datetime'"
        [(ngModel)]="value1"
        (onOk)="onOk1($event)"
      >
        Datetime
        <Brief>{{ name1 }}</Brief>
      </ListItem>
      <ListItem
        DatePicker
        [extra]="currentDateFormat(value2, 'yyyy-mm-dd')"
        [arrow]="'horizontal'"
        [mode]="'date'"
        [(ngModel)]="value2"
        (onOk)="onOk2($event)"
      >
        Date
        <Brief>{{ name2 }}</Brief>
      </ListItem>
      <ListItem
        DatePicker
        [extra]="currentDateFormat(value3)"
        [arrow]="'horizontal'"
        [mode]="'time'"
        [(ngModel)]="value3"
        (onOk)="onOk3($event)"
      >
        Time
        <Brief>{{ name3 }}</Brief>
      </ListItem>
      <ListItem
        DatePicker
        [extra]="currentDateFormat(value4)"
        [arrow]="'horizontal'"
        [mode]="'time'"
        [locale]="locale"
        [(ngModel)]="value4"
        (onOk)="onOk4($event)"
      >
        UTC Time
        <Brief>{{ name4 }}</Brief>
      </ListItem>
      <ListItem
        DatePicker
        [extra]="currentDateFormat(value5)"
        [arrow]="'horizontal'"
        [mode]="'datetime'"
        [(ngModel)]="value5"
        (onOk)="onOk5($event)"
      >
        Datetime
        <Brief>{{ name5 }}</Brief>
      </ListItem>
      <ListItem
        DatePicker
        [extra]="currentDateFormat(value6)"
        [arrow]="'horizontal'"
        [mode]="'datetime'"
        [(ngModel)]="value6"
        (onOk)="onOk6($event)"
      >
        Datetime
        <Brief>{{ name6 }}</Brief>
      </ListItem>
      <ListItem
        DatePicker
        [disabled]="true"
        [extra]="currentDateFormat(value6)"
        [arrow]="'horizontal'"
        [mode]="'datetime'"
        (onOk)="onOk6($event)"
      >
        Datetime
        <Brief>{{ name6 }}</Brief>
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
  name5 = '当前时间小于最小时间';
  name6 = '当前时间大于最大时间';

  nowTimeStamp = Date.now();
  now = new Date(this.nowTimeStamp);
  utcNow = new Date(this.now.getTime() + this.now.getTimezoneOffset() * 60000);

  value = [];
  value1 = new Date();
  value2 = new Date();
  value3 = new Date();
  value4 = this.utcNow;
  value5 = new Date(1999, 1, 1, 1, 1);
  value6 = new Date(2031, 1, 1, 1, 1);

  currentDateFormat(date, format: string = 'yyyy-mm-dd HH:MM'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth() + 1))
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
    this.name2 = this.currentDateFormat(result, 'yyyy-mm-dd');
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

  onOk5(result: Date) {
    this.name5 = this.currentDateFormat(result);
    this.value5 = result;
  }

  onOk6(result: Date) {
    this.name6 = this.currentDateFormat(result);
    this.value6 = result;
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

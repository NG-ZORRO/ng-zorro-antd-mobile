import { Component } from '@angular/core';

const extra = {
  '2017/07/15': { info: 'Disable', disable: true }
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

for (let key in extra) {
  if (extra.hasOwnProperty(key)) {
    let info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
      extra[+date] = info;
    }
  }
}

@Component({
  selector: 'demo-calendar-basic',
  template: `
    <div class="am-demo-page">
      <List className="calendar-list" style="backgroundColor: 'white'">
        <ListItem className="item" [extra]="_switch">
          {{ this.state.en ? 'Chinese' : '中文' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_0()">
          {{ this.state.en ? 'ngModel' : 'ngModel' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_1()">
          {{ this.state.en ? 'Select Date Range' : '选择日期区间' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_2()">
          {{ this.state.en ? 'Select DateTime Range' : '选择日期时间区间' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_3()">
          {{ this.state.en ? 'Select Date' : '选择日期' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_4()">
          {{ this.state.en ? 'Select DateTime' : '选择日期时间' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_5()">
          {{ this.state.en ? 'Select Date Range (Shortcut)' : '选择日期区间(快捷)' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_6()">
          {{ this.state.en ? 'Select DateTime Range (Shortcut)' : '选择日期时间区间(快捷)' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_7()">
          {{ this.state.en ? 'XL row size' : '大行距' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_8()">
          {{ this.state.en ? 'infinite: false' : '不无限滚动' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_9()">
          {{ this.state.en ? 'Horizontal enter' : '水平进入' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_10()">
          {{ this.state.en ? 'Selected Date Range' : '默认选择范围' }}
        </ListItem>
        <ListItem [arrow]="'horizontal'" (onClick)="onClick_11()">
          {{ this.state.en ? 'onSelect API' : 'onSelect API' }}
        </ListItem>
        <ListItem *ngIf="this.state.startDate"> Time1: {{ this.state.startDate.toLocaleString() }} </ListItem>
        <ListItem *ngIf="this.state.endDate"> Time2: {{ this.state.endDate.toLocaleString() }} </ListItem>
      </List>
      <ng-template #_switch>
        <Switch className="right" [checked]="!this.state.en" (onChange)="this.changeLanguage()"></Switch>
      </ng-template>
      <Calendar
        [(ngModel)]="this.state.date"
        [locale]="this.state.en ? 'enUS' : 'zhCN'"
        [enterDirection]="this.state.enterDirection"
        [visible]="this.state.show"
        [getDateExtra]="this.state.getDateExtra"
        [defaultDate]="this.state.now"
        [minDate]="this.state.minDate"
        [maxDate]="this.state.maxDate"
        [pickTime]="this.state.pickTime"
        [type]="this.state.type"
        [rowSize]="this.state.rowSize"
        [showShortcut]="this.state.showShortcut"
        [infinite]="this.state.infinite"
        [defaultValue]="this.state.defaultValue"
        [onSelect]="this.state.onSelect"
        (onCancel)="triggerCancel()"
        (onConfirm)="triggerConfirm($event)"
        (onSelectHasDisableDate)="triggerSelectHasDisableDate($event)"
      ></Calendar>
    </div>
  `
})
export class DemoCalendarBasicComponent {
  state: any = {
    en: false,
    date: null,
    show: false,
    pickTime: false,
    now: new Date(),
    type: 'range',
    enterDirection: '',
    rowSize: 'normal',
    showShortcut: false,
    infinite: true,
    defaultValue: undefined,
    minDate: new Date(+now - 5184000000),
    maxDate: new Date(+now + 31536000000),
    onSelect: undefined,
    getDateExtra: date => {
      return extra[+date];
    }
  };

  constructor() {}

  initPara() {
    this.state = {
      ...this.state,
      ...{
        show: false,
        date: null,
        pickTime: false,
        now: new Date(),
        type: 'range',
        rowSize: 'normal',
        infinite: true,
        enterDirection: '',
        onSelect: undefined,
        showShortcut: false,
        defaultValue: undefined,
        minDate: new Date(+now - 5184000000),
        maxDate: new Date(+now + 31536000000),
        getDateExtra: date => {
          return extra[+date];
        }
      }
    };
  }

  changeLanguage() {
    this.state.en = !this.state.en;
  }

  onClick_0() {
    this.initPara();
    this.state.show = true;
    this.state.type = 'one';
    this.state.date = new Date();
  }

  onClick_1() {
    this.initPara();
    this.state.show = true;
  }

  onClick_2() {
    this.initPara();
    this.state.show = true;
    this.state.pickTime = true;
  }

  onClick_3() {
    this.initPara();
    this.state.show = true;
    this.state.type = 'one';
  }

  onClick_4() {
    this.initPara();
    this.state.show = true;
    this.state.pickTime = true;
    this.state.type = 'one';
  }

  onClick_5() {
    this.initPara();
    this.state.show = true;
    this.state.showShortcut = true;
  }

  onClick_6() {
    this.initPara();
    this.state.show = true;
    this.state.pickTime = true;
    this.state.showShortcut = true;
  }

  onClick_7() {
    this.initPara();
    this.state.show = true;
    this.state.rowSize = 'xl';
  }

  onClick_8() {
    this.initPara();
    this.state.show = true;
    this.state.infinite = false;
  }

  onClick_9() {
    this.initPara();
    this.state.show = true;
    this.state.enterDirection = 'horizontal';
  }

  onClick_10() {
    this.initPara();
    this.state.show = true;
    this.state.defaultValue = [new Date(+now - 86400000), new Date(+now - 345600000)];
  }

  onClick_11() {
    this.initPara();
    this.state.show = true;
    this.state.onSelect = (date, state) => {
      console.log('onSelect', date, state);
      return [date, new Date(+now - 604800000)];
    };
  }

  triggerCancel() {
    this.state.show = false;
  }

  triggerConfirm(value) {
    const { startDate, endDate } = value;
    this.state = {
      ...this.state,
      ...{ show: false, startDate, endDate }
    };
    this.triggerCancel();
    console.log('onConfirm', startDate, endDate);
  }

  triggerSelectHasDisableDate(dates) {
    console.warn('onSelectHasDisableDate', dates);
  }
}

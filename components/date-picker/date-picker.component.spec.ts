import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { en_US, zh_CN } from '../locale-provider/locale';
import { DatePickerOptions, DatePickerModule, DatePickerComponent } from './index';
import {
  Toast,
  ListModule,
  ToastModule,
  ButtonModule,
  LocaleProviderModule,
  LocaleProviderService
} from '../..';
import { dispatchTouchEvent } from '../core/testing';

describe('DatePickerComponent', () => {
  let component: TestDatePickerBasicComponent;
  let fixture: ComponentFixture<TestDatePickerBasicComponent>;
  let button;
  let datePickerEle;
  let lists;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestDatePickerBasicComponent],
      providers: [DatePickerOptions, LocaleProviderService, Toast],
      imports: [DatePickerModule, LocaleProviderModule, ButtonModule, ListModule, ToastModule, FormsModule]
    }).compileComponents();
    TestBed.overrideModule(DatePickerModule, {}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatePickerBasicComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.nzm-button')).nativeElement;
    lists = fixture.debugElement.queryAll(By.css('listitem'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should value lessthen min work', () => {
    component.value1 = new Date(999, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const thisYear = new Date().getFullYear().toString();
    expect(datePickerEle.querySelector('.am-picker-col-item').innerText).toBe(thisYear, `minDate is ${thisYear}`);
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should value morethan max work', () => {
    component.value1 = new Date(2999, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const thisYear = new Date().getFullYear().toString();
    expect(datePickerEle.querySelector('.am-picker-col-item').innerText).toBe(thisYear, `minDate is ${thisYear}`);
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should minDate work', () => {
    component.minDate = new Date(2000, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-col-item').innerText).toBe('2000', 'minDate is 2000');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should minDate work', () => {
    component.minDate = new Date(2001, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-col-item').innerText).toBe('2001', 'minDate is 2001');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should maxDate work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-col-content').lastElementChild.innerText).toBe(
      '2031',
      'maxDate is 2031'
    );
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should maxDate work', () => {
    component.maxDate = new Date(2032, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-col-content').lastElementChild.innerText).toBe(
      '2032',
      'maxDate is 2032'
    );
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should time mode minDate work', () => {
    component.mode = 'time';
    component.minDate = new Date();
    component.value1 = new Date(component.maxDate.getTime() - 60 * 1000);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const target = datePickerEle.querySelector('.am-picker-col-mask');
    dispatchTouchEvent(target, 'mousedown', 0, 200);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mousemove', 0, 100);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mouseup', 0, 0);
    fixture.detectChanges();
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
    expect(component.value1.getHours()).toBe(component.minDate.getHours());
    expect(component.value1.getMinutes()).toBe(component.minDate.getMinutes());
  });

  it('should time mode maxDate work', () => {
    component.mode = 'time';
    component.maxDate = new Date();
    component.value1 = new Date(component.maxDate.getTime() + 60 * 1000);
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const target = datePickerEle.querySelector('.am-picker-col-mask');
    dispatchTouchEvent(target, 'mousedown', 0, -100);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mousemove', 0, -200);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mouseup', 0, -300);
    fixture.detectChanges();
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
    expect(component.value1.getHours()).toBe(component.maxDate.getHours());
    expect(component.value1.getMinutes()).toBe(component.maxDate.getMinutes());
  });

  it('should minuteStep work', () => {
    component.mode = 'datetime';
    component.minuteStep = 5;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const contentEles = datePickerEle.querySelectorAll('.am-picker-col-content');
    const minuteEles = contentEles[contentEles.length - 1].querySelectorAll('.am-picker-col-item');
    const step = minuteEles[1].innerText - minuteEles[0].innerText;
    expect(step).toBe(5, 'minuteStep is 5');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mode work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker').children.length).toBe(5, 'mode is datetime');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mode work', () => {
    component.mode = 'datetime';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker').children.length).toBe(5, 'mode is datetime');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mask is true work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-popup-mask')).not.toBeNull('mask is true');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mask is false work', () => {
    component.mask = false;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-popup-mask')).toBeNull('mask is false');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should title work', () => {
    component.title = 'Areas';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-popup-title').innerText).toBe('Areas', 'title is work');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('onOk work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    component.onOk1 = jasmine.createSpy('onOk1 is callback');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
    expect(component.onOk1).toHaveBeenCalledTimes(1);
  });

  it('onDismiss work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    component.onDismiss = jasmine.createSpy('onDismiss is callback');
    datePickerEle.querySelector('.am-picker-popup-header-left').click();
    fixture.detectChanges();
    expect(component.onDismiss).toHaveBeenCalledTimes(1);
  });

  it('locale work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-popup-header-right').innerText).toBe('OK', 'locale is en_US work');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('locale work', () => {
    component.locale = zh_CN;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker-popup-header-right').innerText).toBe('确定', 'locale is zh_CN work');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should touch event work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const target = datePickerEle.querySelector('.am-picker-col-mask');
    dispatchTouchEvent(target, 'mousedown', 0, 100);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mousemove', 0, 1000);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mouseup', 0, 0);
    fixture.detectChanges();
  });

  it('should ngmodel default value work', () => {
    component.value1 = null;
    component.name1 = null;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
    expect(component.value1.getTime()).not.toBeNaN();
  });
});

@Component({
  selector: 'test-date-picker-basic',
  template: `
    <div
      DatePicker
      [mode]="mode"
      [mask]="mask"
      [title]="title"
      [value]="value1"
      [locale]="locale"
      [minuteStep]="minuteStep"
      class="nzm-button"
      [minDate]="minDate"
      [maxDate]="maxDate"
      (onOk)="onOk1($event)"
      (onDismiss)="onDismiss()"
      (onValueChange)="onValueChange($event)"
    >
      Datetime
    </div>
    <List [className]="'date-picker-list'">
      <ListItem
        DatePicker
        [extra]="name1"
        [arrow]="'horizontal'"
        [mode]="'datetime'"
        [value]="value1"
        (onOk)="onOk1($event)"
        (onValueChange)="onValueChange($event)"
      >
        Datetime
      </ListItem>
      <ListItem
        DatePicker
        [extra]="name2"
        [arrow]="'horizontal'"
        [mode]="'date'"
        [value]="value2"
        (onOk)="onOk2($event)"
      >
        Date
      </ListItem>
      <ListItem
        DatePicker
        [extra]="name3"
        [arrow]="'horizontal'"
        [mode]="'time'"
        [value]="value3"
        (onOk)="onOk3($event)"
      >
        Time
      </ListItem>
      <ListItem
        DatePicker
        [extra]="name4"
        [arrow]="'horizontal'"
        [mode]="'time'"
        [locale]="locale"
        [value]="value4"
        (onOk)="onOk4($event)"
      >
        UTC Time
      </ListItem>
      <ListItem
        DatePicker
        [extra]="name4"
        [arrow]="'horizontal'"
        [mode]="'time'"
        [locale]="locale"
        [value]="value4"
        [isOpen]="true"
        [appendToBody]="true"
        [(ngModel)]="value4"
        (onOk)="onOk4($event)"
      >
        UTC Time
      </ListItem>
      <ListItem
        DatePicker
        [disabled]="true"
        [extra]="name4"
        [arrow]="'horizontal'"
        [mode]="'time'"
        [locale]="locale"
        [value]="value4"
        [isOpen]="false"
        [(ngModel)]="value4"
        (onOk)="onOk4($event)"
      >
        UTC Time
      </ListItem>
    </List>
  `
})
export class TestDatePickerBasicComponent {
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

  minuteStep = 1;
  locale = en_US;
  title = 'result';
  mask = true;
  mode = 'datetime';
  minDate = new Date(1000, 2, 1, 0, 0, 0);
  maxDate = new Date(2031, 1, 1, 0, 0, 0);
  isOpen = true;

  onOk1(result) {
    this.name1 = result;
    this.value1 = new Date(result);
  }

  onDismiss() {
    console.log('onDismiss');
  }

  onValueChange(result) {
    this.name1 = result;
    this.value1 = new Date(result);
  }

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

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { en_US, zh_CN } from '../locale-provider/languages';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderService, LocaleProviderModule, DatePickerModule, ButtonModule, ListModule } from '../..';
import { dispatchTouchEvent } from '../core/testing';

describe('DatePickerComponent', () => {
  let component: TestDatePickerBasicComponent;
  let fixture: ComponentFixture<TestDatePickerBasicComponent>;
  let button;
  let datePickerEle;
  let lists;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestDatePickerBasicComponent],
      providers: [DatePickerOptions, LocaleProviderService],
      imports: [DatePickerModule, LocaleProviderModule, ButtonModule, ListModule]
    }).compileComponents();
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

  it('should mode work', () => {
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker').children.length).toBe(5, 'mode is datetime');
    datePickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mode work', () => {
    component.mode = 'date';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    expect(datePickerEle.querySelector('.am-picker').children.length).toBe(3, 'mode is date');
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

  it ('should touch event work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    datePickerEle = document.querySelector('datepicker');
    const target =  datePickerEle.querySelector('.am-picker-col-mask');
    dispatchTouchEvent(target, 'mousedown', 0, 100);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mousemove', 0, 0);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mouseup', 0, 0);
    fixture.detectChanges();
  });
});

@Component({
  selector: 'test-date-picker-basic',
  template: `
    <div DatePicker
         [mode]="mode"
         [mask]="mask"
         [title]="title"
         [value]="value1"
         [locale]="locale"
         class="nzm-button"
         [minDate]="minDate"
         [maxDate]="maxDate"
         (onOk)="onOk1($event)"
         (onDismiss)="onDismiss()"
         (onValueChange)="onValueChange($event)"
    >Datetime</div>
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

  locale = en_US;
  title = 'result';
  mask = true;
  mode = 'datetime';
  minDate = new Date(1000, 1, 1, 0, 0, 0);
  maxDate = new Date(2031, 1, 1, 0, 0, 0);

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

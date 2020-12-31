import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { ModalModule } from '../modal/modal.module';
import { ModalService } from '../modal/modal.service';
import { ModalComponent } from '../modal/modal.component';
import { CalendarModule } from './calendar.module';
import { dispatchTouchEvent } from '../core/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: TestCalendarBasicComponent;
  let fixture: ComponentFixture<TestCalendarBasicComponent>;
  let calendarEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestCalendarBasicComponent],
      providers: [LocaleProviderService],
      imports: [LocaleProviderModule, CalendarModule, FormsModule, ModalModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCalendarBasicComponent);
    component = fixture.componentInstance;
    calendarEle = fixture.debugElement.query(By.css('calendar'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show different language', () => {
    component.state.show = true;
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.title').innerText).toContain('日期', 'language is zh');
    component.state.en = true;
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.title').innerText).toContain('Calendar', 'language is zh');
  });

  it('should slide horizontal', () => {
    component.state.show = true;
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.animate').classList).toContain('slideV-enter', 'slide normal');
    component.state._enterDirection = 'horizontal';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.animate').classList).toContain('slideH-enter', 'slide horizontal');
  });

  it('should getDateExtra', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    const disableDay = component.state.now.getDate() + 5 + '';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.row .cell.extra-classname .disable').innerText).toContain(
      disableDay,
      'getDateExtra is right'
    );
  });

  it('should check same day', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    fixture.detectChanges();

    expect(component.datepicker.isSameDate()).toContain('need two params', 'check same day is right');
  });

  it('should ngModel one', () => {
    component.state.date = new Date(2018, 8, 2);
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'one';
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'ngModel one is right'
    );
  });

  it('should write ngModel one', () => {
    component.state.date = new Date(2018, 8, 2);
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'one';
    component.state.show = true;
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'write ngModel one is right'
    );
  });

  it('should trigger clear', () => {
    component.state.date = new Date(2018, 8, 2);
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'one';
    component.state.show = true;
    fixture.detectChanges();

    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();

    calendarEle.nativeElement.querySelector('.right').click();
    fixture.detectChanges();

    expect(calendarEle.nativeElement.querySelector('.right').innerText).toBe('清除', 'trigger clear is right');
  });

  it('should write ngModel one throw error 1', () => {
    component.state.date = [
      new Date(2018, 8, 2),
      new Date(new Date(2018, 8, 2).getFullYear(), new Date(2018, 8, 2).getMonth(), new Date(2018, 8, 2).getDate() + 1)
    ];
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'one';
    component.state.show = true;
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'write ngModel one throw error 1 is right'
    );
  });

  it('should write ngModel one throw error 2', () => {
    component.state.date = [];
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'one';
    component.state.show = true;
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'write ngModel one throw error 2 is right'
    );
  });

  it('should ngModel range', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'range';
    component.state.date = [
      new Date(2018, 8, 2),
      new Date(new Date(2018, 8, 2).getFullYear(), new Date(2018, 8, 2).getMonth(), new Date(2018, 8, 2).getDate() + 1)
    ];
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'ngModel range is right'
    );
  });

  it('should show default value', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'range';
    component.state.defaultValue = [new Date(+now), new Date(+now + 86400000)];
    const displayDay = '2';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'show default value is right'
    );
  });

  it('should show default time value', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'range';
    component.state.defaultValue = [new Date(+now), new Date(+now + 86400000)];
    const displayDay = '2';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'show default value is right'
    );
  });

  it('should write ngModel range', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.type = 'range';
    component.state.date = [
      new Date(2018, 8, 2),
      new Date(new Date(2018, 8, 2).getFullYear(), new Date(2018, 8, 2).getMonth(), new Date(2018, 8, 2).getDate() + 1)
    ];
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[2]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'write ngModel range is right'
    );
  });

  it('should select single month range', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 10);
    component.state.type = 'range';
    component.state.date = [new Date(2018, 8, 10), new Date(2018, 8, 2)];
    const displayDay = '2';
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[3]
      .querySelector('.cell')
      .click();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .date.date-selected')[0].innerText).toContain(
      displayDay,
      'select single month range is right'
    );
  });

  it('should min date', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.minDate = new Date(2018, 8, 2);
    component.state.maxDate = new Date(2018, 8, 2);
    const disableDay = component.state.now.getDate() - 1 + '';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .disable')[0].innerText).toContain(
      disableDay,
      'min date is right'
    );
  });

  it('should max date', () => {
    component.state.show = true;
    component.state.now = new Date(2018, 8, 2);
    component.state.minDate = new Date(2018, 8, 2);
    component.state.maxDate = new Date(2018, 8, 2);
    const disableDay = component.state.now.getDate() + 1 + '';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelectorAll('.row .cell .disable')[1].innerText).toContain(
      disableDay,
      'max date is right'
    );
  });

  it('should scroll date picker', () => {
    component.state.show = true;
    component.state.type = 'one';
    component.state.pickTime = true;
    component.state.minDate = new Date(2018, 6, 2);
    component.state.maxDate = new Date(2018, 10, 2);
    component.state.now = new Date(2018, 8, 2);
    fixture.detectChanges();
    let touchEl = calendarEle.nativeElement.querySelector('.content .wrapper');

    dispatchTouchEvent(touchEl, 'touchstart', 0, 0);
    fixture.detectChanges();
    dispatchTouchEvent(touchEl, 'touchmove', 0, 100);
    fixture.detectChanges();
    dispatchTouchEvent(touchEl, 'touchend', 0, 200);
    fixture.detectChanges();

    component.datepicker.datepicker.genMonthData();
    component.datepicker.datepicker.createOnScroll()({ client: 750, top: 760, full: 750 });

    expect(component.datepicker.datepicker.computeVisible(750, 760)).toBe(false, 'scroll date picker is right');
  });

  it('should show time picker', () => {
    component.state.show = true;
    component.state.type = 'one';
    component.state.pickTime = true;
    component.state.defaultTimeValue = new Date(2000, 0, 1, 8);
    component.state.now = new Date(2018, 8, 2);
    component.state.minDate = new Date(2018, 8, 2);
    component.state.maxDate = new Date(2018, 8, 3);
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('calendartimepicker').classList).toContain(
      'time-picker',
      'timepicker is right'
    );
    const touchEl = calendarEle.nativeElement.querySelector('calendartimepicker').querySelector('.am-picker-col-mask');
    dispatchTouchEvent(touchEl, 'touchstart', 0, 0);
    fixture.detectChanges();
    dispatchTouchEvent(touchEl, 'touchmove', 0, 30);
    fixture.detectChanges();
    dispatchTouchEvent(touchEl, 'touchend', 0, 60);
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelector('calendarconfirmpanel')
      .querySelector('.button')
      .click();
    fixture.detectChanges();
    expect(component.state.startDate.toLocaleString()).toContain('12:00:00');
  });

  it('should change type', () => {
    component.state.show = true;
    component.state.type = 'one';
    component.state.now = new Date(2018, 8, 2);
    component.state.mimDate = new Date(2018, 8, 2);
    component.state.maxDate = new Date(2018, 8, 2);
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.date-selected').classList).toContain(
      'selected-single',
      'change type is right'
    );
  });

  it('should change type and close', () => {
    component.state.show = true;
    component.state.type = 'one';
    component.state.now = new Date(2018, 8, 2);
    component.state.mimDate = new Date(2018, 8, 2);
    component.state.maxDate = new Date(2018, 8, 2);
    fixture.detectChanges();
    calendarEle.nativeElement
      .querySelectorAll('.date .row')[1]
      .querySelector('.cell')
      .click();
    fixture.detectChanges();
    calendarEle.nativeElement.querySelector('.button.button-full').click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.button.button-full')).toBeNull('confirm work');
  });

  it('should change rowSize', () => {
    component.state.show = true;
    component.state.rowSize = 'xl';
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.row').classList).toContain('row-xl');
  });

  it('should show shortcut', () => {
    component.state.show = true;
    component.state.showShortcut = true;
    const disableDay = new Date().getDate() + '';
    component.state.now = new Date();
    fixture.detectChanges();
    calendarEle.nativeElement.querySelectorAll('calendarshortcutpanel .item')[3].click();
    calendarEle.nativeElement.querySelectorAll('calendarshortcutpanel .item')[2].click();
    calendarEle.nativeElement.querySelectorAll('calendarshortcutpanel .item')[1].click();
    calendarEle.nativeElement.querySelectorAll('calendarshortcutpanel .item')[0].click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.date-selected').innerText).toContain(disableDay);
  });

  it('should click confirm', () => {
    component.state.show = true;
    component.state.showShortcut = true;
    fixture.detectChanges();
    calendarEle.nativeElement.querySelector('calendarshortcutpanel .item').click();
    fixture.detectChanges();
    calendarEle.nativeElement.querySelector('.button').click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.button')).toBeNull('confirm work');
  });

  it('should clear', () => {
    component.state.show = true;
    component.state.showShortcut = true;
    fixture.detectChanges();
    calendarEle.nativeElement.querySelector('calendarshortcutpanel .item').click();
    calendarEle.nativeElement.querySelector('calendarheader .left').click();
    fixture.detectChanges();
    expect(calendarEle.nativeElement.querySelector('.date-selected')).toBeNull('clear work');
  });
});

const extra = {};
const now = new Date(2018, 8, 2);
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', cellCls: 'extra-classname', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', cellCls: 'extra-classname', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', cellCls: 'extra-classname', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', cellCls: 'extra-classname', disable: true };

for (const key in extra) {
  if (extra.hasOwnProperty(key)) {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
      extra[+date] = info;
    }
  }
}

@Component({
  selector: 'demo-calendar',
  template: `
    <Calendar
      [(ngModel)]="this.state.date"
      [locale]="this.state.en ? 'enUS' : 'zhCN'"
      [enterDirection]="this.state._enterDirection"
      [visible]="this.state.show"
      [getDateExtra]="this.state.getDateExtra"
      [defaultDate]="this.state.now"
      [minDate]="this.state.minDate"
      [maxDate]="this.state.maxDate"
      [pickTime]="this.state.pickTime"
      [prefixCls]="this.state.prefixCls"
      [type]="this.state.type"
      [rowSize]="this.state.rowSize"
      [showShortcut]="this.state.showShortcut"
      [infinite]="this.state.infinite"
      [defaultValue]="this.state.defaultValue"
      [defaultTimeValue]="this.state.defaultTimeValue"
      [onSelect]="this.state.onSelect"
      (onCancel)="onCancel()"
      (onConfirm)="onConfirm($event)"
      (onSelectHasDisableDate)="onSelectHasDisableDate($event)"
    ></Calendar>
  `
})
export class TestCalendarBasicComponent {
  state: any = {
    en: false,
    date: null,
    show: false,
    pickTime: false,
    now: new Date(2018, 8, 2),
    type: 'range',
    _enterDirection: '',
    rowSize: 'normal',
    prefixCls: 'calendar-spec',
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

  @ViewChild(CalendarComponent)
  datepicker: CalendarComponent;

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
        _enterDirection: '',
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

  onCancel() {
    this.state.show = false;
  }

  onConfirm(value) {
    const { startDate, endDate } = value;
    this.state = {
      ...this.state,
      ...{ show: false, startDate, endDate }
    };
    this.onCancel();
    console.log('onConfirm', startDate, endDate);
  }

  onSelectHasDisableDate(dates) {
    console.warn('onSelectHasDisableDate', dates);
  }
}

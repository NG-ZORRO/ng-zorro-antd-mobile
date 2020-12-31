import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DatePickerViewModule } from './date-picker-view.module';
import { DatePickerOptions, DatePickerModule } from '../date-picker/index';
import { LocaleProviderService, LocaleProviderModule, ToastModule, Toast, ToastComponent } from '../..';
import { en_US } from '../locale-provider/locale';

describe('DatePickerViewComponent', () => {
  let component: TestDatePickerViewBasicComponent;
  let fixture: ComponentFixture<TestDatePickerViewBasicComponent>;
  let datePickerViewEle;

  let service: LocaleProviderService;

  beforeEach(waitForAsync(() => {
    // service = new LocaleProviderService(LOCAL_PROVIDER_TOKEN);
    // service.setLocale(zh_CN);
    TestBed.configureTestingModule({
      declarations: [TestDatePickerViewBasicComponent],
      providers: [DatePickerOptions, LocaleProviderService, Toast],
      imports: [DatePickerModule, DatePickerViewModule, LocaleProviderModule, ToastModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatePickerViewBasicComponent);
    component = fixture.componentInstance;
    datePickerViewEle = fixture.debugElement.query(By.css('datepickerview'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should minDate work', () => {
    fixture.detectChanges();
    expect(datePickerViewEle.nativeElement.querySelector('.am-picker-col-item').innerText).toBe(
      '2000',
      'minDate is 2000'
    );
  });

  it('should minDate work', () => {
    component.minDate = new Date(2001, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    expect(datePickerViewEle.nativeElement.querySelector('.am-picker-col-item').innerText).toBe(
      '2001',
      'minDate is 2001'
    );
  });

  it('should maxDate work', () => {
    expect(datePickerViewEle.nativeElement.querySelector('.am-picker-col-content').lastElementChild.innerText).toBe(
      '2031',
      'maxDate is 2031'
    );
  });

  it('should maxDate work', () => {
    component.maxDate = new Date(2032, 1, 1, 0, 0, 0);
    fixture.detectChanges();
    expect(datePickerViewEle.nativeElement.querySelector('.am-picker-col-content').lastElementChild.innerText).toBe(
      '2032',
      'maxDate is 2032'
    );
  });

  it('should mode work', () => {
    component.mode = 'datetime';
    fixture.detectChanges();
    expect(datePickerViewEle.children.length).toBe(5, 'mode is datetime');
  });

  it('should mode work', () => {
    component.mode = 'date';
    fixture.detectChanges();
    expect(datePickerViewEle.children.length).toBe(3, 'mode is date');
  });
});

@Component({
  selector: 'test-date-picker-view-basic',
  template: `
    <DatePickerView
      [mode]="mode"
      [ngModel]="value1"
      [locale]="locale"
      [maxDate]="maxDate"
      [minDate]="minDate"
      (onValueChange)="onValueChange1($event)"
    ></DatePickerView>
  `
})
export class TestDatePickerViewBasicComponent {
  locale = en_US;
  name1 = '选择';
  mode = 'datetime';
  value1 = new Date();
  value2 = new Date();
  minDate = new Date(2000, 1, 1, 0, 0, 0);
  maxDate = new Date(2031, 1, 1, 0, 0, 0);

  onValueChange1(result) {
    this.name1 = result.date;
    this.value1 = result.date;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ListModule, PickerModule, PickerComponent } from '../..';
import { PickerOptions } from './picker-options.provider';
import { Picker } from './picker.service';
import { dispatchTouchEvent } from '../core/testing';
import { LocaleProviderService, LocaleProviderModule } from '../..';
import { Button } from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

describe('PickerComponent', () => {
  let component: TestPickerBasicComponent;
  let fixture: ComponentFixture<TestPickerBasicComponent>;
  let lists;
  let buttons;
  let pickerEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPickerBasicComponent],
      providers: [PickerOptions, LocaleProviderService, Picker, Overlay],
      imports: [ListModule, PickerModule, LocaleProviderModule, ButtonModule, FormsModule]
    }).compileComponents();
    TestBed.overrideModule(PickerModule, {
      set: { entryComponents: [PickerComponent] }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPickerBasicComponent);
    component = fixture.componentInstance;
    lists = fixture.debugElement.queryAll(By.css('listitem'));
    buttons = fixture.debugElement.queryAll(By.directive(Button));
    fixture.detectChanges();
  });

  it('should picker work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    expect(pickerEle.querySelector('.am-picker')).not.toBeNull('picker is work');
    pickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should data work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    expect(pickerEle.querySelector('.am-picker-col-content').children.length).toBeGreaterThan(0, 'data is work');
    pickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mask is true work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    expect(pickerEle.querySelector('.am-picker-popup-mask')).not.toBeNull('mask is true');
    pickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should mask is false work', () => {
    component.mask = false;
    fixture.detectChanges();
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    expect(pickerEle.querySelector('.am-picker-popup-mask')).toBeNull('mask is false');
    pickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should title work', () => {
    component.title = 'Areas';
    fixture.detectChanges();
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    expect(pickerEle.querySelector('.am-picker-popup-title').innerText).toBe('Areas', 'title is work');
    pickerEle.querySelector('.am-picker-popup-header-right').click();
  });

  it('should ngModel work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    pickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
    expect(component.modelChange).toHaveBeenCalledTimes(1);
  });

  it('should touch event work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    const target = pickerEle.querySelector('.am-picker-col-mask');
    dispatchTouchEvent(target, 'mousedown', 0, 100);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mousemove', 0, 0);
    fixture.detectChanges();
    dispatchTouchEvent(target, 'mouseup', 0, 0);
    fixture.detectChanges();
    pickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
  });

  it('should showPicker work', () => {
    const button = buttons[0].nativeElement;
    button.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    expect(pickerEle.querySelector('.am-picker-popup-header-right')).toBeTruthy('showPicker is work');
    const buttonOk = pickerEle.querySelector('.am-picker-popup-header-right');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should OK work', () => {
    const button = buttons[0].nativeElement;
    button.click();
    fixture.detectChanges();
    pickerEle.querySelector('.am-picker-popup-header-right').click();
    fixture.detectChanges();
  });

  it('should Cancel work', () => {
    const button = buttons[0].nativeElement;
    button.click();
    fixture.detectChanges();
    pickerEle.querySelector('.am-picker-popup-header-left').click();
    fixture.detectChanges();
  });

  it('should only one picker work', () => {
    const list = lists[0].nativeElement;
    list.click();
    fixture.detectChanges();
    pickerEle = document.querySelector('picker');
    pickerEle.style.display = 'none';
    fixture.detectChanges();
    list.click();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'demo-picker-basic',
  template: `
    <List className="my-list">
      <ListItem
        Picker
        [mask]="mask"
        [extra]="name1"
        [title]="title"
        [(ngModel)]="value1"
        [data]="singleArea"
        [arrow]="'horizontal'"
        [appendToBody]="true"
        (ngModelChange)="modelChange($event)"
      >
        Multiple & cascader
      </ListItem>
      <ListItem
        Picker
        [mask]="mask"
        [extra]="name1"
        [title]="title"
        [disabled]="true"
        [(ngModel)]="value1"
        [data]="singleArea"
        [arrow]="'horizontal'"
        [appendToBody]="true"
        (ngModelChange)="modelChange($event)"
      >
        Multiple & cascader
      </ListItem>
    </List>
    <div Button (click)="showPicker()">operation</div>
  `,
  providers: [Picker]
})
export class TestPickerBasicComponent {
  singleArea = [
    '东城区',
    '西城区',
    '崇文区',
    '宣武区',
    '朝阳区',
    '丰台区',
    '石景山区',
    '海淀区',
    '门头沟区',
    '房山区',
    '通州区',
    '顺义区',
    '昌平区',
    '大兴区',
    '平谷区',
    '怀柔区',
    '密云县',
    '延庆县'
  ];
  name1 = '选择';
  value = [];
  value1 = ['宣武区'];
  title = 'result';
  mask = true;
  modelChange = jasmine.createSpy('ngModel change callback');

  constructor(private _picker: Picker) {}

  getResult(result) {
    this.value = [];
    let temp = '';
    result.forEach(item => {
      this.value.push(item.label || item);
      temp += item.label || item;
    });
    return this.value.map(v => v).join(',');
  }

  getValue(result) {
    const value = [];
    let temp = '';
    result.forEach(item => {
      value.push(item.label || item);
      temp += item.label || item;
    });
    return value;
  }

  showPicker() {
    Picker.showPicker({ value: this.value, data: this.singleArea }, result => {}, cancel => {});
  }
}

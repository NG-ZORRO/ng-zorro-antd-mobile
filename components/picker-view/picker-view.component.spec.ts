import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickerViewModule } from './picker-view.module';
import { PickerOptions } from '../picker/picker-options.provider';
import { LocaleProviderService, LocaleProviderModule } from '../..';

describe('PickerViewComponent', () => {
  let component: TestPickerViewBasicComponent;
  let fixture: ComponentFixture<TestPickerViewBasicComponent>;
  let pickerEle;
  let pickerEleForNgModel;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestPickerViewBasicComponent],
      imports: [PickerViewModule, LocaleProviderModule, FormsModule],
      providers: [PickerOptions, LocaleProviderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPickerViewBasicComponent);
    component = fixture.componentInstance;
    pickerEle = fixture.debugElement.query(By.css('pickerview'));
    pickerEleForNgModel = fixture.debugElement.queryAll(By.css('pickerview'))[1];
    fixture.detectChanges();
  });

  it('should ngModel work', () => {
    component.value2 = [];
    fixture.detectChanges();
    expect(component.value2.length).toBe(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cols work', () => {
    component.cols = 1;
    component.seasons = [
      {
        label: '2013',
        children: []
      },
      {
        label: '2014',
        children: []
      }
    ];
    fixture.detectChanges();
    expect(pickerEle.nativeElement.querySelector('.am-picker').children.length).toBe(1);
  });

  it('should seasons work', () => {
    expect(pickerEle.nativeElement.querySelector('.am-picker').children.length).toBeGreaterThan(0, 'seasons has value');
  });

  it('should itemStyle work', () => {
    expect(pickerEle.nativeElement.querySelector('.am-picker-col-item').style.color).toBe(
      'red',
      'itemStyle is {color: red}'
    );
    component.itemStyle = { color: 'black' };
    fixture.detectChanges();
    expect(pickerEle.nativeElement.querySelector('.am-picker-col-item').style.color).toBe(
      'black',
      'itemStyle is {color: black}'
    );
  });

  it('should indicatorStyle work', () => {
    expect(pickerEle.nativeElement.querySelector('.am-picker-col-indicator').style.background).toBe(
      'red',
      'indicatorStyle is {color: red}'
    );
    component.indicatorStyle = { background: 'black' };
    fixture.detectChanges();
    expect(pickerEle.nativeElement.querySelector('.am-picker-col-indicator').style.background).toBe(
      'black',
      'indicatorStyle is {color: black}'
    );
  });
});

@Component({
  selector: 'test-picker-view-basic',
  template: `
    <PickerView
      [data]="seasons"
      [cascade]="cascade"
      [ngModel]="value"
      [cols] = [cols]
      [itemStyle]="itemStyle"
      [indicatorStyle]="indicatorStyle"
      (ngModelChange)="onChange($event)"
    ></PickerView>
  `
})
export class TestPickerViewBasicComponent {
  cascade = false;
  itemStyle = { color: 'red' };
  indicatorStyle = { background: 'red' };
  cols = 2;
  seasons = [
    {
      label: '2013',
      children: [
        {
          label: '春',
          children: []
        },
        {
          label: '夏',
          children: []
        }
      ]
    },
    {
      label: '2014',
      children: [
        {
          label: '春'
        },
        {
          label: '夏'
        }
      ]
    }
  ];
  value = [];
  value2 = [];

  onChange(result) {
    this.value = this.getValue(result);
  }

  onChange2(result) {
    this.value2 = this.getValue(result);
  }

  getValue(result) {
    let value = [];
    let temp = '';
    result.forEach(item => {
      value.push(item.label || item);
      temp += item.label || item;
    });
    return value;
  }
}

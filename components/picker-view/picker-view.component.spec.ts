import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PickerViewModule } from './picker-view.module';
import { PickerOptions } from '../picker/picker-options.provider';
import { LocaleProviderService, LocaleProviderModule } from '../..';

describe('PickerViewComponent', () => {
  let component: TestPickerViewBasicComponent;
  let fixture: ComponentFixture<TestPickerViewBasicComponent>;
  let pickerEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPickerViewBasicComponent],
      imports: [PickerViewModule, LocaleProviderModule],
      providers: [PickerOptions, LocaleProviderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPickerViewBasicComponent);
    component = fixture.componentInstance;
    pickerEle = fixture.debugElement.query(By.css('pickerview'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    <PickerView [data]="seasons"
                [cascade]="cascade"
                [value]="value"
                [itemStyle]="itemStyle"
                [indicatorStyle]="indicatorStyle"
                (onChange)="onChange($event)"
    ></PickerView>
  `
})
export class TestPickerViewBasicComponent {
  cascade = false;
  itemStyle = { color: 'red' };
  indicatorStyle = { background: 'red' };
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

  onChange(result) {
    this.value = this.getValue(result);
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

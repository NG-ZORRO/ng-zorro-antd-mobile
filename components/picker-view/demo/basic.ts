import { Component } from '@angular/core';

@Component({
  selector: 'demo-picker-view-basic',
  template: `
    <PickerView [data]="seasons"
                [cascade]="false"
                [ngModel]="value"
                (ngModelChange)="onChange($event)"
    ></PickerView>
    <PickerView [data]="seasons"
                [cascade]="false"
                [ngModel]="value2"
                (ngModelChange)="onChange2($event)"
    ></PickerView>
  `
})
export class DemoPickerViewBasicComponent {
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

import { Component } from '@angular/core';

@Component({
  selector: 'demo-picker-view-basic',
  template: `
    <div>{{ getValue(value) }}</div>
    <PickerView [data]="seasons" [cascade]="false" [(ngModel)]="value" (ngModelChange)="onChange($event)"></PickerView>
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
  value = ['2014', '夏'];

  onChange(result) {
    console.log(this.value, result);
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

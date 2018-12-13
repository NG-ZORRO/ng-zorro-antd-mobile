import { Component } from '@angular/core';
import { Picker } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'demo-picker-basic',
  template: `
  <div Button (click)="showPicker()">{{name}}</div>
  <WhiteSpace></WhiteSpace>
  <List className="my-list">
    <ListItem Picker
              [extra]="name1"
              [arrow]="'horizontal'"
              [mask]=true
              [title]="'Areas'"
              [value]="value1"
              (onOk)="onOk1($event)"
    >
      Multiple & cascader
    </ListItem>
    <ListItem Picker
              [extra]="name2"
              [arrow]="'horizontal'"
              [cascade]="false"
              [data]="seasons"
              [title]="'选择季节'"
              [value]="value2"
              (onOk)="onOk2($event)"
    >
      Multiple
    </ListItem>
    <ListItem Picker
              [extra]="name3"
              [arrow]="'horizontal'"
              [data]="singleArea"
              [value]="value3"
              (onOk)="onOk3($event)"
    >
      Single
    </ListItem>
    <ListItem Picker
              [extra]="name4"
              [arrow]="'horizontal'"
              [value]="value4"
              (onPickerChange)="onPickerChange($event)"
              (onOk)="onOk4($event)"
    >
      Multiple & async
    </ListItem>
    <ListItem Picker
              [extra]="name5"
              [arrow]="'horizontal'"
              [data]="singleArea"
              [(ngModel)]="value5"
              (ngModelChange)="onOk5($event)"
    >
      double binding
    </ListItem>
  </List>
  `,
  providers: [Picker]
})
export class DemoPickerBasicComponent {
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
  name  = '选择';
  name1 = '选择';
  name2 = '选择';
  name3 = '选择';
  name4 = '选择';
  name5 = '选择';
  value = [];
  value1 = [];
  value2 = [];
  value3 = [];
  value4 = [];
  value5 = [];

  constructor (private _picker: Picker ) {

  }

  onOk1(result) {
    this.name1 = this.getResult(result);
    this.value1 = this.getValue(result);
  }

  onOk2(result) {
    this.name2 = this.getResult(result);
    this.value2 = this.getValue(result);
  }

  onOk3(result) {
    this.name3 = this.getResult(result);
    this.value3 = this.getValue(result);
  }

  onOk4(result) {
    this.name4 = this.getResult(result);
    this.value4 = this.getValue(result);
  }

  onOk5(result) {
    this.name5 = this.getResult(result);
  }

  onPickerChange(result) {
    this.name4 = this.getResult(result);
    this.value4 = this.getValue(result);
  }

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
    let value = [];
    let temp = '';
    result.forEach(item => {
      value.push(item.label || item);
      temp += item.label || item;
    });
    return value;
  }

  showPicker() {
    Picker.showPicker({value: this.value, data: this.singleArea}, (result) => {
      this.name = this.getResult(result);
      this.value = this.getValue(result);
    });
  }
}

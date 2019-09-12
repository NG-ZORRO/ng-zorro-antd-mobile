import { Component } from '@angular/core';
import { PickerService, PickerRef } from 'ng-zorro-antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
@Component({
  selector: 'demo-picker-basic',
  template: `
    <div Button (click)="showPicker()">{{ name }}</div>
    <WhiteSpace></WhiteSpace>
    <List className="my-list">
      <ListItem
        Picker
        [data]="data"
        [extra]="name1"
        [arrow]="'horizontal'"
        [mask]="true"
        [title]="'Areas'"
        [(ngModel)]="value1"
        (ngModelChange)="onOk1($event)"
        (onDismiss)="onDismiss1()"
      >
        Multiple & cascader
      </ListItem>
      <ListItem
        Picker
        [data]="delayData"
        [extra]="name1"
        [arrow]="'horizontal'"
        [mask]="true"
        [title]="'Areas'"
        [(ngModel)]="value1"
        (ngModelChange)="onOk1($event)"
        (onDismiss)="onDismiss1()"
      >
        Multiple & delayData
      </ListItem>
      <ListItem
        Picker
        [extra]="name2"
        [arrow]="'horizontal'"
        [cascade]="false"
        [data]="seasons"
        [title]="'选择季节'"
        [(ngModel)]="value2"
        (ngModelChange)="onOk2($event)"
      >
        Multiple
      </ListItem>
      <ListItem
        Picker
        [extra]="name3"
        [arrow]="'horizontal'"
        [data]="singleArea"
        [(ngModel)]="value3"
        (ngModelChange)="onOk3($event)"
      >
        Single
      </ListItem>
      <ListItem
        Picker
        [data]="asynData"
        [cols]="cols"
        [extra]="name4"
        [arrow]="'horizontal'"
        [(ngModel)]="value4"
        (onPickerChange)="onPickerChange($event)"
        (ngModelChange)="onOk4($event)"
      >
        Multiple & async
      </ListItem>
      <ListItem
        Picker
        [extra]="name1"
        [disabled]="true"
        [arrow]="'horizontal'"
        [mask]="true"
        [title]="'Areas'"
        [(ngModel)]="value1"
        (ngModelChange)="onOk1($event)"
        (onDismiss)="onDismiss1()"
      >
        Disabled
      </ListItem>
    </List>
  `
})
export class DemoPickerBasicComponent {
  data = district;
  asynData = provinceLite;
  delayData = [];
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
  name = '选择';
  name1 = '选择';
  name2 = '选择';
  name3 = '选择';
  name4 = '选择';
  value = [];
  value1 = [];
  value2 = [];
  value3 = [];
  value4 = [];
  cols = 1;

  constructor(private _picker: PickerService) {
    setTimeout(() => {
      this.delayData = this.data;
    }, 10000);
  }

  onDismiss1() {
    console.log('cancel');
  }

  onOk1(result) {
    this.name1 = this.getResult(result);
  }

  onOk2(result) {
    this.name2 = this.getResult(result);
  }

  onOk3(result) {
    this.name3 = this.getResult(result);
  }

  onOk4(result) {
    this.name4 = this.getResult(result);
  }

  onPickerChange(result) {
    const val = this.getValue(result);
    console.log(val);
    let colNum = 1;
    const d = [...this.asynData];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach(i => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [
              {
                value: 'zj-nb',
                label: '宁波'
              },
              {
                value: 'zj-hz',
                label: '杭州'
              }
            ];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach(j => {
              if (j.value === 'zj-hz') {
                j.children = [
                  {
                    value: 'zj-hz-xh',
                    label: '西湖区'
                  }
                ];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.asynData = d;
    this.cols = colNum;
    this.value4 = asyncValue;
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
      value.push(item.value || item);
      temp += item.value || item;
    });
    return value;
  }

  showPicker() {
    const ref: PickerRef = this._picker.showPicker(
      { value: this.value, data: this.singleArea },
      result => {
        this.name = this.getResult(result);
        this.value = this.getValue(result);
      },
      cancel => {
        console.log('cancel');
      }
    );
  }
}

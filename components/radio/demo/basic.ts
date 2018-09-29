import { Component } from '@angular/core';

@Component({
  selector: 'demo-radio-basic',
  template: `
    <div>
      <List [renderHeader]=(renderHeader)>
        <RadioItem *ngFor="let i of data"
                   [name]="i.label"
                   [value]="i.value"
                   [checked]="value === i.value"
                   (onChange)="onChange($event)"
                   (onClick)="clickTest($event)"
        >
          {{i.label}}
        </RadioItem>
      </List>
      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <List>
        <RadioItem *ngFor="let i of data2"
                   [name]="i.label"
                   [value]="i.value"
                   [checked]="value2 === i.value"
                   (onChange)="onChange2($event)"
        >
          {{i.label}}
          <Brief>{{i.extra}}</Brief>
        </RadioItem>
      </List>
      <List [renderHeader]=(renderHeader2)>
        <RadioItem *ngFor="let i of data"
                   [name]="i.label"
                   [value]="i.value"
                   [disabled]="true"
                   [checked]="value3 === i.value"
                   (onChange)="onChange3($event)"
        >
          {{i.label}}
        </RadioItem>
      </List>
      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <List>
        <RadioItem *ngFor="let i of data2"
                   [name]="i.label"
                   [value]="i.value"
                   [disabled]="true"
                   [checked]="value4 === i.value"
                   (onChange)="onChange4($event)"
        >
          {{i.label}}
          <Brief>{{i.extra}}</Brief>
        </RadioItem>
      </List>
      <Flex style="padding: 15px">
        <FlexItem style="padding: 15px 0; color: #888; flex: none">Radio demo(dustomized style)</FlexItem>
        <FlexItem>
          <label Radio
                 class="my-radio"
                 [name]="'Last Agree Item'"
                 [value]="'Agree Submit'"
                 (onChange)="onChange5($event)"
          >Agree</label>
        </FlexItem>
      </Flex>
    </div>
  `,
  styles: [
    `
      /deep/ .my-radio .am-radio {
        padding: 2.5px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-right: 5px;
        box-sizing: initial;
      }
    `
  ]
})
export class DemoRadioBasicComponent {
  value = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;

  data = [{ value: 0, label: 'doctor' }, { value: 1, label: 'bachelor' }];
  data2 = [{ value: 0, label: 'basketball', extra: 'details' }, { value: 1, label: 'football', extra: 'details' }];

  constructor() {}

  renderHeader() {
    return 'RadioItem demo';
  }

  renderHeader2() {
    return 'Disabled';
  }

  onChange = event => {
    console.log('choosen radio: ', event.name);
    this.value = event.value;
  };

  onChange2 = event => {
    console.log('choosen radio: ', event.name);
    this.value2 = event.value;
  };

  onChange3 = event => {
    console.log('choosen radio: ', event.name);
    this.value3 = event.value;
  };

  onChange4 = value => {
    console.log('choosen radio: ', value.name);
    this.value4 = value;
  };

  onChange5 = e => {
    console.log('agree submit', e);
  };

  clickTest(event) {
    console.log('onClick', event);
  }
}

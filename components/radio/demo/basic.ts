import { Component } from '@angular/core';

@Component({
  selector: 'demo-radio-basic',
  template: `
    <div>
      <List [renderHeader]="renderHeader">
        <RadioItemGroup [(ngModel)]="selectedStatus1.value" (onChange)="onChange($event)">
          <RadioItem *ngFor="let i of data" [name]="i.name" [value]="i.value">
            {{ i.name }}
          </RadioItem>
        </RadioItemGroup>
      </List>
      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <List>
        <RadioItemGroup [(ngModel)]="selectedStatus2.value" (onChange)="onChange2($event)">
          <RadioItem *ngFor="let i of data2" [name]="i.name" [value]="i.value">
            {{ i.name }}
            <Brief>{{ i.extra }}</Brief>
          </RadioItem>
        </RadioItemGroup>
      </List>
      <List [renderHeader]="renderHeader2">
        <RadioItemGroup [(ngModel)]="selectedStatus1.value" (onChange)="onChange($event)">
          <RadioItem *ngFor="let i of data" [name]="i.name" [value]="i.value" [disabled]="true">
            {{ i.name }}
          </RadioItem>
        </RadioItemGroup>
      </List>
      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <List>
        <RadioItemGroup [(ngModel)]="selectedStatus2.value" (onChange)="onChange2($event)">
          <RadioItem *ngFor="let i of data2" [name]="i.name" [value]="i.value" [disabled]="disabled">
            {{ i.name }}
            <Brief>{{ i.extra }}</Brief>
          </RadioItem>
        </RadioItemGroup>
      </List>
      <Flex style="padding: 15px">
        <FlexItem style="padding: 15px 0; color: #888; flex: none">Radio demo(dustomized style)</FlexItem>
        <FlexItem>
          <label
            Radio
            class="my-radio"
            [name]="'Last Agree Item'"
            [value]="'Agree Submit'"
            (onChange)="onChange3($event)"
            >Agree</label
          >
        </FlexItem>
      </Flex>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .my-radio .am-radio {
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
  disabled: boolean = true;
  selectedStatus1 = { value: 0, name: 'doctor' };
  selectedStatus2 = { value: 0, name: 'basketball', extra: 'details' };
  data = [{ value: 0, name: 'doctor' }, { value: 1, name: 'bachelor' }];
  data2 = [{ value: 0, name: 'basketball', extra: 'details' }, { value: 1, name: 'football', extra: 'details' }];

  constructor() {}

  renderHeader() {
    return 'RadioItem demo';
  }

  renderHeader2() {
    return 'dd';
  }

  onChange = event => {
    console.log('ngmodel value: ', JSON.stringify(this.selectedStatus1));
    console.log('output radio status: ', JSON.stringify(event));
  }

  onChange2 = event => {
    console.log('ngmodel value: ', JSON.stringify(this.selectedStatus2));
    console.log('output radio status:  ', JSON.stringify(event));
  }

  onChange3 = e => {
    this.disabled = false;
    console.log('agree submit', e);
  }
}

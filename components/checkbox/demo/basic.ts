import { Component } from '@angular/core';

@Component({
  selector: 'demo-checkbox-basic',
  template: `
    <List [renderHeader]="renderHeader">
      <CheckboxItem
        *ngFor="let i of checkItemListData"
        [name]="i.name"
        [value]="i.value"
        [(ngModel)]="i.checked"
        (onChange)="onChange($event)"
      >
        {{ i.name }}
      </CheckboxItem>
      <CheckboxItem
        multipleLine
        key="disabled"
        data-seed="logId"
        [disabled]="disabledStatus"
        [(ngModel)]="disabledCheckboxItemStatus"
      >
        Undergraduate<Brief>Auxiliary text</Brief>
      </CheckboxItem>
    </List>
    <Flex>
      <FlexItem>
        <AgreeItem
          data-seed="logId"
          [name]="agreeItemData.name"
          [value]="agreeItemData.value"
          [(ngModel)]="agreeItemData.checked"
          (onChange)="onChange2($event)"
        >
          Agree <a (click)="onClick($event)">agreement</a>
        </AgreeItem>
      </FlexItem>
    </Flex>
  `
})
export class DemoCheckboxBasicComponent {
  checkItemListData = [
    { value: 0, name: 'Ph.D.', checked: false },
    { value: 1, name: 'Bachelor', checked: true },
    { value: 2, name: 'College diploma', checked: false }
  ];
  disabledStatus: boolean = true;
  disabledCheckboxItemStatus: boolean = true;
  agreeItemData = { value: 'Agree Submit', name: 'Agree Item', checked: true };

  onChange = (val: any) => {
    console.log('onChange Event: ', val);
    console.log('changed data: ', this.checkItemListData);
  }

  onChange2 = e => {
    this.disabledStatus = !this.disabledStatus;
    console.log('onChange2 Event: ', e);
    console.log('agreeItemData: ', this.agreeItemData);
  }

  onClick(e) {
    e.stopPropagation();
    e.preventDefault();
    alert('agree it');
  }

  renderHeader() {
    return 'CheckboxItem demo';
  }
}

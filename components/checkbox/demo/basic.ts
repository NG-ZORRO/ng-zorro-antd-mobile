import { Component } from '@angular/core';

@Component({
  selector: 'demo-checkbox-basic',
  template: `
    <List [renderHeader]=(renderHeader)>
      <CheckboxItem *ngFor="let i of data"
                    [name]="i.label"
                    [value]="i.value"
                    (onChange)="onChange($event)"
      >
        {{i.label}}
      </CheckboxItem>
      <CheckboxItem multipleLine
                    key="disabled"
                    data-seed="logId"
                    [disabled]="true"
                    [checked]="true"
      >
        Undergraduate<Brief>Auxiliary text</Brief>
      </CheckboxItem>
    </List>
    <Flex>
      <FlexItem>
        <AgreeItem data-seed="logId"
                   [name]="'Agree Item'"
                   [value]="'Agree Submit'"
                   (onChange)="onChange2($event)"
        >
          Agree <a (click)="onClick($event)">agreement</a>
        </AgreeItem>
      </FlexItem>
    </Flex>
  `
})
export class DemoCheckboxBasicComponent {
  data = [
    { value: 0, label: 'Ph.D.' },
    { value: 1, label: 'Bachelor' },
    { value: 2, label: 'College diploma' },
  ];

  onChange = (val: any) => {
    console.log(val);
  }

  onChange2 = (e) => {
    console.log('checkbox', e);
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

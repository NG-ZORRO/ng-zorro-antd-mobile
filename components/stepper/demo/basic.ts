import { Component } from '@angular/core';

@Component({
  selector: 'demo-stepper-basic',
  template: `
    <List>
      <ListItem [extra]="stepper">Show number value</ListItem>
      <ListItem [extra]="stepperDecimal">Decimal step</ListItem>
      <ListItem [extra]="stepperDisabled">Disabled</ListItem>
      <ListItem [extra]="stepperReadOnly">ReadOnly</ListItem>
    </List>
    <ng-template #stepper>
      <Stepper [showNumber]="true" [(ngModel)]="value" (ngModelChange)="change($event)"></Stepper>
    </ng-template>
    <ng-template #stepperDecimal>
      <Stepper
        [min]="1"
        [max]="10"
        [showNumber]="true"
        [step]="0.1"
        [(ngModel)]="decimalValue"
        (ngModelChange)="change($event)"
      ></Stepper>
    </ng-template>
    <ng-template #stepperDisabled>
      <Stepper [defaultValue]="6" [min]="1" [max]="10" [disabled]="true" [showNumber]="true"></Stepper>
    </ng-template>
    <ng-template #stepperReadOnly>
      <Stepper [defaultValue]="6" [min]="1" [max]="10" [readOnly]="true" [showNumber]="true"></Stepper>
    </ng-template>
  `,
  styles: [``]
})
export class DemoStepperBasicComponent {
  value = 0;
  decimalValue = 6;

  constructor() {}

  change($event) {
    console.log($event, 'change');
  }
}

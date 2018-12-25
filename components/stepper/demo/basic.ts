import { Component } from '@angular/core';

@Component({
  selector: 'demo-stepper-basic',
  template: `
    <List>
      <ListItem [extra]="stepperNgModel">Show number value</ListItem>
      <ListItem [extra]="stepper">Show number value</ListItem>
      <ListItem [extra]="stepperDisabled">Disabled</ListItem>
    </List>
    <ng-template #stepper>
      <Stepper [value]="value" [min]="1" [max]="3" [showNumber]="true"  (onChange)="change($event)"></Stepper>
    </ng-template>
    <ng-template #stepperDisabled>
      <Stepper [defaultValue]="6" [min]="1" [max]="10" [disabled]="true" [showNumber]="true"></Stepper>
    </ng-template>
    <ng-template #stepperNgModel>
      <Stepper [(ngModel)]="value1" [min]="1" [max]="10" [showNumber]="true" (ngModelChange)="change($event)"></Stepper>
    </ng-template>
  `,
  styles: [``]
})
export class DemoStepperBasicComponent {
  value = 3;
  value1 = 6;

  constructor() {}

  change($event) {
    console.log($event, 'change');
  }

}

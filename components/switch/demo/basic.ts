import { Component } from '@angular/core';

@Component({
  selector: 'demo-switch-basic',
  template: `
    <WingBlank>
      <List [className]="'my-list'" [renderHeader]="renderHeader">
        <ListItem multipleLine [extra]="on">
          On
        </ListItem>
        <ListItem multipleLine [extra]="off">
          Off
        </ListItem>
        <ListItem multipleLine [extra]="disableOff">
          Disable Off
        </ListItem>
        <ListItem multipleLine [extra]="disableOn">
          Disable On
        </ListItem>
        <ListItem multipleLine [extra]="android">
          Style for Android
        </ListItem>
        <ListItem multipleLine [extra]="iOS">
          Style for iOS
        </ListItem>
        <ListItem multipleLine [extra]="colorAndroid">
          Color for Android
        </ListItem>
        <ListItem multipleLine [extra]="coloriOS">
          Color for iOS
        </ListItem>
      </List>

      <ng-template #on>
        <Switch [checked]="true" (onChange)="check($event)" (onClick)="onClick($event)"></Switch>
      </ng-template>

      <ng-template #off>
        <Switch [checked]="false" (onChange)="check($event)" (onClick)="onClick($event)"></Switch>
      </ng-template>

      <ng-template #disableOff>
        <Switch [checked]="false" [disabled]="true" (onChange)="check($event)" (onClick)="onClick($event)"></Switch>
      </ng-template>

      <ng-template #disableOn>
        <Switch [checked]="true" [disabled]="true" (onChange)="check($event)" (onClick)="onClick($event)"></Switch>
      </ng-template>

      <ng-template #android>
        <Switch
          [checked]="checked"
          [platform]="'android'"
          (onChange)="check($event)"
          (onClick)="onClick($event)"
        ></Switch>
      </ng-template>

      <ng-template #iOS>
        <Switch [(ngModel)]="checked" [platform]="'ios'" (onChange)="check($event)"></Switch>
      </ng-template>

      <ng-template #colorAndroid>
        <Switch
          [checked]="checked"
          [platform]="'android'"
          [color]="'#ff0000'"
          (onChange)="check($event)"
          (onClick)="onClick($event)"
        ></Switch>
      </ng-template>

      <ng-template #coloriOS>
        <Switch [checked]="checked" [platform]="'ios'" [color]="'#ff0000'" (onChange)="check($event)"></Switch>
      </ng-template>
    </WingBlank>
  `
})
export class DemoSwitchBasicComponent {
  checked = true;

  constructor() {}

  check(event) {
    console.log(event);
  }

  onClick(event) {
    console.log(event);
  }

  renderHeader() {
    return 'Form switch';
  }
}

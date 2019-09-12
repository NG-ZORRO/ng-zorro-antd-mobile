import { Component } from '@angular/core';

@Component({
  selector: 'demo-nav-bar-basic',
  template: `
    <Navbar [icon]="icon" [rightContent]="rightContent" [mode]="'light'" (onLeftClick)="onLeftClick()">
      NavBar
    </Navbar>
    <Navbar [leftContent]="'Back'" [rightContent]="rightContent" (onLeftClick)="onLeftClick()">
      NavBar
    </Navbar>

    <ng-template #icon>
      <Icon [type]="'left'"></Icon>
    </ng-template>

    <ng-template #rightContent>
      <Icon [type]="'search'" [ngStyle]="{ marginRight: '16px' }"></Icon>
      <Icon [type]="'ellipsis'"></Icon>
    </ng-template>
  `
})
export class DemoNavBarBasicComponent {
  onLeftClick() {
    console.log('onLeftClick');
  }
}

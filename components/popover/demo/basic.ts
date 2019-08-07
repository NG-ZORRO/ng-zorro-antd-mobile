import { Component } from '@angular/core';

@Component({
  selector: 'demo-popover-basic',
  template: `
    <Navbar [leftContent]="'Back'" [mode]="'light'" [rightContent]="popover" (onLeftClick)="onLeftClick()">
      NavBar
    </Navbar>

    <ng-template #popover>
      <Icon
        Popover
        [ngStyle]="{ height: '100%', display: 'flex', 'align-items': 'center' }"
        [mask]="true"
        [showArrow]="true"
        [overlay]="overlay"
        [type]="'ellipsis'"
        [placement]="'bottomRight'"
        (onSelect)="onSelect($event)"
        (onVisibleChange)="onVisibleChange($event)"
      ></Icon>
    </ng-template>

    <ng-template #overlay>
      <PopoverItem [icon]="icon1">Scan</PopoverItem>
      <PopoverItem [icon]="icon2" [ngStyle]="{ whiteSpace: 'nowrap' }">My Qrcode</PopoverItem>
      <PopoverItem [icon]="icon3">
        <span [ngStyle]="{ marginRight: 5 }">Help</span>
      </PopoverItem>
    </ng-template>

    <ng-template #icon1>
      <Icon [src]="'https://gw.alipayobjects.com/zos/rmsportal/tOtXhkIWzwotgGSeptou.svg'" [size]="'xs'"></Icon>
    </ng-template>

    <ng-template #icon2>
      <Icon [src]="'https://gw.alipayobjects.com/zos/rmsportal/PKAgAqZWJVNwKsAJSmXd.svg'" [size]="'xs'"></Icon>
    </ng-template>

    <ng-template #icon3>
      <Icon [src]="'https://gw.alipayobjects.com/zos/rmsportal/uQIYTFeRrjPELImDRrPt.svg'" [size]="'xs'"></Icon>
    </ng-template>
  `
})
export class DemoPopoverBasicComponent {
  state = {
    selected: ''
  };

  constructor() {}

  onSelect(event) {
    console.log(event);
  }

  onVisibleChange(event) {
    console.log(event);
  }

  onLeftClick() {
    console.log('onLeftClick');
  }
}

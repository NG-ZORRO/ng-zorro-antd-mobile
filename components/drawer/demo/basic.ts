import { Component } from '@angular/core';

@Component({
  selector: 'demo-drawer-basic',
  template: `
    <div>
      <Navbar [icon]="icon" (onLeftClick)="onOpenChange($event)">Basic</Navbar>
      <Drawer
        class="my-drawer"
        [ngStyle]="{ minHeight: this.height + 'px' }"
        [contentStyle]="{ color: '#A6A6A6', textAlign: 'center', paddingTop: '42px' }"
        [enableDragHandle]="true"
        [sidebar]="sidebar"
        [open]="this.state.open"
        (onOpenChange)="onOpenChange($event)"
      >
        Click upper-left corner
      </Drawer>
    </div>

    <ng-template #icon>
      <Icon type="ellipsis"></Icon>
    </ng-template>

    <ng-template #sidebar>
      <List>
        <ListItem [multipleLine]="true" [thumb]="'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'">
          Category
        </ListItem>
        <ListItem
          *ngFor="let num of this.nums; let i = index"
          [thumb]="'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'"
        >
          Category{{ i + 1 }}
        </ListItem>
      </List>
    </ng-template>
  `,
  styles: [
    `
      :host ::ng-deep .my-drawer {
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host ::ng-deep .my-drawer .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host ::ng-deep .my-drawer .am-drawer-sidebar .am-list {
        width: 300px;
        padding: 0;
      }
    `
  ]
})
export class DemoDrawerBasicComponent {
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    open: true
  };

  constructor() {}

  onOpenChange(event) {
    console.log(event);
    this.state.open = !this.state.open;
  }
}

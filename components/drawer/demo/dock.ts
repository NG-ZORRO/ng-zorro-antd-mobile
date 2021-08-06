import { Component } from '@angular/core';

@Component({
  selector: 'demo-drawer-dock',
  template: `
    <div>
      <Navbar [icon]="icon" (onLeftClick)="onDockedChange($event)">Docked in document</Navbar>
      <Drawer
        class="my-drawer"
        [ngStyle]="{ minHeight: this.height + 'px' }"
        [contentStyle]="{ color: '#A6A6A6', textAlign: 'center', paddingTop: '42px' }"
        [sidebarStyle]="{ border: '1px solid #ddd' }"
        [sidebar]="sidebar"
        [enableDragHandle]="false"
        [docked]="this.state.docked"
        (onOpenChange)="onDockedChange($event)"
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
export class DemoDrawerDockComponent {
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    docked: false
  };

  constructor() {}

  onDockedChange = event => {
    console.log('dockedChanged', event);
    this.state.docked = !this.state.docked;
  }
}

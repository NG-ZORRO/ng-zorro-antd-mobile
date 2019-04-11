import { Component, ViewChild } from '@angular/core';
import { Drawer, DrawerServiceComponent } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-drawer-service',
  template: `
    <div>
      <Navbar [icon]="icon" (onLeftClick)="onDockedChange($event)">Docked in document</Navbar>
    </div>
    <ng-template #content>
    <div>
    Click upper-left corner
    </div>
  </ng-template>

  <div class="bodd">

  </div>

    <ng-template #icon>
      <Icon type="ellipsis"></Icon>
    </ng-template>

    <ng-template #sidebar>
      <List>
        <ListItem [multipleLine]="true" (click)="onDockedChange($event)"
                  [thumb]="'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'">
          Category
        </ListItem>
        <ListItem *ngFor="let num of this.nums ; let i = index"
                  [thumb]="'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'">
          Category{{i + 1}}
        </ListItem>
      </List>
    </ng-template>
  `,
  styles: [
    `
      /deep/ .my-drawer {
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      /deep/ .my-drawer .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      /deep/ .my-drawer .am-drawer-sidebar .am-list {
        width: 300px;
        padding: 0;
      }
      .bodd{
        height:600px;
        widht:100%;
      }
    `
  ],
  entryComponents: [DrawerServiceComponent]
})
export class DemoDrawerServiceComponent {
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    docked: false
  };
  @ViewChild('sidebar') sidebar: any;
  @ViewChild('content') content: any;

  constructor(private service: Drawer) { }
  ref;
  onDockedChange = event => {
    console.log('dockedChanged', event);
    this.ref = this.service.create({
      sidebar: this.sidebar,
      content: this.content,
      contentStyle: { color: '#A6A6A6', textAlign: 'center', paddingTop: '42px' },
      sidebarStyle: { border: '1px solid #ddd' },
      enableDragHandle: false,
    });
  };

}

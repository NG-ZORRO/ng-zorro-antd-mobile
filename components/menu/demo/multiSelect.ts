import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-menu-multiSelect',
  template: `
    <div [ngClass]="[show ? 'multi-menu-active' : '']">
      <div>
        <Navbar [leftContent]="'Menu'" (onLeftClick)="handleClick($event)" class="multi-top-nav-bar">
          Here is title
        </Navbar>
      </div>
      <Menu
        *ngIf="show && initData"
        class="multi-foo-menu"
        [data]="initData"
        [value]="['1', ['3', '4']]"
        [multiSelect]="true"
        (onChange)="onChange($event)"
        (onOk)="onOk($event)"
        (onCancel)="onCancel()"
        [height]="menuHeight"
      >
      </Menu>
      <div
        *ngIf="show && !initData"
        style="width: 100% ;height: 200px; display: flex; justify-content: center; align-items: center"
      >
        <ActivityIndicator [size]="'large'"></ActivityIndicator>
      </div>
      <div *ngIf="show" class="menu-mask3" (click)="onMaskClick()"></div>
    </div>
  `,
  styles: [
    `
      .multi-foo-menu {
        position: absolute;
        z-index: 80 !important;
        width: 100%;
      }

      .multi-menu-active .multi-top-nav-bar {
        z-index: 80;
      }

      .multi-top-nav-bar {
        position: relative;
        background-color: #008ae6;
        color: #fff;
      }

      .menu-mask3 {
        content: ' ';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.4;
        z-index: 79;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class DemoMenuMultiSelectComponent {
  initData: Array<any>;
  show: boolean = false;
  menuHeight: number = document.documentElement.clientHeight * 0.6;
  dataMenu: Array<any> = [
    {
      value: '1',
      label: 'Food',
      children: [
        {
          label: 'All Foods',
          value: '1',
          disabled: false
        },
        {
          label: 'Chinese Food',
          value: '2'
        },
        {
          label: 'Hot Pot',
          value: '3'
        },
        {
          label: 'Buffet',
          value: '4'
        },
        {
          label: 'Fast Food',
          value: '5'
        },
        {
          label: 'Snack',
          value: '6'
        },
        {
          label: 'Bread',
          value: '7'
        },
        {
          label: 'Fruit',
          value: '8'
        },
        {
          label: 'Noodle',
          value: '9'
        },
        {
          label: 'Leisure Food',
          value: '10'
        }
      ]
    },
    {
      value: '2',
      label: 'Supermarket',
      children: [
        {
          label: 'All Supermarkets',
          value: '1'
        },
        {
          label: 'Supermarket',
          value: '2',
          disabled: true
        },
        {
          label: 'C-Store',
          value: '3'
        },
        {
          label: 'Personal Care',
          value: '4'
        }
      ]
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
      children: [
        {
          label: 'you can not see',
          value: '1'
        }
      ]
    }
  ];

  onChange(value) {
    console.log(value);
  }

  handleClick(e) {
    e.preventDefault();
    this.show = !this.show;
    if (!this.initData) {
      setTimeout(() => {
        this.initData = this.dataMenu;
      }, 500);
    }
  }

  onMaskClick() {
    this.show = false;
  }

  onOk(value) {
    console.log(value);
    this.onCancel();
  }

  onCancel() {
    this.show = false;
  }
}

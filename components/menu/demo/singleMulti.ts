import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-menu-singleMulti',
  template: `
    <div [ngClass]="[show ? 'single-multi-menu-active' : '']">
      <div>
        <Navbar [leftContent]="'Menu'" (onLeftClick)="handleClick($event)" class="single-multi-top-nav-bar">
          Here is title
        </Navbar>
      </div>
      <Menu
        *ngIf="show && initData"
        class="single-multi-foo-menu"
        [data]="initData"
        [value]="['1']"
        [level]="1"
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
      <div *ngIf="show" class="menu-mask4" (click)="onMaskClick()"></div>
    </div>
  `,
  styles: [
    `
      .single-multi-foo-menu {
        position: absolute;
        z-index: 70 !important;
        width: 100%;
      }

      .single-multi-menu-active .single-multi-top-nav-bar {
        z-index: 80;
      }

      .single-multi-top-nav-bar {
        position: relative;
        background-color: #008ae6;
        color: #fff;
      }

      .menu-mask4 {
        content: ' ';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.4;
        z-index: 69;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class DemoMenuSingleMultiComponent {
  initData: Array<any>;
  show: boolean = false;
  menuHeight: number = document.documentElement.clientHeight * 0.6;
  data: Array<any> = [
    {
      value: '1',
      label: 'Food'
    },
    {
      value: '2',
      label: 'Supermarket'
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true
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
        this.initData = this.data;
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
    console.log('onCancel');
    this.show = false;
  }
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-menu-singleSelect',
  template: `
    <div [ngClass]="[show ? 'single-menu-active' : '']">
      <div>
        <Navbar class="single-top-nav-bar" [leftContent]="'Menu'" (onLeftClick)="handleClick($event)">
          Here is title
        </Navbar>
      </div>
      <Menu
        *ngIf="show && initData"
        class="single-foo-menu"
        [data]="initData"
        [value]="['1']"
        [level]="1"
        (onChange)="onChange($event)"
        [height]="menuHeight"
      >
      </Menu>
      <div
        *ngIf="show && !initData"
        style="width: 100% ;height: 200px; display: flex; justify-content: center; align-items: center"
      >
        <ActivityIndicator [size]="'large'"></ActivityIndicator>
      </div>
      <div *ngIf="show" class="menu-mask2" (click)="onMaskClick()"></div>
    </div>
  `,
  styles: [
    `
      .single-foo-menu {
        position: absolute;
        z-index: 90 !important;
        width: 100%;
      }

      .single-menu-active .single-top-nav-bar {
        z-index: 90;
      }

      .single-top-nav-bar {
        position: relative;
        background-color: #008ae6;
        color: #fff;
      }

      .menu-mask2 {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.4;
        z-index: 89;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class DemoMenuSingleSelectComponent {
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
}

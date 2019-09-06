import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-pull-to-refresh-basic',
  template: `
    <NoticeBar
      *ngIf="!isMobile"
      style="margin-bottom: 10px"
      [option]="{ content: '该组件只支持Touch事件，请使用移动模式/设备打开此页。', marqueeProps: { fps: 100 } }"
    ></NoticeBar>
    <div Button (onClick)="onClick()">direction: {{ state.directionName }}</div>
    <PullToRefresh
      [ngStyle]="dtPullToRefreshStyle"
      [direction]="state.direction"
      [(ngModel)]="state.refreshState"
      [endReachedRefresh]="state.endReachedRefresh"
      (onRefresh)="pullToRefresh($event)"
    >
      <div *ngFor="let i of this.state.data" style="text-align: center; padding: 20px">{{ i }}</div>
    </PullToRefresh>

    <ng-template #loading>
      <Icon type="loading"></Icon>
    </ng-template>
  `
})
export class DemoPullToRefreshBasicComponent implements OnInit {
  isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
  pageLimit = 20;
  public directionCount = 0;
  page = 0;
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    direction: '',
    endReachedRefresh: false,
    height: 500,
    data: [],
    directionName: 'both up and down'
  };
  dtPullToRefreshStyle = { height: this.state.height + 'px' };

  constructor() {}

  onClick() {
    this.directionCount++;
    switch (this.directionCount) {
      case 0:
        this.state.direction = '';
        this.state.directionName = 'both up and down';
        break;
      case 1:
        this.state.direction = 'down';
        this.state.endReachedRefresh = true;
        this.state.directionName = 'down';
        break;
      case 2:
        this.state.direction = 'up';
        this.state.directionName = 'up';
        break;
      default:
        this.directionCount = 0;
        this.state.direction = '';
        this.state.directionName = 'both up and down';
        break;
    }
  }

  pullToRefresh(event) {
    if (event === 'endReachedRefresh') {
      if (this.page < 9) {
        this.page++;
        this.addItems(this.page * this.pageLimit);
        this.state.refreshState.currentState = 'release';
        setTimeout(() => {
          this.state.refreshState.currentState = 'finish';
        }, 1000);
      }
    } else {
      if (event === 'down') {
        this.state.data = [];
        this.page = 0;
        this.addItems(0);
      } else {
        if (this.page < 9) {
          this.page++;
          this.addItems(this.page * this.pageLimit);
        }
      }
    }
  }

  addItems(startIndex) {
    for (let i = startIndex; i < this.pageLimit * (this.page + 1); i++) {
      this.state.data.push(i);
    }
  }

  ngOnInit() {
    this.addItems(0);
  }
}

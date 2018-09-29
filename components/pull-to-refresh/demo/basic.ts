import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'demo-pull-to-refresh-basic',
  template: `
    <div Button style="marginBottom: 15px" (onClick)="onClick()">direction: {{this.state.down ? 'down' : 'up'}}</div>
    <PullToRefresh [ngStyle]="dtPullToRefreshStyle"
                   [direction]="this.state.down ? 'down' : 'up'" [indicator]="this.state.down ? {} : { deactivate: '上拉可以刷新' }"
                   (onRefresh)="pullToRefresh($event)"
    >
      <div *ngFor="let i of this.state.data" style="text-align: center; padding: 20px">{{i}}</div>
    </PullToRefresh>

    <ng-template #loading>
      <Icon type="loading"></Icon>
    </ng-template>
  `
})
export class DemoPullToRefreshBasicComponent implements OnInit {
  pageLimit = 100;
  page = 0;
  state = {
    refreshing: false,
    down: true,
    height: window.innerHeight - ((63 + 47) * window.devicePixelRatio) / 2,
    data: []
  };
  dtPullToRefreshStyle = { height: this.state.height + 'px' };

  constructor() {}

  onClick() {
    this.state.down = !this.state.down;
  }

  pullToRefresh(event) {
    if (this.state.down) {
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

  addItems(startIndex) {
    for (let i = startIndex; i < this.pageLimit * (this.page + 1); i++) {
      this.state.data.push(i);
    }
  }

  genData() {
    const dataArr = [];
    for (let i = 0; i < 100; i++) {
      dataArr.push(i);
    }
    return dataArr;
  }

  ngOnInit() {
    this.addItems(0);
  }
}

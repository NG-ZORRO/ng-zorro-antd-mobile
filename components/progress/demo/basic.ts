import { Component } from '@angular/core';

@Component({
  selector: 'demo-progress-basic',
  template: `
    <div class="progress-container">
      <nzm-progress [percent]="30" [position]="'fixed'" [barStyle]="barStyleDemo"></nzm-progress>
      <div style="height: 18px"></div>
      <Progress [percent]="40" [position]="'normal'" [unfilled]="false" appearTransition></Progress>
      <div class="show-info">
        <div class="progress">
          <Progress [percent]="percent" [position]="'normal'"></Progress>
        </div>
        <div aria-hidden="true">{{ percent }}%</div>
      </div>
      <WhiteSpace [size]="'xl'"></WhiteSpace>
      <WingBlank>
        <a Button (click)="add()">(+-)10</a>
      </WingBlank>
    </div>
  `,
  styles: [
    `
      .show-info {
        margin-top: 18px;
        display: flex;
        align-items: center;
      }
      .show-info .progress {
        margin-right: 5px;
        width: 100%;
      }
    `
  ]
})
export class DemoProgressBasicComponent {
  percent = 50;
  barStyleDemo = {
    border: '2px solid #108ee9'
  };

  constructor() {}

  add() {
    this.percent += 10;
    if (this.percent >= 100) {
      this.percent = 0;
    }
  }
}

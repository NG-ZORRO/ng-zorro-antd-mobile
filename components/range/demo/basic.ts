import { Component } from '@angular/core';

@Component({
  selector: 'demo-range-basic',
  template: `
    <div class="am-demo-page">
      <div style="padding: 15px;font-size: 16px;">步骤条</div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div><div class="sub-title">Basic range ngModel</div></div>
        <div>
          <Range [ngModel]="valueModel" [min]="0" [max]="20" (ngModelChange)="changeModel($event)"> </Range>
        </div>
      </div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div><div class="sub-title">Basic range</div></div>
        <div>
          <Range
            [defaultValue]="[3, 10]"
            [min]="0"
            [max]="20"
            (onChange)="change($event)"
            (onAfterChange)="afterChange($event)"
          ></Range>
        </div>
      </div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div><div class="sub-title">Disabled range</div></div>
        <div>
          <Range
            [defaultValue]="[3, 10]"
            [min]="0"
            [max]="20"
            [disabled]="true"
            (onChange)="change($event)"
            (onAfterChange)="afterChange($event)"
          ></Range>
        </div>
      </div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div><div class="sub-title">Range with customized style</div></div>
        <div>
          <Range
            [defaultValue]="[3, 10]"
            [min]="0"
            [max]="20"
            [trackStyle]="trackStyle"
            [railStyle]="railStyle"
            [handleStyle]="handleStyle"
            (onChange)="change($event)"
            (onAfterChange)="afterChange($event)"
          ></Range>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .am-wingblank,
      .am-wingblank-lg {
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 30px;
      }
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
        margin: 0;
      }
    `
  ]
})
export class DemoRangeBasicComponent {
  value = [20, 50];
  valueModel = [4, 8];
  trackStyle = [{ 'background-color': 'red' }, { 'background-color': 'green' }];
  railStyle = {
    'background-color': 'black'
  };
  handleStyle = [{ 'background-color': 'yellow' }, { 'background-color': 'gray' }];

  constructor() {}

  change(e) {
    console.log(e, 'change');
  }

  afterChange(e) {
    console.log(e, 'afterChange');
  }

  changeModel(e) {
    console.log(e, 'changeModel');
    console.log(this.valueModel, 'valueModel');
  }
}

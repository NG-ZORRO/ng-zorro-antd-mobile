import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-slider-basic',
  template: `
    <div class="am-demo-page">
      <div style="padding: 15px;font-size: 16px;">步骤条</div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div>
          <div class="sub-title">Small size ngModel</div>
        </div>
        <div>
          <Slider
            [ngModel]="value"
            [min]="-10"
            [max]="100"
            (ngModelChange)="change($event)"
            (onAfterChange)="afterChange($event)"
          ></Slider>
        </div>
      </div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div>
          <div class="sub-title">Small size</div>
        </div>
        <div>
          <Slider
            [defaultValue]="26"
            [min]="-10"
            [max]="100"
            (onChange)="change($event)"
            (onAfterChange)="afterChange($event)"
          ></Slider>
        </div>
      </div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div>
          <div class="sub-title">Disabled slider</div>
        </div>
        <div>
          <Slider [defaultValue]="26" [min]="0" [max]="30" [disabled]="true"></Slider>
        </div>
      </div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div>
          <div class="sub-title">slider with customized color</div>
        </div>
        <div>
          <Slider
            [defaultValue]="26"
            [min]="0"
            [max]="30"
            [trackStyle]="trackStyle"
            [railStyle]="railStyle"
            [handleStyle]="handleStyle"
          ></Slider>
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
export class DemoSliderBasicComponent implements OnInit {
  value = 3;
  trackStyle;
  railStyle;
  handleStyle;
  marks;

  constructor() {}

  change(event) {
    console.log(event, 'change');
  }

  afterChange(event) {
    console.log(event, 'afterChange');
  }

  ngOnInit() {
    this.trackStyle = {
      'background-color': 'red',
      height: '5px'
    };
    this.railStyle = {
      'background-color': 'blue',
      height: '5px'
    };
    this.handleStyle = {
      'border-color': 'blue',
      height: '14px',
      width: '14px',
      'margin-left': '-7px',
      'margin-top': '-4.5px',
      'background-color': 'blue'
    };
    this.marks = {
      '-10': '-10°C',
      0: `<strong>0°C</strong>`,
      26: '26°C',
      37: '37°C',
      50: '50°C',
      100: {
        style: {
          color: 'red'
        },
        label: `<strong>100°C</strong>`
      }
    };
  }
}

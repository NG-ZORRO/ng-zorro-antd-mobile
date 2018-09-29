import { Component } from '@angular/core';

@Component({
  selector: 'demo-grid-basic',
  template: `
    <div class="sub-title">Always square grid item </div>
    <Grid [activeStyle]="false" [data]="data" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">Grid item adjust accroiding to img size </div>
    <Grid class="not-square-grid" [data]="data" [square]="false" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">ColumnNum=3 </div>
    <Grid [data]="data" [columnNum]="3" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">No border </div>
    <Grid [data]="data" [hasLine]="false" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">Carousel</div>
    <Grid [data]="data" [isCarousel]="true" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">Custom content</div>
    <Grid [data]="data" [columnNum]="3" [itemStyle]="{ height: '150px', background: 'rgba(0,0,0,.05)' }" (OnClick)="click($event)"></Grid>
    <br>
  `,
  styles: [
    `
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 15px 0 9px 15px;
      }
      /deep/.not-square-grid .am-grid-icon {
        width: 40px;
        height: 60px;
      }
    `
  ]
})
export class DemoGridBasicComponent {
  data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`
  }));

  data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
  }));

  click(event) {
    console.log(event);
  }
}

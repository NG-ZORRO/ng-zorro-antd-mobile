import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-result-basic',
  template: `
    <div class="result-example">
      <div class="sub-title">支付成功</div>
      <Result [img]="img1" [message]="message1" [title]="'支付成功'">
        <ng-template #img1>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
            class="spe am-icon am-icon-md img1"
            alt=""
          />
        </ng-template>
        <ng-template #message1>
          <div class="message1">998.00元 <del>1098元</del></div>
        </ng-template>
      </Result>
    </div>
    <div class="sub-title">验证成功</div>
    <Result [img]="img2" [title]="'验证成功'" [message]="'所提交内容已成功完成验证'">
      <ng-template #img2>
        <Icon class="spe" [type]="'check-circle'" [color]="'#1F90E6'"></Icon>
      </ng-template>
    </Result>
    <div class="sub-title">支付失败</div>
    <Result [img]="img3" [title]="'支付失败'" [message]="'所选银行卡余额不足'">
      <ng-template #img3>
        <Icon class="spe" [type]="'cross-circle-o'" [color]="'#F13642'"></Icon>
      </ng-template>
    </Result>
    <div class="sub-title">等待处理</div>
    <Result [img]="img4" [title]="'等待处理'" [message]="'已提交申请，等待银行处理'">
      <ng-template #img4>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"
          class="spe am-icon am-icon-md"
          alt=""
        />
      </ng-template>
    </Result>
    <div class="sub-title">操作失败</div>
    <Result
      [img]="img5"
      [title]="'无法完成操作'"
      [message]="'由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com'"
      [buttonText]="'请点击查看错误详情'"
      (onButtonClick)="clickCallback()"
    >
      <ng-template #img5>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
          class="spe am-icon am-icon-md"
          alt=""
        />
      </ng-template>
    </Result>
  `,
  styles: [
    `
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
        margin-left: 15px;
      }
      .spe .am-icon {
        width: 60px;
        height: 60px;
      }
      .spe {
        width: 60px;
        height: 60px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class DemoResultBasicComponent {
  clickCallback() {
    console.log('错误详情');
  }
}

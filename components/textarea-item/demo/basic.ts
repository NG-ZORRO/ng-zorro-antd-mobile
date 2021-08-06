import { Component } from '@angular/core';

@Component({
  selector: 'demo-textarea-item-basic',
  template: `
    <div class="am-demo-page">
      <div style="padding: 15px;font-size: 16px; color:#000">Basic</div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Customize to focus</div>
        <div class="am-list-body">
          <TextareaItem
            [placeholder]="'auto focus in Alipay client'"
            [autoFocus]="true"
            [title]="'标题'"
            [autoHeight]="true"
          ></TextareaItem>
          <TextareaItem
            [placeholder]="'click the button below to focus'"
            [title]="'标题'"
            [autoHeight]="true"
            [focus]="inputFocus"
          ></TextareaItem>
          <div class="am-list-item am-list-item-middle">
            <div class="am-list-line">
              <div
                class="am-list-content"
                style="width:100%;color:#108ee9;text-align:center"
                (click)="clickFocusInput()"
              >
                click to focus
              </div>
            </div>
            <div class="am-list-ripple" style="display: none;"></div>
          </div>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Auto / Fixed height</div>
        <div class="am-list-body">
          <TextareaItem [title]="'高度自适应'" [autoHeight]="true" [labelNumber]="5"> </TextareaItem>
          <TextareaItem [editable]="false" [autoHeight]="true" [value]="readonlyValue"> </TextareaItem>
          <TextareaItem [rows]="3" [placeholder]="'fixed number of lines'"> </TextareaItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Show clear</div>
        <div class="am-list-body">
          <TextareaItem [clear]="true" [placeholder]="'displayed clear while typing'" [title]="'标题'"></TextareaItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Custom title（text / image / empty)</div>
        <div class="am-list-body">
          <TextareaItem [title]="customTitle" [placeholder]="'title can be customized'"> </TextareaItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Limited value length</div>
        <div class="am-list-body">
          <TextareaItem [placeholder]="'can enter up to 10 characters'" [count]="10"></TextareaItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Count</div>
        <div class="am-list-body">
          <TextareaItem [rows]="5" [count]="100" [defaultValue]="'计数功能,我的意见是...'">手机号码</TextareaItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Not editable / Disabled</div>
        <div class="am-list-body">
          <TextareaItem [title]="'姓名'" [editable]="false" [defaultValue]="'not editable'"></TextareaItem>
          <TextareaItem [title]="'姓名'" [disabled]="true" [value]="'disabled style'"></TextareaItem>
        </div>
      </div>
    </div>

    <ng-template #customTitle>
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png"
        style="width:28px;height:28px"
        alt=""
      />
    </ng-template>
  `,
  styles: [
    `
      .am-demo-page {
        box-sizing: content-box;
      }
      .am-list-body {
        position: relative;
        background-color: #fff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
      .am-list-header {
        padding: 15px 15px 9px 15px;
        font-size: 14px;
        color: #888;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      :host ::ng-deep .am-list-body .am-list-item.am-textarea-item:not(:last-child) {
        border-bottom: 1px solid #ddd;
      }

      .am-list-item .am-list-line .am-list-content {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: #000;
        font-size: 17px;
        line-height: 1.5;
        text-align: left;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: 7px;
        padding-bottom: 7px;
      }
    `
  ]
})
export class DemoTextareaItemBasicComponent {
  value;
  error;
  readonlyValue =
    'This is a very very very very very very very very' +
    ' very very very very very very very very very very long paragraph of read-only text';
  numberFocus = {
    focus: false,
    date: new Date()
  };
  inputFocus = {
    focus: false,
    date: new Date()
  };

  titleFocus = {
    focus: false,
    date: new Date()
  };
  autoFocus = { focus: true, date: new Date() };

  inputErrorClick(e) {}

  clickFocus() {
    this.numberFocus = {
      focus: true,
      date: new Date()
    };
  }

  clickFocusInput() {
    this.inputFocus = {
      focus: true,
      date: new Date()
    };
  }
}

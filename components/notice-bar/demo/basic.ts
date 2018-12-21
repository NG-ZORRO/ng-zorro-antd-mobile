import { Component } from '@angular/core';

@Component({
  selector: 'demo-notice-bar-basic',
  template: `
    <NoticeBar [content]="'我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！'">
    </NoticeBar>
    <NoticeBar [mode]="'link'" [content]="'我是小黄条，小黄条的小，小黄条的黄'" (onClick)="onClick()">
    </NoticeBar>
    <NoticeBar [icon]="null" [mode]="'closable'" [content]="'我是小黄条，小黄条的小，小黄条的黄'">
    </NoticeBar>
    <NoticeBar [icon]="icon"
               [mode]="'closable'"
               [content]="'我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！'"
               (onClick)="onClick()"
    >
      <ng-template #icon>
        <Icon [type]="'check-circle-o'" [size]="'xxs'"></Icon>
      </ng-template>
    </NoticeBar>
    <NoticeBar [action]="action"
               [content]="'我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！'"
               [mode]="'closable'"
    >
      <ng-template #action>
        <div style="color: #a1a1a1">不再提示</div>
      </ng-template>
    </NoticeBar>
    <NoticeBar [action]="action1"
               [content]="'我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！'"
               [mode]="'link'"
    >
      <ng-template #action1>
        <div>去看看</div>
      </ng-template>
    </NoticeBar>
  `
})
export class DemoNoticeBarBasicComponent {
  onClick() {
    console.log('1');
  }
}

import { Component } from '@angular/core';
import { ActionSheet, Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-action-sheet-basic',
  template: `
    <WingBlank>
      <div Button (onClick)="showActionSheet(message)">showActionSheet</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showShareActionSheet()">showShareActionSheet</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showShareActionSheetMulpitleLine()">showShareActionSheetMulpitleLine</div>

      <ng-template #message>
        <div class="am-action-sheet-message">123</div>
      </ng-template>
    </WingBlank>
  `,
  providers: [ActionSheet, Toast]
})
export class DemoActionSheetBasicComponent {
  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' }
  ].map(obj => ({
    icon: `<img src="https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png" style="width:36px"/>`,
    title: obj.title
  }));

  constructor(private _actionSheet: ActionSheet, private _toast: Toast) {}

  showActionSheet = message => {
    const BUTTONS = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        title: 'title',
        message: message,
        maskClosable: true
      },
      buttonIndex => {
        console.log(buttonIndex);
      }
    );
  };

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: this.dataList,
        message: 'I am description, description, description'
      },
      buttonIndex => {
        return new Promise(resolve => {
          Toast.info('closed after 1000ms');
          setTimeout(resolve, 1000);
        });
      }
    );
  };

  showShareActionSheetMulpitleLine = () => {
    const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: data,
        message: 'I am description, description, description'
      },
      (buttonIndex, rowIndex) => {
        console.log(buttonIndex);
      }
    );
  };
}

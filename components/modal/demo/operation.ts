import { Component } from '@angular/core';
import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-modal-operation',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showOpeartion()">operation</div>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
  `
})
export class DemoModalOperationComponent {
  constructor(private _modal: ModalService) {}

  showOpeartion() {
    this._modal.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') }
    ]);
  }
}

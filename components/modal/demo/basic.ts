import { Component } from '@angular/core';
import { Modal, Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-modal-basic',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showModal('modal1')">text only</div>
      <WhiteSpace></WhiteSpace>
      <Modal [visible]="this.state.modal1" [transparent]="true" [title]="'Title'" [footer]="footer">
        <div [ngStyle]="{ height: 100, overflow: 'scroll' }">
          scoll content...
          <br>
          scoll content...
          <br>
          scoll content...
          <br>
          scoll content...
          <br>
          scoll content...
          <br>
          scoll content...
          <br>
        </div>
      </Modal>
      <div Button (onClick)="showModal('modal2')">popup</div>
      <WhiteSpace></WhiteSpace>
      <Modal [visible]="this.state.modal2" [popup]="true" [animationType]="'slide-up'" (onClose)="onClose('modal2')">
        <List [renderHeader]=(renderHeader) [className]="'popup-list'">
          <ListItem>股票名称</ListItem>
          <ListItem>股票代码</ListItem>
          <ListItem>买入价格</ListItem>
          <ListItem>
            <div Button [type]="'primary'" (onClick)="onClose('modal2')">买入</div>
          </ListItem>
        </List>
      </Modal>
    </WingBlank>
  `,
  styles: [
    `
      .popup-list .am-list-body {
        height: 210px;
        overflow: auto;
      }
    `
  ],
  providers: [Toast, Modal]
})
export class DemoModalBasicComponent {
  state = {
    modal1: false,
    modal2: false
  };
  footer = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal1');
      }
    }
  ];
  footer2 = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal2');
      }
    }
  ];

  constructor(private _modal: Modal, private _toast: Toast) {}

  onClose(key) {
    this.state[key] = false;
  }

  showModal(key) {
    this.state[key] = true;
  }

  renderHeader() {
    return '委托买入';
  }
}

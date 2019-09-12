import { Component } from '@angular/core';
import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-modal-basic',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showModal('modal1')">text only</div>
      <WhiteSpace></WhiteSpace>
      <Modal [(ngModel)]="this.state.modal1" [transparent]="true" [title]="'Title'" [footer]="footer">
        <div [ngStyle]="{ height: 100, overflow: 'scroll' }">
          scoll content... <br />
          scoll content... <br />
          scoll content... <br />
          scoll content... <br />
          scoll content... <br />
          scoll content... <br />
        </div>
      </Modal>
      <div Button (onClick)="showModal('modal2')">popup</div>
      <WhiteSpace></WhiteSpace>
      <Modal [(ngModel)]="this.state.modal2" [popup]="true" [animationType]="'slide-up'" (onClose)="onClose('modal2')">
        <List [renderHeader]="renderHeader" [className]="'popup-list'">
          <ListItem>股票名称</ListItem>
          <ListItem>股票代码</ListItem>
          <ListItem>买入价格</ListItem>
          <ListItem> <div Button [type]="'primary'" (onClick)="onClose('modal2')">买入</div> </ListItem>
        </List>
      </Modal>
      <div Button (onClick)="showModal('modal3')">maskClosable</div>
      <WhiteSpace></WhiteSpace>
      <Modal
        [(ngModel)]="this.state.modal3"
        [transparent]="true"
        [title]="'Title'"
        [maskClosable]="true"
        (onClose)="onClose('modal3')"
      >
        <div [ngStyle]="{ height: 100, overflow: 'scroll' }">
          scoll content... <br />
          scoll content... <br />
          scoll content... <br />
        </div>
      </Modal>
      <div Button (onClick)="showModal('modal4')">closable</div>
      <WhiteSpace></WhiteSpace>
      <Modal
        [(ngModel)]="this.state.modal4"
        [transparent]="true"
        [title]="'Title'"
        [closable]="true"
        (onClose)="onClose('modal4')"
      >
        <div [ngStyle]="{ height: 100, overflow: 'scroll' }">
          scoll content... <br />
          scoll content... <br />
          scoll content... <br />
        </div>
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
  ]
})
export class DemoModalBasicComponent {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
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

  constructor() {}

  modelChange(event) {
    console.log('asdfasdf', event);
  }
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

import { Component } from '@angular/core';
import { Modal, Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-modal-prompt',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showPromptPromise()">promise</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showPromptDefault()">defaultValue</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showSecure()">secure-text</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showCustom()">custom buttons</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showLogin()">login-password</div>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
  `,
  providers: [Toast, Modal]
})
export class DemoModalPromptComponent {
  constructor(private _modal: Modal, private _toast: Toast) {}

  showPromptPromise() {
    Modal.prompt(
      'input name',
      'please input your name',
      [
        {
          text: 'Close',
          onPress: value =>
            new Promise(resolve => {
              Toast.info('onPress promise resolve', 1000);
              setTimeout(() => {
                resolve();
                console.log(`value:${value}`);
              }, 1000);
            })
        },
        {
          text: 'Hold on',
          onPress: value =>
            new Promise((resolve, reject) => {
              Toast.info('onPress promise reject', 1000);
              setTimeout(() => {
                // reject();
                console.log(`value:${value}`);
              }, 1000);
            })
        }
      ],
      'default',
      null,
      ['input your name']
    );
  }

  showPromptDefault() {
    Modal.prompt(
      'defaultValue',
      'defaultValue for prompt',
      [{ text: 'Cancel' }, { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) }],
      'default',
      '100'
    );
  }

  showSecure() {
    Modal.prompt('Password', 'Password Message', password => console.log(`password: ${password}`), 'secure-text');
  }

  showCustom() {
    Modal.prompt(
      'Password',
      'You can custom buttons',
      [{ text: '取消' }, { text: '提交', onPress: password => console.log(`密码为:${password}`) }],
      'secure-text'
    );
  }

  showLogin() {
    Modal.prompt(
      'Login',
      'Please input login information',
      (login, password) => console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['Please input name', 'Please input password']
    );
  }
}

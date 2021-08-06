import { Component } from '@angular/core';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';

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
  `
})
export class DemoModalPromptComponent {
  constructor(private _modal: ModalService, private _toast: ToastService) {}

  showPromptPromise() {
    this._modal.prompt(
      'input name',
      'please input your name',
      [
        {
          text: 'Close',
          onPress: value =>
            new Promise(resolve => {
              this._toast.info('onPress promise resolve', 1000);
              setTimeout(() => {
                resolve(value);
                console.log(`value:${value}`);
              }, 1000);
            })
        },
        {
          text: 'Hold on',
          onPress: value =>
            new Promise((resolve, reject) => {
              this._toast.info('onPress promise reject', 1000);
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
    this._modal.prompt(
      'defaultValue',
      'defaultValue for prompt',
      [{ text: 'Cancel' }, { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) }],
      'default',
      ['100']
    );
  }

  showSecure() {
    this._modal.prompt('Password', 'Password Message', password => console.log(`password: ${password}`), 'secure-text');
  }

  showCustom() {
    this._modal.prompt(
      'Password',
      'You can custom buttons',
      [{ text: '取消' }, { text: '提交', onPress: password => console.log(`密码为:${password}`) }],
      'secure-text'
    );
  }

  showLogin() {
    this._modal.prompt(
      'Login',
      'Please input login information',
      (login, password) => console.log(`login: ${login}, password: ${password}`),
      'login-password',
      ['default', '123456'],
      ['Please input name', 'Please input password']
    );
  }
}

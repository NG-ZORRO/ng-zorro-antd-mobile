import { Component } from '@angular/core';
import { Modal, Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-modal-alert',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showAlert()">customized buttons</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showAlertMuchButtons(message)">More than two buttons</div>
      <WhiteSpace></WhiteSpace>

      <ng-template #message>
        <div>More than two buttons</div>
      </ng-template>

      <div Button (onClick)="showPromise()">promise</div>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
  `,
  providers: [Toast, Modal]
})
export class DemoModalAlertComponent {
  constructor(private _modal: Modal, private _toast: Toast) {}

  showAlert() {
    Modal.alert('Delete', 'Are you sure ?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => console.log('ok') }
    ]);
  }

  showAlertMuchButtons(message) {
    Modal.alert('Much Buttons', message, [
      { text: 'Button1', onPress: () => console.log('第0个按钮被点击了') },
      { text: 'Button2', onPress: () => console.log('第1个按钮被点击了') },
      { text: 'Button2', onPress: () => console.log('第2个按钮被点击了') }
    ]);
  }

  showPromise() {
    Modal.alert('Delete', 'Are you sure???', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      {
        text: 'Ok',
        onPress: () =>
          new Promise(resolve => {
            Toast.info('onPress Promise', 1000);
            setTimeout(resolve, 1000);
          })
      }
    ]);
  }
}

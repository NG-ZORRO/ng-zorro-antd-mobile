import { Component } from '@angular/core';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';

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
  `
})
export class DemoModalAlertComponent {
  constructor(private _modal: ModalService, private _toast: ToastService) {}

  showAlert() {
    ModalService.alert('Delete', 'Are you sure ?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => console.log('ok') }
    ]);
  }

  showAlertMuchButtons(message) {
    ModalService.alert('Much Buttons', message, [
      { text: 'Button1', onPress: () => console.log('第0个按钮被点击了') },
      { text: 'Button2', onPress: () => console.log('第1个按钮被点击了') },
      { text: 'Button2', onPress: () => console.log('第2个按钮被点击了') }
    ]);
  }

  showPromise() {
    ModalService.alert('Delete', 'Are you sure???', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      {
        text: 'Ok',
        onPress: () =>
          new Promise(resolve => {
            ToastService.info('onPress Promise', 1000);
            setTimeout(resolve, 1000);
          }),
          style: {
            color: '#ffffff',
            background: '#00ff00'
          }
      }
    ]);
  }
}

import { Component } from '@angular/core';
import { Toast } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'demo-toast-basic',
  template: `
    <WingBlank>
      <div Button (onClick)="showToast()">text only</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showToastNoMask()">without mask</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showCustomIcon(content)">custom content</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="successToast()">success</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="failToast()">fail</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="offline()">network failure</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="loadingToast()">loading</div>
      <WhiteSpace></WhiteSpace>
      <ng-template #content>
        <p>toast的内容</p>
        <p>toast的内容</p>
      </ng-template>
    </WingBlank>
  `,
  providers: [Toast]
})
export class DemoToastBasicComponent {
  constructor(private _toast: Toast) {}

  showToast() {
    const toast = Toast.show('This is a toast tips !!!', 0);
    setTimeout(() => {
      Toast.hide();
    }, 3000);
  }

  showToastNoMask() {
    const toast = Toast.info('Toast without mask !!!', 4000, null, false);
  }

  showCustomIcon(event) {
    const toast = Toast.info(event);
  }

  successToast() {
    const toast = Toast.success('Load success !!!', 3000, () => {
      console.log('success');
    });
  }

  failToast() {
    const toast = Toast.fail('Load failed !!!', 1000);
  }

  offline() {
    const toast = Toast.offline('Network connection failed !!!', 1000);
  }

  loadingToast() {
    const toast = Toast.loading('Loading...', 3000, () => {
      console.log('Load complete !!!');
    });
  }
}

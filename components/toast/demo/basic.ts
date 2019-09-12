import { Component } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'demo-toast-basic',
  template: `
    <WingBlank>
      <div Button (onClick)="showToast()">text only</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showToastNoMask()">without mask</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showToastTop()">position top</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="showToastBottom()">position bottom</div>
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
  `
})
export class DemoToastBasicComponent {
  constructor(private _toast: ToastService) {}

  showToast() {
    const toast = this._toast.show('This is a toast tips !!!', 0);
    setTimeout(() => {
      this._toast.hide();
    }, 3000);
  }

  showToastNoMask() {
    const toast = this._toast.info('Toast without mask !!!', 4000, null, false);
  }

  showToastTop() {
    const toast = this._toast.info('Toast position top', 4000, null, false, 'top');
  }

  showToastBottom() {
    const toast = this._toast.info('Toast position top', 4000, null, false, 'bottom');
  }

  showCustomIcon(event) {
    const toast = this._toast.info(event);
  }

  successToast() {
    const toast = this._toast.success('Load success !!!', 3000, () => {
      console.log('success');
    });
  }

  failToast() {
    const toast = this._toast.fail('Load failed !!!', 1000);
  }

  offline() {
    const toast = this._toast.offline('Network connection failed !!!', 1000);
  }

  loadingToast() {
    const toast = this._toast.loading('Loading...', 3000, () => {
      console.log('Load complete !!!');
    });
  }
}

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
    const toast = ToastService.show('This is a toast tips !!!', 0);
    setTimeout(() => {
      ToastService.hide();
    }, 3000);
  }

  showToastNoMask() {
    const toast = ToastService.info('Toast without mask !!!', 4000, null, false);
  }

  showToastTop() {
    const toast = ToastService.info('Toast position top', 4000, null, false, 'top');
  }

  showToastBottom() {
    const toast = ToastService.info('Toast position top', 4000, null, false, 'bottom');
  }

  showCustomIcon(event) {
    const toast = ToastService.info(event);
  }

  successToast() {
    const toast = ToastService.success('Load success !!!', 3000, () => {
      console.log('success');
    });
  }

  failToast() {
    const toast = ToastService.fail('Load failed !!!', 1000);
  }

  offline() {
    const toast = ToastService.offline('Network connection failed !!!', 1000);
  }

  loadingToast() {
    const toast = ToastService.loading('Loading...', 3000, () => {
      console.log('Load complete !!!');
    });
  }
}

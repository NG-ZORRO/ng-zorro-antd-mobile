import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { WingBlankModule } from 'ng-zorro-antd-mobile/wing-blank';

@NgModule({
  imports: [CommonModule, IconModule, WingBlankModule],
  exports: [ToastComponent],
  declarations: [ToastComponent],
  providers: [ToastService]
})
export class ToastModule {}

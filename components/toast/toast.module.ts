import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { IconModule } from '../icon/icon.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';

@NgModule({
  imports: [CommonModule, IconModule, WingBlankModule],
  exports: [ToastComponent],
  declarations: [ToastComponent],
  providers: [ToastService]
})
export class ToastModule {}

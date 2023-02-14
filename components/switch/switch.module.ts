import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch.component';
import { CommonModule } from '@angular/common';
import { WingBlankModule } from 'ng-zorro-antd-mobile/wing-blank';

@NgModule({
  exports: [SwitchComponent],
  declarations: [SwitchComponent],
  imports: [CommonModule, WingBlankModule]
})
export class SwitchModule {}

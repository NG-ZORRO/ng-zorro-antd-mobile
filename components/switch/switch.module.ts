import { NgModule } from '@angular/core';
import { Switch } from './switch.component';
import { CommonModule } from '@angular/common';
import { WingBlankModule } from '../wing-blank/wing-blank.module';

@NgModule({
  exports: [Switch],
  declarations: [Switch],
  imports: [CommonModule, WingBlankModule]
})
export class SwitchModule {}

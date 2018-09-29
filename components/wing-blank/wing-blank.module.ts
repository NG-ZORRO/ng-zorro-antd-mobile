import { NgModule } from '@angular/core';
import { WingBlank } from './wing-blank.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WingBlank],
  exports: [WingBlank],
  imports: [CommonModule]
})
export class WingBlankModule {}

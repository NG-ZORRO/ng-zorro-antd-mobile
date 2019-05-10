import { NgModule } from '@angular/core';
import { WingBlankComponent } from './wing-blank.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WingBlankComponent],
  exports: [WingBlankComponent],
  imports: [CommonModule]
})
export class WingBlankModule {}

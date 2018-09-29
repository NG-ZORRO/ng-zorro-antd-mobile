import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProgressComponent],
  exports: [ProgressComponent]
})
export class ProgressModule {}

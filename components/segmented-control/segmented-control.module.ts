import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentedControlComponent } from './segmented-control.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SegmentedControlComponent],
  exports: [SegmentedControlComponent]
})
export class SegmentedControlModule {}

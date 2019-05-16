import { NgModule } from '@angular/core';
import { RangeComponent } from './range.component';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  exports: [RangeComponent],
  declarations: [RangeComponent],
  imports: [CommonModule, SliderModule]
})
export class RangeModule {}

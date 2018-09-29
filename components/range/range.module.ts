import { NgModule } from '@angular/core';
import { Range } from './range.component';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  exports: [Range],
  declarations: [Range],
  imports: [CommonModule, SliderModule]
})
export class RangeModule {}

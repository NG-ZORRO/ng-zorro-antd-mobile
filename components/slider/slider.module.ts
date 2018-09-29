import { NgModule } from '@angular/core';
import { Slider } from './slider.component';
import { CommonModule } from '@angular/common';
import { SliderHandle } from './slider-handle/slider-handle.component';
import { SliderMarks } from './slider-marks/slider-marks.component';
import { SliderSteps } from './slider-steps/slider-steps.component';
import { SliderTrack } from './slider-track/slider-track.component';

@NgModule({
  exports: [Slider , SliderHandle , SliderMarks , SliderSteps , SliderTrack],
  declarations: [Slider , SliderHandle , SliderMarks , SliderSteps , SliderTrack],
  imports: [CommonModule]
})
export class SliderModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderHandleComponent } from './slider-handle/slider-handle.component';
import { SliderMarksComponent } from './slider-marks/slider-marks.component';
import { SliderStepsComponent } from './slider-steps/slider-steps.component';
import { SliderTrackComponent } from './slider-track/slider-track.component';

@NgModule({
  exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
  declarations: [
    SliderComponent,
    SliderHandleComponent,
    SliderMarksComponent,
    SliderStepsComponent,
    SliderTrackComponent
  ],
  imports: [CommonModule]
})
export class SliderModule {}

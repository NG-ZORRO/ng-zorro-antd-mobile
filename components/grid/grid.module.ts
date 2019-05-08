import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FlexModule } from '../flex/flex.module';
import { CarouselModule } from '../carousel/carousel.module';
import { IconModule } from '../icon/icon.module';
import { TouchFeedbackModule } from '../core/directive/touch-feedback.module';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
@NgModule({
  imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
  exports: [GridComponent],
  declarations: [GridComponent]
})
export class GridModule {}

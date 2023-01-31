import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FlexModule } from 'ng-zorro-antd-mobile/flex';
import { CarouselModule } from 'ng-zorro-antd-mobile/carousel';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { TouchFeedbackModule } from 'ng-zorro-antd-mobile/core';
import { NgZorroAntdMobilePipesModule } from 'ng-zorro-antd-mobile/pipes';

@NgModule({
  imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
  exports: [GridComponent],
  declarations: [GridComponent]
})
export class GridModule {}

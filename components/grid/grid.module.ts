import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FlexModule } from '../flex/flex.module';
import { CarouselModule } from '../carousel/carousel.module';
import { IconModule } from '../icon/icon.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [FlexModule, IconModule, CommonModule, CarouselModule, CoreModule],
  exports: [GridComponent],
  declarations: [GridComponent]
})
export class GridModule {}

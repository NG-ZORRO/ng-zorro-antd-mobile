import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { DotIndicatorComponent } from './dotindicator/dotindicator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent],
  exports: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent]
})
export class CarouselModule {}

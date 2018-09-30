import { Component, HostBinding, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'CarouselSlide, nzm-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CarouselSlideComponent {
  @HostBinding('class.carousel-container')
  container = true;
  @HostBinding('style.width.px')
  width;
  @HostBinding('style.height')
  height = 'auto';
  @HostBinding('style.left.px')
  left;
  @HostBinding('style.top.px')
  top;
  @HostBinding('style.margin')
  margin;
}

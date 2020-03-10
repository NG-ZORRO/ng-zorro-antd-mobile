import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'CarouselSlide, nzm-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CarouselSlideComponent {
  @HostBinding('class.am-carousel-container')
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
  @HostBinding('style.overflow')
  overflow = 'hidden';
}

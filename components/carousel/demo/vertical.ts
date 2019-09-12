import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-vertical',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <Carousel
        class="my-carousel"
        [autoplay]="true"
        [infinite]="true"
        [vertical]="true"
        [dots]="false"
        [dragging]="false"
      >
        <CarouselSlide *ngFor="let item of state.data">
          <div class="v-item">carousel {{ item }}</div>
        </CarouselSlide>
      </Carousel>
    </WingBlank>
  `,
  styles: [
    `
      .my-carousel .v-item {
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
      }
    `
  ]
})
export class DemoCarouselVerticalComponent {
  state = {
    data: ['1', '2', '3']
  };
}

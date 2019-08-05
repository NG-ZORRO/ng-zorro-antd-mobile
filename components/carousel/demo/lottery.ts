import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-lottery',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <Carousel
        class="my-carousel"
        [dots]="false"
        [speed]="200"
        [autoplay]="true"
        [infinite]="true"
        [vertical]="true"
        [dragging]="false"
        [autoplayInterval]="300"
      >
        <CarouselSlide *ngFor="let item of state.data; let i = index">
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
export class DemoCarouselLotteryComponent {
  state = {
    data: ['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note']
  };
}

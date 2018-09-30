import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-vertical',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
        <Carousel class="my-carousel"
                  [autoplay]="true"
                  [infinite]="true"
                  [vertical]="true"
                  [dots]="false"
                  [dragging]="false"
        >
          <CarouselSlide *ngFor="let item of state.data;let i = index">
            <div class="v-item">carousel {{i}}</div>
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
  colors = [];
  data = [];

  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '184px',
    slideIndex: 0
  };

  dataOutPut(event) {
    this.data = event;
  }

  clickEvent(event) {
    console.log(event);
  }

  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    this.state.slideIndex = event;
    console.log('slide to ' + event);
  }
}

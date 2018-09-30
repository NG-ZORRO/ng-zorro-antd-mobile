import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-basic-space',
  template: `
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <Carousel class="space-carousel"
                [autoplay]="true"
                [infinite]="true"
                [frameOverflow]="'visible'"
                [cellSpacing]="10"
                [slideWidth]="0.8"
                (beforeChange)="beforeChange($event)"
                (afterChange)="afterChange($event)"
      >
        <CarouselSlide *ngFor="let item of state.data;let i = index">
        <div [ngStyle]="{'display': 'block',
                         'position': 'relative',
                         'top': state.slideIndex === i ? '-10px' : 0,
                         'height': state.imgHeight,
                         'boxShadow': '2px 1px 1px rgba(0, 0, 0, 0.2)'}"
        >
          <img src="https://zos.alipayobjects.com/rmsportal/{{item}}.png" style="width: 100%;"/>
        </div>
        </CarouselSlide>
      </Carousel>
    </WingBlank>
  `,
  styles: [
    `
      .space-carousel {
        padding: 16px;
        background: #def1e5;
        overflow: hidden;
      }
    `
  ]
})
export class DemoCarouselBasicSpaceComponent {
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

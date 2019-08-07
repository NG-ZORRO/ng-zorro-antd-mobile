import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-basic',
  template: `
    <WingBlank>
      <Carousel
        [infinite]="true"
        [vertical]="false"
        [selectedIndex]="1"
        (beforeChange)="beforeChange($event)"
        (afterChange)="afterChange($event)"
      >
        <CarouselSlide *ngFor="let item of state.data">
          <div style="display: inline-block; width: 100%;" [ngStyle]="{ height: state.imgHeight }">
            <img
              src="https://zos.alipayobjects.com/rmsportal/{{ item }}.png"
              style=" pointer-events: none; width: 100%;"
            />
          </div>
        </CarouselSlide>
      </Carousel>
    </WingBlank>
  `
})
export class DemoCarouselBasicComponent {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '184px'
  };

  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    console.log('slide to ' + event);
  }
}

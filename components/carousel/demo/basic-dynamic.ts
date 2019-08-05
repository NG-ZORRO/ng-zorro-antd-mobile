import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-basic-dynamic',
  template: `
    <WingBlank>
      <div Button (onClick)="onClick1()">Click me to add child</div>
      <WhiteSpace></WhiteSpace>
      <Carousel [infinite]="true" (beforeChange)="beforeChange($event)" (afterChange)="afterChange($event)">
        <CarouselSlide *ngFor="let item of state.data; let i = index" [ngStyle]="{ height: state.imgHeight }">
          <div style="display: inline-block; width: 100%;" [ngStyle]="{ height: state.imgHeight }">
            <img
              src="https://zos.alipayobjects.com/rmsportal/{{ item }}.png"
              style="pointer-events: none; width: 100%;"
            />
          </div>
        </CarouselSlide>
      </Carousel>
    </WingBlank>
  `
})
export class DemoCarouselBasicDynamicComponent {
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

  onClick1() {
    this.state.data.push('AiyWuByWklrrUDlFignR');
  }
}

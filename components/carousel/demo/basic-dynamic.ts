import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-carousel-basic-dynamic',
  template: `
    <WingBlank>
      <div Button (onClick)="onClick1()">Click me to add child</div>
      <WhiteSpace></WhiteSpace>
      <Carousel [infinite]="true"
                (beforeChange)="beforeChange($event)"
                (afterChange)="afterChange($event)"
      >
        <CarouselSlide *ngFor="let item of state.data;let i = index" [ngStyle]="{'height': state.imgHeight}">
        <div style="display: inline-block; width: 100%;" [ngStyle]="{'height': state.imgHeight}">
          <img src="https://zos.alipayobjects.com/rmsportal/{{item}}.png" style="width: 100%;"/>
        </div>
        </CarouselSlide>
      </Carousel>
    </WingBlank>
  `
})
export class DemoCarouselBasicDynamicComponent implements OnInit {
  colors = [];
  data = [];

  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '184px'
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
    console.log('slide to ' + event);
  }

  onClick1() {
    this.state.data.push('AiyWuByWklrrUDlFignR');
  }

  ngOnInit() {

  }
}

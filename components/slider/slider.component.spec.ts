import { OnInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SliderModule } from './slider.module';
import { dispatchMouseEvent, dispatchTouchEvent } from '../core/testing';

describe('SliderComponent', () => {
  let component: TestSliderComponent;
  let fixture: ComponentFixture<TestSliderComponent>;
  let sliderEle;
  let sliderEles;
  let amSlider;
  let sliderHandler;
  let sliderSteps;
  let sliderMarks;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestSliderComponent],
      imports: [SliderModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSliderComponent);
    component = fixture.componentInstance;
    sliderEle = fixture.debugElement.query(By.css('Slider'));
    sliderEles = fixture.debugElement.queryAll(By.css('Slider'));
    amSlider = sliderEle.nativeElement.querySelector('.am-slider');
    sliderHandler = sliderEle.nativeElement.querySelector('.am-slider-handle');
    sliderSteps = sliderEle.nativeElement.querySelector('.am-slider-step');
    fixture.detectChanges();
  });

  it('should defaultValue work', () => {
    fixture.detectChanges();
    expect(sliderHandler.getAttribute('style')).toContain('left: 20%');
  });
  it('should value work', () => {
    component.value = 70;
    fixture.detectChanges();
    expect(sliderHandler.getAttribute('style')).toContain('left: 70%');
  });
  it('should min work', () => {
    component.min = 30;
    component.value = 10;
    fixture.detectChanges();
    expect(sliderHandler.getAttribute('style')).toContain('left: 0%');
  });
  it('should max work', () => {
    component.max = 80;
    component.value = 100;
    fixture.detectChanges();
    expect(sliderHandler.getAttribute('style')).toContain('left: 100%');
  });
  it('should dots work', () => {
    sliderSteps = sliderEle.nativeElement.querySelector('.am-slider-step');
    const spanList = sliderSteps.querySelectorAll('.am-slider-dot');
    expect(spanList.length).toBe(102);
  });
  it('should marks work', () => {
    sliderMarks = sliderEle.nativeElement.querySelector('.am-slider-mark');
    const spanList = sliderMarks.querySelectorAll('.am-slider-mark-text');
    expect(spanList.length).toBe(6);
  });
  it('should disabled work', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(amSlider.classList).toContain('am-slider-disabled');

    const sliderHandlerNode = sliderEle.nativeElement.querySelector('sliderhandle');
    dispatchMouseEvent(sliderHandlerNode, 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 290);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    expect(sliderHandler.getAttribute('style')).toContain('left: 20%');
  });
  it('should mouse event work', () => {
    const sliderCoords = amSlider.getBoundingClientRect();
    const sliderLength = sliderCoords.width;
    const sliderStart = sliderCoords.left;
    const offset = Math.round(((230 - sliderStart) / sliderLength) * 100);
    const sliderHandlerNode = sliderEle.nativeElement.querySelector('sliderhandle');
    dispatchMouseEvent(sliderHandlerNode, 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 230);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    expect(sliderHandler.getAttribute('style')).toContain('left: ' + offset + '%');
    expect(component.change).toHaveBeenCalled();
    expect(component.afterChange).toHaveBeenCalled();
  });
  it('should touch event work', () => {
    const sliderCoords = amSlider.getBoundingClientRect();
    const sliderLength = sliderCoords.width;
    const sliderStart = sliderCoords.left;
    const offset = Math.round(((230 - sliderStart) / sliderLength) * 100);

    const sliderHandlerNode = sliderEle.nativeElement.querySelector('sliderhandle');
    dispatchTouchEvent(sliderHandlerNode, 'touchstart');
    fixture.detectChanges();
    dispatchTouchEvent(sliderHandlerNode, 'touchmove', 230);
    fixture.detectChanges();
    dispatchTouchEvent(sliderHandlerNode, 'touchend');
    expect(sliderHandler.getAttribute('style')).toContain('left: ' + offset + '%');
    expect(component.change).toHaveBeenCalled();
    expect(component.afterChange).toHaveBeenCalled();
  });
  it('should ngModel work', () => {
    amSlider = sliderEles[1].nativeElement.querySelector('.am-slider');
    sliderHandler = sliderEles[1].nativeElement.querySelector('.am-slider-handle');
    sliderSteps = sliderEles[1].nativeElement.querySelector('.am-slider-step');
    const sliderCoords = amSlider.getBoundingClientRect();
    const sliderLength = sliderCoords.width;
    const sliderStart = sliderCoords.left;
    const offset = Math.round(((230 - sliderStart) / sliderLength) * 100);

    const sliderHandlerNode = sliderEles[1].nativeElement.querySelector('sliderhandle');
    dispatchTouchEvent(sliderHandlerNode, 'touchstart');
    fixture.detectChanges();
    dispatchTouchEvent(sliderHandlerNode, 'touchmove', 230);
    fixture.detectChanges();
    dispatchTouchEvent(sliderHandlerNode, 'touchend');
    expect(sliderHandler.getAttribute('style')).toContain('left: ' + offset + '%');
    expect(component.modelChange).toHaveBeenCalled();
  });
});

@Component({
  selector: 'test-slider',
  template: `
    <Slider
      [min]="min"
      [max]="max"
      [dots]="dots"
      [step]="step"
      [marks]="marks"
      [value]="value"
      [disabled]="disabled"
      [included]="included"
      [railStyle]="railStyle"
      [trackStyle]="trackStyle"
      [handleStyle]="handleStyle"
      [defaultValue]="defaultValue"
      (onChange)="change($event)"
      (onAfterChange)="afterChange($event)"
    ></Slider>
    <Slider
      [min]="min"
      [max]="max"
      [dots]="dots"
      [step]="step"
      [marks]="marks"
      [(ngModel)]="value"
      [disabled]="disabled"
      [included]="included"
      [railStyle]="railStyle"
      [trackStyle]="trackStyle"
      [handleStyle]="handleStyle"
      (ngModelChange)="modelChange($event)"
      (onAfterChange)="afterChange($event)"
    ></Slider>
  `
})
export class TestSliderComponent implements OnInit {
  min = 0;
  max = 100;
  step = 1;
  value;
  defaultValue = 20;
  disabled = false;
  marks = {};
  dots = true;
  included = true;
  handleStyle;
  trackStyle = {};
  railStyle;

  afterChange = jasmine.createSpy('afterChange callback');
  change = jasmine.createSpy('change callback');
  modelChange = jasmine.createSpy('ngModelChange callback');
  constructor() {}

  ngOnInit() {
    this.marks = {
      '-10': '-10°C',
      0: `<strong>0°C</strong>`,
      26: '26°C',
      37: '37°C',
      50: '50°C',
      100: {
        style: {
          color: 'red'
        },
        label: `<strong>100°C</strong>`
      }
    };
  }
}

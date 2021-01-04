import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { RangeModule } from './range.module';
import { dispatchMouseEvent } from '../core/testing';

describe('RangeComponent', () => {
  let component: TestRangeComponent;
  let fixture: ComponentFixture<TestRangeComponent>;
  let rangeEle;
  let amSlider;
  let sliderHandler;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestRangeComponent],
      imports: [RangeModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRangeComponent);
    component = fixture.componentInstance;
    rangeEle = fixture.debugElement.query(By.css('Range'));
    fixture.detectChanges();
    amSlider = rangeEle.nativeElement.querySelector('.am-slider');
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    fixture.detectChanges();
  });
  it('should verifyPushable work', () => {
    component.pushable = 15;
    fixture.detectChanges();
    component.value = [30, 40];
    fixture.detectChanges();
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 20%');
  });

  it('should defaultValue work', () => {
    fixture.detectChanges();
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 20%');
    expect(sliderHandler[1].getAttribute('style')).toContain('left: 50%');
  });
  it('should value work', () => {
    component.value = [30, 120];
    fixture.detectChanges();
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 30%');
    expect(sliderHandler[1].getAttribute('style')).toContain('left: 100%');

    component.value = [-30, 60];
    fixture.detectChanges();
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 0%');
    expect(sliderHandler[1].getAttribute('style')).toContain('left: 60%');
  });
  it('should allowCross=true work', () => {
    // component.allowCross = true;
    // fixture.detectChanges();

    const sliderHandlerNodeList = rangeEle.nativeElement.querySelectorAll('sliderhandle');
    dispatchMouseEvent(sliderHandlerNodeList[0], 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 10000);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 100%');
  });

  it('should allowCross=false work', () => {
    component.allowCross = false;
    fixture.detectChanges();

    const sliderHandlerNodeList = rangeEle.nativeElement.querySelectorAll('sliderhandle');
    dispatchMouseEvent(sliderHandlerNodeList[0], 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 10000);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 50%');
  });

  it('should pushable is number work', () => {
    component.pushable = 5;
    fixture.detectChanges();

    const sliderHandlerNodeList = rangeEle.nativeElement.querySelectorAll('sliderhandle');
    dispatchMouseEvent(sliderHandlerNodeList[0], 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 10000);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[0].getAttribute('style')).toContain('left: 45%');
  });
  it('should pushable=true work', () => {
    component.pushable = true;
    fixture.detectChanges();

    const sliderCoords = amSlider.getBoundingClientRect();
    const sliderLength = sliderCoords.width;
    const sliderStart = sliderCoords.left;
    const offset = Math.round(((400 - sliderStart) / sliderLength) * 100);

    const sliderHandlerNodeList = rangeEle.nativeElement.querySelectorAll('sliderhandle');
    dispatchMouseEvent(sliderHandlerNodeList[0], 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 400);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[0].getAttribute('style')).toContain('left: ' + offset + '%');
  });
});
describe('RangeModelComponent', () => {
  let component: TestRangeModelComponent;
  let fixture: ComponentFixture<TestRangeModelComponent>;
  let rangeEle;
  let amSlider;
  let sliderHandler;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestRangeModelComponent],
      imports: [RangeModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRangeModelComponent);
    component = fixture.componentInstance;
    rangeEle = fixture.debugElement.query(By.css('Range'));
    fixture.detectChanges();
    amSlider = rangeEle.nativeElement.querySelector('.am-slider');
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    fixture.detectChanges();
  });
  it('should ngModel work', fakeAsync(() => {
    const sliderHandlerNodeList = rangeEle.nativeElement.querySelectorAll('sliderhandle');
    dispatchMouseEvent(sliderHandlerNodeList[1], 'mousedown');
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mousemove', 600);
    fixture.detectChanges();
    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    tick();
    sliderHandler = rangeEle.nativeElement.querySelectorAll('.am-slider-handle');
    expect(sliderHandler[1].getAttribute('style')).toContain('left: ' + 0 + '%');
    expect(component.valueModel).toEqual([0, 20]);
    expect(component.changeModel).toHaveBeenCalled();
  }));
});

@Component({
  selector: 'test-range',
  template: `
    <Range
      [max]="max"
      [min]="min"
      [dots]="dots"
      [step]="step"
      [value]="value"
      [marks]="marks"
      [count]="count"
      [disabled]="disabled"
      [included]="included"
      [pushable]="pushable"
      [railStyle]="railStyle"
      [allowCross]="allowCross"
      [trackStyle]="trackStyle"
      [handleStyle]="handleStyle"
      [defaultValue]="defaultValue"
      (onChange)="change($event)"
      (onAfterChange)="afterChange($event)"
    ></Range>
  `
})
export class TestRangeComponent {
  min = 0;
  max = 100;
  step = 1;
  defaultValue = [20, 50];
  disabled = false;
  marks = {};
  dots = false;
  included = true;
  value;
  valueModel = [20, 80];
  count = 1;
  allowCross = true;
  pushable;
  trackStyle = [{ 'background-color': 'red' }, { 'background-color': 'green' }];
  railStyle = {
    'background-color': 'black'
  };
  handleStyle = [{ 'background-color': 'yellow' }, { 'background-color': 'gray' }];

  afterChange = jasmine.createSpy('afterChange callback');
  change = jasmine.createSpy('change callback');
  changeModel = jasmine.createSpy('changeModel callback');

  constructor() {}
}

@Component({
  selector: 'test-range-model',
  template: `
    <Range
      [max]="max"
      [min]="min"
      [(ngModel)]="valueModel"
      [defaultValue]="defaultValue"
      (onChange)="change($event)"
      (onAfterChange)="afterChange($event)"
      (ngModelChange)="changeModel($event)"
    ></Range>
  `
})
export class TestRangeModelComponent {
  min = 0;
  max = 100;
  valueModel = [20, 80];
  defaultValue = [20, 80];
  count = 1;
  allowCross = true;

  afterChange = jasmine.createSpy('afterChange callback');
  change = jasmine.createSpy('change callback');
  changeModel = jasmine.createSpy('changeModel callback');

  constructor() {}
}

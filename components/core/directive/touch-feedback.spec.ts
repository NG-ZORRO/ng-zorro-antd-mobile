import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { dispatchTouchEvent } from '../testing';
import { TouchFeedbackModule } from './touch-feedback.module';
import { CarouselModule, FlexModule, IconModule, GridModule } from '../../..';
describe('TouchFeedbackDirective', () => {
  let component: TouchFeedbackDirectiveComponent;
  let fixture: ComponentFixture<TouchFeedbackDirectiveComponent>;
  let gridEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TouchFeedbackDirectiveComponent],
      imports: [TouchFeedbackModule, GridModule, FlexModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchFeedbackDirectiveComponent);
    component = fixture.componentInstance;
    gridEle = fixture.debugElement.query(By.css('grid'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should touch start', () => {
    dispatchTouchEvent(gridEle.nativeElement.children[0].children[0], 'touchstart');
    fixture.detectChanges();
    expect(gridEle.nativeElement.children[0].children[0].classList).toContain('am-grid-item-active');
  });

  it('should touch end', () => {
    dispatchTouchEvent(gridEle.nativeElement.children[0].children[0], 'touchstart');
    dispatchTouchEvent(gridEle.nativeElement.children[0].children[0], 'touchend');
    fixture.detectChanges();
    expect(gridEle.nativeElement.children[0].children[0]).not.toContain('am-grid-item-active');
  });
});
@Component({
  selector: 'test-grid',
  template: `
    <Grid [data]="dataList" (onClick)="click($event)"></Grid>
  `
})
export class TouchFeedbackDirectiveComponent {
  data = Array.from(new Array(9)).map((val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`
  }));
  square = true;
  hasLine = true;
  columnNum = 3;
  isCarousel = false;

  dataList = Array.from(new Array(9)).map((_val, i) => ({
    icon: `<img src="/assets/img/logo.svg" style="width:36px"/>`,
    text: `name${i}`
  }));

  onClick(event) {
    console.log(event);
  }
}

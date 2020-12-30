import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, FlexModule, IconModule, GridModule } from '../..';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
describe('GridComponent', () => {
  let component: TestGridComponent;
  let fixture: ComponentFixture<TestGridComponent>;
  let gridEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestGridComponent],
      imports: [
        BrowserAnimationsModule,
        CarouselModule,
        FlexModule,
        IconModule,
        GridModule,
        NgZorroAntdMobilePipesModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGridComponent);
    component = fixture.componentInstance;
    gridEle = fixture.debugElement.query(By.css('grid'));
    fixture.detectChanges();
  });

  it('should columnNum work', () => {
    component.columnNum = 4;
    fixture.detectChanges();
    expect(gridEle.nativeElement.children[0].children.length).toBe(4, 'columnNum is work');
    component.columnNum = 3;
    fixture.detectChanges();
    expect(gridEle.nativeElement.children[0].children.length).toBe(3, 'columnNum is work');
  });

  it('should data work', () => {
    fixture.detectChanges();
    expect(gridEle.nativeElement.children.length).not.toBe(0, 'data is work');
    component.data = [];
    fixture.detectChanges();
    expect(gridEle.nativeElement.children.length).toBe(0, 'data is []');
  });

  it('should square work', () => {
    expect(gridEle.nativeElement.classList).toContain('am-grid-square', 'square is true');
    component.square = false;
    fixture.detectChanges();
    expect(gridEle.nativeElement.classList).not.toContain('am-grid-square', 'square is false');
  });

  it('should line work', () => {
    expect(gridEle.nativeElement.classList).toContain('am-grid-line', 'square is true');
    component.hasLine = false;
    fixture.detectChanges();
    expect(gridEle.nativeElement.classList).not.toContain('am-grid-line', 'square is false');
  });

  it('should isCarousel work', () => {
    component.isCarousel = true;
    fixture.detectChanges();
    expect(gridEle.nativeElement.classList).toContain('am-grid-carousel', 'carousel is true');
    component.isCarousel = false;
    fixture.detectChanges();
    expect(gridEle.nativeElement.classList).not.toContain('am-grid-carousel', 'carousel is false');
  });

  it('should carouselMaxRow work', () => {
    component.isCarousel = true;
    component.carouselMaxRow = 2;
    fixture.detectChanges();
    expect(gridEle.nativeElement.querySelector('carouselslide').getElementsByTagName('flex').length).toBe(2, 'carouselMaxRow is work');
    component.carouselMaxRow = 1;
    fixture.detectChanges();
    expect(gridEle.nativeElement.querySelector('carouselslide').getElementsByTagName('flex').length).toBe(1, 'carouselMaxRow is work');
  });

  it('onClick work', () => {
    component.data = Array.from(new Array(9)).map((val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`
    }));
    fixture.detectChanges();
    component.onClick = jasmine.createSpy('onClick is callback');
    gridEle.nativeElement.querySelector('.am-grid-item-content').click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-grid',
  template: `
    <Grid
      [data]="data"
      [square]="square"
      [hasLine]="hasLine"
      [columnNum]="columnNum"
      [isCarousel]="isCarousel"
      [carouselMaxRow]="carouselMaxRow"
      (onClick)="onClick($event)"
    ></Grid>
    <Grid [activeStyle]="false" [data]="dataList" (onClick)="click($event)"></Grid>
  `
})
export class TestGridComponent {
  data = Array.from(new Array(9)).map((val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`
  }));
  square = true;
  hasLine = true;
  columnNum = 3;
  carouselMaxRow = 1;
  isCarousel = false;

  dataList = Array.from(new Array(9)).map((_val, i) => ({
    icon: `<img src="/assets/img/logo.svg" style="width:36px"/>`,
    text: `name${i}`
  }));

  onClick(event) {
    console.log(event);
  }
}

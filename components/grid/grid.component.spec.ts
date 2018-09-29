import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, FlexModule, IconModule, GridModule } from '../..';

describe('GridComponent', () => {
  let component: TestGridComponent;
  let fixture: ComponentFixture<TestGridComponent>;
  let gridEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestGridComponent],
      imports: [BrowserAnimationsModule, CarouselModule, FlexModule, IconModule, GridModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGridComponent);
    component = fixture.componentInstance;
    gridEle = fixture.debugElement.query(By.css('grid'));
    fixture.detectChanges();
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
    expect(gridEle.nativeElement.classList).not.toContain(
      'am-grid-square',
      'square is false'
    );
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
    expect(gridEle.nativeElement.classList).not.toContain(
      'am-grid-carousel',
      'carousel is false'
    );
  });

  it('OnClick work', () => {
    component.data = Array.from(new Array(9)).map((val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`
    }));
    fixture.detectChanges();
    component.OnClick = jasmine.createSpy('OnClick is callback');
    gridEle.nativeElement.querySelector('.am-grid-item-content').click();
    fixture.detectChanges();
    expect(component.OnClick).toHaveBeenCalledTimes(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-grid',
  template: `
    <Grid [data]="data"
          [square]="square"
          [hasLine]="hasLine"
          [columnNum]="columnNum"
          [isCarousel]="isCarousel"
          (OnClick)="OnClick($event)"
    ></Grid>
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
  isCarousel = false;

  OnClick(event) {
    console.log(event);
  }
}

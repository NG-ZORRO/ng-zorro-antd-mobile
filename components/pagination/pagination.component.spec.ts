import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaginationModule } from './pagination.module';
import { IconModule } from '../icon/icon.module';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { dispatchTouchEvent } from '../core/testing';

describe('pagination', () => {
  let component;
  let fixture: ComponentFixture<TestPaginationComponent>;
  let paginationEle;
  let prevButton;
  let nextButton;
  let wrapper;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestPaginationComponent],
      imports: [PaginationModule, IconModule, LocaleProviderModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaginationComponent);
    component = fixture.componentInstance;
    paginationEle = fixture.debugElement.query(By.css('pagination'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mode work', () => {
    expect(paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn')).toBeTruthy('mode is button');

    component.mode = 'number';
    fixture.detectChanges();
    wrapper = paginationEle.nativeElement.querySelector('.am-pagination-wrap');
    expect(wrapper.children.length).toBe(2, 'mode is number');

    component.mode = 'pointer';
    component.total = 5;
    component.current = 2;
    fixture.detectChanges();
    wrapper = paginationEle.nativeElement.querySelector('.am-pagination-wrap');
    expect(wrapper.children.length).toBe(component.total, 'point length = total');
    expect(wrapper.children[component.current - 1].classList).toContain('am-pagination-wrap-dot-active');
  });
  it('should current work', () => {
    component.mode = 'button';
    component.current = 2;
    component.total = 3;
    nextButton = paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn-next').firstElementChild;
    fixture.detectChanges();
    nextButton.click();
    expect(component.current).toBe(3, 'current = total');
  });

  it('should total work', () => {
    component.mode = 'button';
    component.current = 3;
    component.total = 3;
    fixture.detectChanges();
    nextButton = paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn-next').firstElementChild;
    nextButton.click();
    expect(component.current).toBe(3, 'current = total');
  });

  it('should simple work', () => {
    component.mode = 'button';
    expect(paginationEle.nativeElement.querySelector('.am-pagination-wrap')).toBeTruthy();
    component.simple = true;
    fixture.detectChanges();
    expect(paginationEle.nativeElement.querySelector('.am-pagination-wrap')).toBeFalsy();
  });

  it('should disabled work', () => {
    component.disabled = true;
    component.current = 3;
    component.total = 6;
    fixture.detectChanges();
    expect(paginationEle.nativeElement.querySelector('.am-button-disabled')).toBeTruthy();
  });

  it('should local work', () => {
    nextButton = paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn-next').firstElementChild;
    prevButton = paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn-prev').firstElementChild;
    expect(prevButton.lastElementChild.innerText.trim()).toBe(component.locale.prevText);
    expect(nextButton.lastElementChild.innerText.trim()).toBe(component.locale.nextText);
  });

  it('should onChange work', () => {
    component.mode = 'button';
    component.current = 2;
    component.total = 3;
    fixture.detectChanges();
    nextButton = paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn-next').firstElementChild;
    prevButton = paginationEle.nativeElement.querySelector('.am-pagination-wrap-btn-prev').firstElementChild;
    nextButton.click();
    fixture.detectChanges();
    expect(component.current).toBe(3, 'current = 3');
    prevButton.click();
    fixture.detectChanges();
    expect(component.current).toBe(2, 'current = 2');
  });
});

@Component({
  selector: 'test-pagination',
  template: `
    <Pagination
      [mode]="mode"
      [current]="current"
      [total]="total"
      [simple]="simple"
      [disabled]="disabled"
      [locale]="locale"
      (onChange)="onChange($event)"
    ></Pagination>
    <Pagination
      [mode]="mode"
      [current]="current"
      [total]="total"
      [simple]="simple"
      [disabled]="disabled"
      [locale]="locale"
      (onChange)="onChange($event)"
    ></Pagination>
    <Pagination
      [mode]="mode"
      [current]="current"
      [total]="total"
      [simple]="simple"
      [disabled]="disabled"
      [locale]="{ prevText: localeLeft, nextText: localeRight }"
    ></Pagination>

    <ng-template #localeLeft>
      <span class="arrow-align"><Icon type="left"></Icon>上一步</span>
    </ng-template>
    <ng-template #localeRight>
      <span class="arrow-align">下一步<Icon type="right"></Icon></span>
    </ng-template>
  `
})
export class TestPaginationComponent {
  mode = 'button';
  current = 1;
  total = 0;
  simple = false;
  disabled = false;
  locale = {
    prevText: '上一页',
    nextText: '下一页'
  };

  constructor() {}

  onChange(value) {
    console.log(`current: ${value}`);
    this.current = value;
  }
}

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ListModule } from './list.module';
import { dispatchTouchEvent } from '../core/testing';

describe('list', () => {
  let component;
  let fixture: ComponentFixture<TestListComponent>;
  let listEle;
  let listItemEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestListComponent],
      imports: [ListModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListComponent);
    component = fixture.componentInstance;
    listEle = fixture.debugElement.query(By.css('List'));
    listItemEle = fixture.debugElement.query(By.css('ListItem')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderHeader work', () => {
    const headerEle = listEle.nativeElement.firstElementChild;
    expect(headerEle.classList).toContain('am-list-header');
    expect(headerEle.innerText).toEqual('Header');
  });

  it('renderFooter work', () => {
    const footerEle = listEle.nativeElement.lastElementChild;
    expect(footerEle.classList).toContain('am-list-footer');
    expect(footerEle.innerText).toEqual('Footer');
  });

  it('thumb work', () => {
    expect(listItemEle.querySelector('.am-list-thumb').firstElementChild.src).toEqual(component.thumb);
  });

  it('extra work', () => {
    expect(listItemEle.querySelector('.am-list-extra').innerText).toEqual(component.extra);
  });

  it('arrow work', () => {
    expect(listItemEle.querySelector('.am-list-arrow').classList).toContain('am-list-arrow-horizontal');
    component.arrow = 'up';
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-arrow').classList).toContain('am-list-arrow-vertical-up');
    component.arrow = 'down';
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-arrow').classList).toContain('am-list-arrow-vertical');
    expect(listItemEle.querySelector('.am-list-arrow').classList).not.toContain('am-list-arrow-vertical-up');
    component.arrow = 'empty';
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-arrow')).toBeTruthy();
  });

  it('align work', () => {
    expect(listItemEle.classList).toContain('am-list-item-middle');
    component.align = 'top';
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-top');
    component.align = 'bottom';
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-bottom');
  });

  it('onclick work', () => {
    component.onClick = jasmine.createSpy('onClick is callback');
    listItemEle.firstElementChild.click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(1);
  });

  it('multipleLine work', () => {
    expect(listItemEle.querySelector('.am-list-line').classList).not.toContain('am-list-line-multiple');
    component.multipleLine = true;
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-line').classList).toContain('am-list-line-multiple');
    component.multipleLine = '';
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-line').classList).toContain('am-list-line-multiple');
  });

  it('wrap work', () => {
    expect(listItemEle.querySelector('.am-list-line').classList).not.toContain('am-list-line-wrap');
    component.wrap = true;
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-line').classList).toContain('am-list-line-wrap');
    component.wrap = '';
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-line').classList).toContain('am-list-line-wrap');
  });

  it('error work', () => {
    expect(listItemEle.classList).not.toContain('am-list-item-error');
    component.error = true;
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-error');
    component.error = '';
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-error');
  });

  it('disabled work', () => {
    expect(listItemEle.classList).not.toContain('am-list-item-disabled');
    component.disabled = true;
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-disabled');
    component.disabled = 'disabled';
    fixture.detectChanges();
    expect(listItemEle.classList).not.toContain('am-list-item-disabled');
    component.disabled = 'true';
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-disabled');
  });

  it('active feedback not work when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    component.onClick = jasmine.createSpy('onClick is callback');
    listItemEle.firstElementChild.click();
    fixture.detectChanges();
    expect(listItemEle.classList).not.toContain('am-list-item-active');
  });

  it('platform work', fakeAsync(() => {
    listItemEle.firstElementChild.click();
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-ripple').classList).not.toContain('am-list-ripple-animate');
    component.platform = 'android';
    fixture.detectChanges();
    //两次点击覆盖debounceTimeout测试范围
    listItemEle.firstElementChild.click();
    listItemEle.firstElementChild.click();
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-ripple').classList).toContain('am-list-ripple-animate');
    tick(1100);
    fixture.detectChanges();
    expect(listItemEle.querySelector('.am-list-ripple').classList).not.toContain('am-list-ripple-animate');
  }));

  it('should touch start', () => {
    const dragHandler = listItemEle;
    dispatchTouchEvent(dragHandler, 'touchstart');
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-active');
  });

  it('should touch move', () => {
    const dragHandler = listItemEle;
    dispatchTouchEvent(dragHandler, 'touchstart');
    dispatchTouchEvent(dragHandler, 'touchmove', 20);
    fixture.detectChanges();
    expect(listItemEle.classList).not.toContain('am-list-item-active');
  });

  it('should touch end', () => {
    const dragHandler = listItemEle;
    dispatchTouchEvent(dragHandler, 'touchstart');
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(listItemEle.classList).not.toContain('am-list-item-active');
  });

  it('should mouse up', () => {
    const dragHandler = listItemEle;
    dispatchTouchEvent(dragHandler, 'mousedown');
    fixture.detectChanges();
    expect(listItemEle.classList).toContain('am-list-item-active');
  });

  it('should mouse down', () => {
    const dragHandler = listItemEle;
    dispatchTouchEvent(dragHandler, 'mousedown');
    dispatchTouchEvent(dragHandler, 'mouseup');
    fixture.detectChanges();
    expect(listItemEle.classList).not.toContain('am-list-item-active');
  });
});

@Component({
  selector: 'test-list',
  template: `
    <List className="my-list" [renderHeader]="renderHeader" [renderFooter]="renderFooter">
      <ListItem
        [extra]="extra"
        [wrap]="wrap"
        [thumb]="thumb"
        [arrow]="arrow"
        [align]="align"
        [error]="error"
        [disabled]="disabled"
        [platform]="platform"
        [multipleLine]="multipleLine"
        (onClick)="onClick()"
      >
        Title
      </ListItem>
      <ListItem
        [extra]="extra"
        [wrap]="wrap"
        [thumb]="thumb"
        [arrow]="arrow"
        [align]="align"
        [error]="error"
        [disabled]="disabled"
        [platform]="platform"
        [multipleLine]="multipleLine"
      >
        Title
      </ListItem>
      <Brief></Brief>
    </List>
  `
})
export class TestListComponent {
  thumb = 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png';
  extra = 'extra content';
  arrow = 'horizontal';
  align = 'middle';
  error = false;
  multipleLine = false;
  wrap = false;
  disabled = false;
  activeStyle = '';
  platform = 'cross';

  renderHeader() {
    return 'Header';
  }

  renderFooter() {
    return 'Footer';
  }

  onClick() {
    console.log('item click');
  }
}

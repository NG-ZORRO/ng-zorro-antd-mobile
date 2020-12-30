import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SwipeActionModule } from './swipe-action.module';
import { SwipeActionComponent } from './swipe-action.component';
import { dispatchTouchEvent } from '../core/testing';

describe('swipeAction', () => {
  let component;
  let fixture: ComponentFixture<TestSwipeActionComponent>;
  let swipeActionEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestSwipeActionComponent],
      imports: [SwipeActionModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSwipeActionComponent);
    component = fixture.componentInstance;
    swipeActionEle = fixture.debugElement.query(By.css('SwipeAction'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('disabled work', () => {
    expect(swipeActionEle.nativeElement.firstElementChild.classList).toContain('am-swipe');
    component.disabled = true;
    fixture.detectChanges();
    expect(swipeActionEle.nativeElement.firstElementChild.classList).toContain('am-swipe-content');
  });

  it('left work', () => {
    expect(swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left')).toBeTruthy();
    expect(swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left').children.length).toBe(
      component.left.length
    );
    expect(swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left').children[0].innerText.trim()).toEqual(
      component.left[0].text
    );
    expect(swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left').children[0].style).toContain('color');
  });

  it('right work', () => {
    expect(swipeActionEle.nativeElement.querySelector('.am-swipe-actions-right')).toBeTruthy();
    expect(swipeActionEle.nativeElement.querySelector('.am-swipe-actions-right').children.length).toBe(
      component.left.length
    );
  });

  it('onOpen work when show left and deltaX > offsetWidth / 2', () => {
    component.onOpen = jasmine.createSpy('onOpen is callback');
    const leftBtns = swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left');
    component.swipeToOpenBtn(100, leftBtns.offsetWidth / 2 + 100);
    dispatchTouchEvent(swipeActionEle.nativeElement, 'touchmove', 20);
    fixture.detectChanges();

    expect(leftBtns.style.visibility).toEqual('visible');
    expect(component.onOpen).toHaveBeenCalledTimes(1);
  });

  it('onOpen not work when show left and deltaX < offsetWidth / 2', () => {
    component.onOpen = jasmine.createSpy('onOpen is callback');
    const leftBtns = swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left');
    component.swipeToOpenBtn(100, leftBtns.offsetWidth / 2 - 100);
    fixture.detectChanges();

    expect(component.onOpen).toHaveBeenCalledTimes(0);
  });

  it('onOpen not work when no left button', () => {
    component.left = [];
    fixture.detectChanges();
    component.onOpen = jasmine.createSpy('onOpen is callback');
    component.swipeToOpenBtn(100, 500);
    fixture.detectChanges();
    expect(component.onOpen).toHaveBeenCalledTimes(0);
  });

  it('onOpen not work when no right button', () => {
    component.right = [];
    fixture.detectChanges();
    component.onOpen = jasmine.createSpy('onOpen is callback');
    component.swipeToOpenBtn(-100, -500);
    fixture.detectChanges();
    expect(component.onOpen).toHaveBeenCalledTimes(0);
  });

  it('onOpen work when show right', () => {
    component.onOpen = jasmine.createSpy('onOpen is callback');
    const rightBtns = swipeActionEle.nativeElement.querySelector('.am-swipe-actions-right');
    component.swipeToOpenBtn(-100, -rightBtns.offsetWidth / 2 - 100);
    fixture.detectChanges();

    expect(rightBtns.style.visibility).toEqual('visible');
    expect(component.onOpen).toHaveBeenCalledTimes(1);
  });

  it('autoClose work', () => {
    component.onClose = jasmine.createSpy('onClose is callback');
    //先模拟打开左侧按钮
    const leftBtns = swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left');
    component.swipeToOpenBtn(leftBtns.offsetWidth + 50, leftBtns.offsetWidth + 100);

    fixture.detectChanges();
    leftBtns.firstElementChild.click();
    fixture.detectChanges();
    expect(component.onClose).toHaveBeenCalledTimes(0);

    component.autoClose = true;
    fixture.detectChanges();
    leftBtns.lastElementChild.click();
    fixture.detectChanges();
    expect(component.onClose).toHaveBeenCalledTimes(1);
  });

  it('onClose work', () => {
    const rightBtns = swipeActionEle.nativeElement.querySelector('.am-swipe-actions-right');
    component.swipeToOpenBtn(-rightBtns.offsetWidth - 50, -rightBtns.offsetWidth - 100);
    fixture.detectChanges();

    component.onClose = jasmine.createSpy('onClose is callback');
    dispatchTouchEvent(document.body, 'touchstart');
    fixture.detectChanges();
    expect(component.onClose).toHaveBeenCalledTimes(1);
  });

  it('onClose not trigger when no swipe', () => {
    component.onClose = jasmine.createSpy('onClose is callback');
    dispatchTouchEvent(document.body, 'touchstart');
    fixture.detectChanges();
    expect(component.onClose).toHaveBeenCalledTimes(0);
  });

  it('btnLength correct when btnRef is null', () => {
    component.swipeAction.leftBtnRef = null;
    component.swipeAction.rightBtnRef = null;
    component.swipeAction.ngAfterViewInit();
    expect(component.swipeAction._btnsLeftWidth).toEqual(0);
    expect(component.swipeAction._btnsRightWidth).toEqual(0);
  });

  it('onCloseSwipe not trigger when touch in range am-swipe-action', () => {
    component.autoClose = false;
    //先模拟打开左侧按钮
    const leftBtns = swipeActionEle.nativeElement.querySelector('.am-swipe-actions-left');
    component.swipeToOpenBtn(leftBtns.offsetWidth + 50, leftBtns.offsetWidth + 100);

    fixture.detectChanges();
    dispatchTouchEvent(swipeActionEle.nativeElement.querySelector('.am-swipe-actions'), 'touchstart');
    component.onClose = jasmine.createSpy('onClose is callback');
    fixture.detectChanges();
    expect(component.onClose).toHaveBeenCalledTimes(0);
  });
});

@Component({
  selector: 'test-swipe-action',
  template: `
    <SwipeAction
      style="background-color: gray"
      [left]="left"
      [right]="right"
      [disabled]="disabled"
      [autoClose]="autoClose"
      (onOpen)="onOpen()"
      (onClose)="onClose()"
    >
      Have left and right buttons
    </SwipeAction>
  `
})
export class TestSwipeActionComponent {
  autoClose = false;
  disabled = false;
  left = [
    {
      text: 'Reply',
      onPress: () => console.log('reply'),
      style: { backgroundColor: '#108ee9', color: 'white' }
    },
    {
      text: 'Cancel',
      style: { backgroundColor: '#ddd', color: 'white' }
    }
  ];
  right = [
    {
      text: 'Cancel',
      onPress: () => console.log('cancel'),
      style: { backgroundColor: '#ddd', color: 'white' }
    },
    {
      text: 'Delete',
      onPress: () => console.log('delete'),
      style: { backgroundColor: '#F4333C', color: 'white' }
    }
  ];

  @ViewChild(SwipeActionComponent)
  swipeAction: SwipeActionComponent;

  constructor() {}

  onOpen() {
    console.log('open');
  }

  onClose() {
    console.log('close');
  }

  swipeToOpenBtn(middelX: number, endX: number) {
    this.swipeAction.onTouchStart({
      changedTouches: [
        {
          clientX: 0
        }
      ]
    });

    this.swipeAction.onTouchMove({
      changedTouches: [
        {
          clientX: middelX
        }
      ],
      preventDefault: function() {}
    });

    this.swipeAction.onTouchEnd({
      changedTouches: [
        {
          clientX: endX
        }
      ]
    });
  }
}

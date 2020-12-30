import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PullToRefreshModule } from './pull-to-refresh.module';
import { IconModule } from '../icon/icon.module';
import { dispatchTouchEvent } from '../core/testing';
import { from } from 'rxjs';

describe('PullToRefreshComponent', () => {
  let component: TestPullToRefreshComponent;
  let fixture: ComponentFixture<TestPullToRefreshComponent>;
  let pullToRefreshEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestPullToRefreshComponent],
      imports: [PullToRefreshModule, IconModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPullToRefreshComponent);
    component = fixture.componentInstance;
    pullToRefreshEle = fixture.debugElement.query(By.css('pulltorefresh'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direction work', () => {
    expect(pullToRefreshEle.nativeElement.classList).toContain('am-pull-to-refresh-down', 'direction is down');
    component.state.down = false;
    fixture.detectChanges();
    expect(pullToRefreshEle.nativeElement.classList).toContain('am-pull-to-refresh-up', 'direction is up');
  });

  it('should touch direction down work', () => {
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 300);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 500);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 500);
    fixture.detectChanges();
  });

  it('should cancel work', () => {
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 300);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 310);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 310);
    fixture.detectChanges();
  });

  it('should cancel work', () => {
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 0);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, -10);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, -10);
    fixture.detectChanges();
  });

  it('should touchcancel work', () => {
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 100);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 90);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 90);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchcancel', 0, 0);
  });

  it('should direction up work', () => {
    component.state.down = false;
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 300);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 500);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 500);
    fixture.detectChanges();
  });

  it('should scroll work', () => {
    component.state.down = false;
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 500);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 300);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 300);
    fixture.detectChanges();
  });

  it('should scroll work', () => {
    component.state.down = true;
    component.state.scrollRefresh = true;
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 300);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 1000);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 1000);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'scroll', 0, 1000);
    fixture.detectChanges();
    pullToRefreshEle.nativeElement.scroll();
    fixture.detectChanges();
  });

  it('should scroll false work', () => {
    component.state.down = false;
    component.state.scrollRefresh = false;
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchstart', 0, 300);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchmove', 0, 500);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'touchend', 0, 500);
    fixture.detectChanges();
    dispatchTouchEvent(pullToRefreshEle.nativeElement, 'scroll', 0, 500);
    fixture.detectChanges();
    pullToRefreshEle.nativeElement.scroll();
    fixture.detectChanges();
  });
});

@Component({
  selector: 'demo-notice-bar-basic',
  template: `
    <PullToRefresh
      [ngStyle]="dtPullToRefreshStyle"
      [endReachedRefresh]="state.scrollRefresh"
      [(ngModel)]="state.refreshState"
      [direction]="state.down ? 'down' : 'up'"
      [refreshing]="true"
      [headerIndicator]="state.down ? {} : { deactivate: '下拉可以刷新' }"
      [footerIndicator]="state.down ? {} : { deactivate: '上拉可以刷新' }"
      (onRefresh)="pullToRefresh($event)"
    >
      <div *ngFor="let i of this.state.data" style="text-align: center; padding: 20px">{{ i }}</div>
    </PullToRefresh>

    <ng-template #loading>
      <Icon type="loading"></Icon>
    </ng-template>
  `
})
export class TestPullToRefreshComponent {
  state = {
    refreshState: {
      currSt: 'deactivate',
      drag: false
    },
    scrollRefresh: false,
    down: true,
    height: window.innerHeight - ((63 + 47) * window.devicePixelRatio) / 2,
    data: []
  };
  dtPullToRefreshStyle = { height: this.state.height + 'px' };
}

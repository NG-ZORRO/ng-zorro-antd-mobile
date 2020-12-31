import { Component, OnDestroy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivityIndicatorModule } from './activity-indicator.module';

describe('activity-indicator', () => {
  let component;
  let fixture;
  let activityEle;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestActivityIndicatorComponent],
      imports: [ActivityIndicatorModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestActivityIndicatorComponent);
    component = fixture.componentInstance;
    activityEle = fixture.debugElement.query(By.css('activityindicator'));
    fixture.detectChanges();
  });

  it('should  animating work', () => {
    expect(activityEle.nativeElement.children.length).toBeGreaterThan(0, 'animating is true');
    component.animating = false;
    fixture.detectChanges();
    expect(activityEle.nativeElement.children.length).toBe(0, 'animating is false');
  });

  it('should  text work', () => {
    expect(activityEle.nativeElement.querySelector('.am-activity-indicator-tip').innerText).toContain(
      'Loading...',
      'loading...'
    );
    component.text = 'test';
    fixture.detectChanges();
    expect(activityEle.nativeElement.querySelector('.am-activity-indicator-tip').innerText).toContain('test', 'test');
  });

  it('should  size work', () => {
    expect(activityEle.nativeElement.classList).toContain('am-activity-indicator-lg', 'size is large');
    component.size = 'small';
    fixture.detectChanges();
    expect(activityEle.nativeElement.classList).toContain('am-activity-indicator-sm', 'size is small');
  });

  it('should  toast work', () => {
    expect(activityEle.nativeElement.querySelector('.am-activity-indicator-toast')).toBeNull('toast is false');
    component.toast = true;
    fixture.detectChanges();
    expect(activityEle.nativeElement.classList).toContain('am-activity-indicator-toast', 'toast is true');
  });
});

@Component({
  selector: 'test-activity-indicator',
  template: `
    <ActivityIndicator [size]="size" [text]="text" [toast]="toast" [animating]="animating"></ActivityIndicator>
  `
})
export class TestActivityIndicatorComponent implements OnDestroy {
  animating = true;
  closeTimer;
  text = 'Loading...';
  size = 'large';
  toast = false;

  constructor() {}

  ngOnDestroy() {
    clearTimeout(this.closeTimer);
  }
}

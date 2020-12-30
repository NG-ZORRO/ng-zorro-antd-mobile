import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProgressModule } from './progress.module';

describe('ProgressComponent', () => {
  let component: TestProgressComponent;
  let fixture: ComponentFixture<TestProgressComponent>;
  let progressEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestProgressComponent],
      imports: [ProgressModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProgressComponent);
    component = fixture.componentInstance;
    progressEle = fixture.debugElement.query(By.css('Progress'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('percent work', () => {
    expect(progressEle.nativeElement.querySelector('.am-progress-bar').style.width).toContain(component.percent);
  });

  it('unfilled work', () => {
    expect(progressEle.nativeElement.classList).not.toContain('am-progress-hide-outer');
    component.unfilled = false;
    fixture.detectChanges();
    expect(progressEle.nativeElement.classList).toContain('am-progress-hide-outer');
  });

  it('position work', () => {
    expect(progressEle.nativeElement.classList).not.toContain('am-progress-fixed-outer');
    component.position = 'fixed';
    fixture.detectChanges();
    expect(progressEle.nativeElement.classList).toContain('am-progress-fixed-outer');
  });

  it('exceedance work', () => {
    expect(progressEle.nativeElement.classList).not.toContain('am-progress-exceedance');
    component.percent = 130;
    fixture.detectChanges();
    expect(progressEle.nativeElement.classList).toContain('am-progress-exceedance');
  });
});

@Component({
  selector: 'test-progress',
  template: `
    <Progress [percent]="percent" [position]="position" [unfilled]="unfilled"></Progress>
  `
})
export class TestProgressComponent {
  percent = 30;
  position = 'normal';
  unfilled = true;

  constructor() {}
}

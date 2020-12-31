import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WingBlankModule } from './wing-blank.module';

describe('WingBlank', () => {
  let component: TestWingBlankComponent;
  let fixture: ComponentFixture<TestWingBlankComponent>;
  let WingBlankEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WingBlankModule],
      declarations: [TestWingBlankComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWingBlankComponent);
    component = fixture.componentInstance;
    WingBlankEle = fixture.debugElement.query(By.css('WingBlank'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // !!obj
  });

  it('should size work', () => {
    expect(WingBlankEle.nativeElement.classList.contains('am-wingblank-md')).toBe(false);
    component.size = 'md';
    fixture.detectChanges();
    expect(WingBlankEle.nativeElement.classList.contains('am-wingblank-md')).toBe(true);
  });
});

@Component({
  selector: 'test-wing-blank-child',
  template: `
    <div>
      <WingBlank [size]="size"></WingBlank>
    </div>
  `
})
export class TestWingBlankComponent {
  size = 'xs'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  constructor() {}
}

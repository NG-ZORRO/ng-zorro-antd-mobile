import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DotIndicatorComponent } from './dotindicator.component';

describe('DotindicatorComponent', () => {
  let component: DotIndicatorComponent;
  let fixture: ComponentFixture<DotIndicatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DotIndicatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

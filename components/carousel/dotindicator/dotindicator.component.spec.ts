import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotIndicatorComponent } from './dotindicator.component';

describe('DotindicatorComponent', () => {
  let component: DotIndicatorComponent;
  let fixture: ComponentFixture<DotIndicatorComponent>;

  beforeEach(async(() => {
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

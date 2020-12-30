import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopoverItemComponent } from './popover-item.component';

describe('PopoverItemComponent', () => {
  let component: PopoverItemComponent;
  let fixture: ComponentFixture<PopoverItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

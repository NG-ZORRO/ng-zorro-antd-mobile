import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverItemComponent } from './popover-item.component';

describe('PopoverItemComponent', () => {
  let component: PopoverItemComponent;
  let fixture: ComponentFixture<PopoverItemComponent>;

  beforeEach(async(() => {
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

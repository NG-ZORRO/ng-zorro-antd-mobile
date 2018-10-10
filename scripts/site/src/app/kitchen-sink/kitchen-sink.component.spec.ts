import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSinkComponent } from './kitchen-sink.component';

describe('KitchenSinkComponent', () => {
  let component: KitchenSinkComponent;
  let fixture: ComponentFixture<KitchenSinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenSinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

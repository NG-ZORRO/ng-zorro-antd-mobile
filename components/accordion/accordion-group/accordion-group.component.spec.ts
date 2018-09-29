import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionService } from '../accordion.service';
import { AccordionGroupComponent } from './accordion-group.component';

describe('AccordionGroupComponent', () => {
  let component: AccordionGroupComponent;
  let fixture: ComponentFixture<AccordionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupComponent],
      imports: [BrowserAnimationsModule],
      providers: [AccordionService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

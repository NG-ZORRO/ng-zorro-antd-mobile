import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionService } from '../accordion.service';
import { AccordionGroupComponent } from './accordion-group.component';
import { NgZorroAntdMobilePipesModule } from '../../pipes/ng-zorro-antd-mobile.pipes.module';

describe('AccordionGroupComponent', () => {
  let component: AccordionGroupComponent;
  let fixture: ComponentFixture<AccordionGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupComponent],
      imports: [BrowserAnimationsModule, NgZorroAntdMobilePipesModule],
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

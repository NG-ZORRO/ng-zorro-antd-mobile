import { Component, ViewChild, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, tick, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from './accordion.module';
import { AccordionComponent } from './accordion.component';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { AccordionService } from './accordion.service';

describe('AccordionComponent', () => {
  let component: TestAccordionComponent;
  let fixture: ComponentFixture<TestAccordionComponent>;
  let accordionEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestAccordionComponent],
      imports: [BrowserAnimationsModule, AccordionModule, WhiteSpaceModule],
      providers: [AccordionService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionComponent);
    component = fixture.componentInstance;
    accordionEle = fixture.debugElement.query(By.css('accordion'));
    fixture.detectChanges();
  });

  it('should click work', () => {
    accordionEle.nativeElement.click();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accordionpanel open close work', () => {
    fixture.detectChanges();
    component.accordions = [{ title: 'Title 1', child: ['content 1', 'content 1'] }];
    component.activeKey = undefined;
    component.expandAll = true;
    component.accordion = false;
    fixture.detectChanges();
    accordionEle.nativeElement.querySelector('.am-accordion-header').click();
    fixture.detectChanges();
    expect(accordionEle.nativeElement.querySelector('.am-accordion-content').classList).toContain('am-accordion-content-active');
    accordionEle.nativeElement.querySelector('.am-accordion-header').click();
    fixture.detectChanges();
    expect(accordionEle.nativeElement.querySelector('.am-accordion-content-active')).toBeNull();
  });

  it('should expandall, accordion work', () => {
    fixture.detectChanges();
    component.accordions = [{ title: 'Title 1', child: ['content 1', 'content 1', 'content 1'] }];
    component.activeKey = [0];
    component.expandAll = false;
    component.accordion = false;
    fixture.detectChanges();
  });

  it('should accordion click work', () => {
    fixture.detectChanges();
    component.accordions = [{ title: 'Title 1', child: ['content 1', 'content 1', 'content 1'] }];
    component.expandAll = true;
    fixture.detectChanges();
    let accordionPanelEle = accordionEle.nativeElement.querySelector('accordionpanel');
    accordionEle.nativeElement.click();
    fixture.detectChanges();
  });

  it('should closeAll work', () => {
    fixture.detectChanges();
    expect(component.accordionComponent.closeAll());
  });

  it('should toArray work', () => {
    fixture.detectChanges();
    expect(component.accordionComponent.toArray('KEY')).toEqual(['KEY'], 'toArray is work');
  });

  it('should header click', () => {
    accordionEle.nativeElement.querySelector('.am-accordion-header').click();
  });
});

@Component({
  selector: 'test-accordion',
  template: `
    <Accordion
      [expandAll]="expandAll"
      [defaultActiveKey]="defaultActiveKey"
      [activeKey]="activeKey"
      [accordion]="accordion"
      (onChange)="onChange($event)"
    >
      <AccordionPanel
        *ngFor="let item of accordions; let i = index"
        [key]="i"
        [header]="item.title"
        [disabled]="item.inactive"
      >
        <div *ngFor="let content of item.child">
          {{ content }}
        </div>
      </AccordionPanel>
    </Accordion>
  `
})
export class TestAccordionComponent implements OnInit {
  defaultActiveKey = '0';
  accordions: Array<any> = [
    { title: 'Title 1', child: ['content 1', 'content 1', 'content 1'], inactive: false },
    { title: 'Title 2', child: ['content 2', 'content 2', 'content 2'] }
  ];
  expandAll = false;
  accordion = true;
  activeKey = undefined;

  @ViewChild(AccordionComponent) accordionComponent: AccordionComponent;

  onChange(event) {
    console.log(event);
  }

  ngOnInit() {
    setTimeout(() => {
      this.accordions = [
        { title: 'Title 1', child: ['content 1', 'content 1', 'content 1'], inactive: false },
        { title: 'Title 2', child: ['content 2', 'content 2', 'content 2'] }
      ];
    }, 0);
  }
}

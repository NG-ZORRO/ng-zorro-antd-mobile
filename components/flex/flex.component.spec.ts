import { Component, OnDestroy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FlexModule } from './flex.module';

describe('Flex', () => {
  let component;
  let fixture;
  let activityEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestFlexComponent],
      imports: [FlexModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFlexComponent);
    component = fixture.componentInstance;
    activityEle = fixture.debugElement.queryAll(By.css('flex'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direction work', () => {
    fixture.detectChanges();
    const flex = activityEle[0];
    expect(flex.nativeElement.classList.contains('am-flexbox-dir-row')).toBe(true);
    component.direction = 'column';
    fixture.detectChanges();
    expect(flex.nativeElement.classList.contains('am-flexbox-dir-column')).toBe(true);
  });

  it('should wrap work', () => {
    fixture.detectChanges();
    const flex = activityEle[0];
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-wrap')).toBe(true);
    component.wrap = 'nowrap';
    fixture.detectChanges();
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-nowrap')).toBe(true);
  });

  it('should justify work', () => {
    fixture.detectChanges();
    const flex = activityEle[0];
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-justify-start')).toBe(true);
    component.justify = 'center';
    fixture.detectChanges();
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-justify-center')).toBe(true);
  });

  it('should align work', () => {
    fixture.detectChanges();
    const flex = activityEle[0];
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-align-start')).toBe(true);
    component.align = 'center';
    fixture.detectChanges();
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-align-center')).toBe(true);
  });

  it('should align work', () => {
    fixture.detectChanges();
    const flex = activityEle[0];
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-align-content-stretch')).toBe(true);
    component.alignContent = 'center';
    fixture.detectChanges();
    expect(activityEle[0].nativeElement.classList.contains('am-flexbox-align-content-center')).toBe(true);
  });
});

@Component({
  selector: 'test-flex',
  template: `
    <Flex [wrap]="wrap" [align]="align" [justify]="justify" [direction]="direction" [alignContent]="alignContent">
      <div class="placeholder inline">Block</div>
      <div class="placeholder inline">Block</div>
      <div class="placeholder inline">Block</div>
      <div class="placeholder inline">Block</div>
      <div class="placeholder inline">Block</div>
      <div class="placeholder inline">Block</div>
      <div class="placeholder inline">Block</div>
    </Flex>
  `
})
export class TestFlexComponent implements OnDestroy {
  direction: string = 'row';
  wrap: string = 'wrap';
  justify: string = 'start';
  align: string = 'start';
  alignContent: string = 'stretch';
  closeTimer;

  constructor() {}

  ngOnDestroy() {
    clearTimeout(this.closeTimer);
  }
}

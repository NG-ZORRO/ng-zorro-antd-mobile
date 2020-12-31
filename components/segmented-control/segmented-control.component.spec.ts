import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SegmentedControlModule } from './segmented-control.module';

describe('segmented-control', () => {
  let component;
  let fixture: ComponentFixture<TestSegmentedControlComponent>;
  let segmentedControlEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestSegmentedControlComponent],
      imports: [SegmentedControlModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSegmentedControlComponent);
    component = fixture.componentInstance;
    segmentedControlEle = fixture.debugElement.query(By.css('SegmentedControl'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('values work', () => {
    expect(segmentedControlEle.nativeElement.children.length).toBe(component.values.length);
    expect(segmentedControlEle.nativeElement.firstElementChild.innerText).toContain(component.values[0]);
    expect(segmentedControlEle.nativeElement.lastElementChild.innerText).toContain(component.values[1]);
  });

  it('tintColor work', () => {
    expect(segmentedControlEle.nativeElement.firstElementChild.style.borderColor).toBe('rgb(255, 0, 0)');
  });

  it('selectedIndex work', () => {
    expect(segmentedControlEle.nativeElement.children[component.selectedIndex].style.color).toBe('rgb(255, 255, 255)');
    expect(segmentedControlEle.nativeElement.children[component.selectedIndex].style.backgroundColor).toBe(
      'rgb(255, 0, 0)'
    );
  });

  it('disabled work', () => {
    expect(segmentedControlEle.nativeElement.classList).not.toContain('am-segment-disabled');
    component.disabled = true;
    fixture.detectChanges();
    expect(segmentedControlEle.nativeElement.classList).toContain('am-segment-disabled');
  });

  it('onChange work', () => {
    component.onChange = jasmine.createSpy('onChange callback');
    const firstSegment = segmentedControlEle.nativeElement.firstElementChild;
    // const secondSegment = segmentedControlEle.nativeElement.lastElementChild;
    component.disabled = true;
    fixture.detectChanges();
    firstSegment.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);

    component.disabled = false;
    fixture.detectChanges();
    firstSegment.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-segmented-control',
  template: `
    <SegmentedControl
      [values]="values"
      [disabled]="disabled"
      [tintColor]="tintColor"
      [selectedIndex]="selectedIndex"
      (onChange)="onChange($event)"
    ></SegmentedControl>
  `
})
export class TestSegmentedControlComponent {
  disabled = false;
  selectedIndex: number = 1;
  tintColor: string = '#ff0000';
  values: string[] = ['segment1', 'segment2'];

  constructor() {}

  onChange(event) {
    console.log('index: ', event.selectedIndex, 'value: ', event.value);
  }
}

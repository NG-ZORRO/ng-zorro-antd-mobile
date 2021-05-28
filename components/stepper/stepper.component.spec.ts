import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, waitForAsync, tick } from '@angular/core/testing';
import { StepperModule } from './stepper.module';

describe('StepperComponent', () => {
  let component: TestStepperComponent;
  let fixture: ComponentFixture<TestStepperComponent>;
  let stepperEle;
  let stepperEles;
  let upButton;
  let downButton;
  let inputEle;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestStepperComponent],
        imports: [StepperModule, FormsModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStepperComponent);
    component = fixture.componentInstance;
    stepperEle = fixture.debugElement.query(By.css('Stepper'));
    stepperEles = fixture.debugElement.queryAll(By.css('Stepper'));
    fixture.detectChanges();
    upButton = stepperEle.nativeElement.querySelector('.am-stepper-handler-up');
    downButton = stepperEle.nativeElement.querySelector('.am-stepper-handler-down');
    inputEle = stepperEle.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should max work', () => {
    component.max = 9;
    component.value = 9;
    fixture.detectChanges();
    upButton.click();
    expect(component.value).toBe(9, 'value == max');
    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-up').classList).toContain(
      'am-stepper-handler-up-disabled',
      'up-disabled'
    );
  });
  it('should min work', () => {
    component.min = 9;
    component.value = 9;
    fixture.detectChanges();
    downButton.click();
    expect(component.value).toBe(9, 'value == max');
    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-down').classList).toContain(
      'am-stepper-handler-down-disabled',
      'down-disabled'
    );
  });

  it('should upDisabled work', () => {
    component.max = 14;
    component.value = 9;
    component.step = 3;
    fixture.detectChanges();
    upButton.click();
    fixture.detectChanges();
    expect(component.value).toBe(12, 'value == max');
    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-up').classList).toContain(
      'am-stepper-handler-up-disabled',
      'up-disabled'
    );
  });
  it('should downDisabled work', () => {
    component.min = 5;
    component.value = 9;
    component.step = 3;
    fixture.detectChanges();
    downButton.click();
    fixture.detectChanges();
    expect(component.value).toBe(6, 'value == max');
    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-down').classList).toContain(
      'am-stepper-handler-down-disabled',
      'down-disabled'
    );
  });

  it('should disabled work', () => {
    expect(stepperEle.nativeElement.classList).not.toContain('am-stepper-disabled', 'not contain am-stepper-disabled');
    component.disabled = true;
    component.value = 5;
    fixture.detectChanges();

    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-down').classList).toContain(
      'am-stepper-handler-down-disabled',
      'down-disabled'
    );
    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-up').classList).toContain(
      'am-stepper-handler-up-disabled',
      'up-disabled'
    );

    downButton.click();
    expect(component.value).toBe(5, 'click down button');

    upButton.click();
    expect(component.value).toBe(5, 'click down button');

    expect(stepperEle.nativeElement.classList).toContain('am-stepper-disabled', 'contain am-stepper-disabled');

    component.disabled = false;
    component.value = 5;
    fixture.detectChanges();

    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-down').classList).not.toContain(
      'am-stepper-handler-down-disabled',
      'down-disabled'
    );
    expect(stepperEle.nativeElement.querySelector('.am-stepper-handler-up').classList).not.toContain(
      'am-stepper-handler-up-disabled',
      'up-disabled'
    );

    downButton.click();
    expect(component.value).toBe(4, 'click down button');

    upButton.click();
    expect(component.value).toBe(5, 'click down button');

    expect(stepperEle.nativeElement.classList).not.toContain('am-stepper-disabled', 'contain am-stepper-disabled');
  });
  it('should readOnly work', fakeAsync(() => {
    component.readOnly = true;
    fixture.detectChanges();
    expect(inputEle.getAttribute('readonly')).not.toBeNull('readonly is null');
  }));

  it('should defaultValue work', () => {
    component.defaultValue = 11;
    fixture.detectChanges();
    expect(component.defaultValue).toBe(11, 'value == defaultValue');
  });
  it('should step work', () => {
    component.value = 1e-13;
    component.step = 2;
    fixture.detectChanges();
    downButton.click();
    expect(component.value).toBe(-1.9999999999999, 'step is 2');
    component.step = 3;
    fixture.detectChanges();
    upButton.click();
    expect(component.value).toBe(1.0000000000001, 'step is 3');
  });
  it('should showNumber work', () => {
    expect(stepperEle.nativeElement.classList).toContain('showNumber', 'showNumber');
    component.showNumber = false;
    fixture.detectChanges();
    expect(stepperEle.nativeElement.classList).not.toContain('showNumber', 'showNumber is not show');
  });

  it('should only input numbers work', fakeAsync(() => {
    inputEle.value = 'ssssss';
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    expect(component.value).toBe(0, 'input ssssss');

    inputEle.value = '测试中文';
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    expect(component.value).toBe(0, 'input 测试中文');

    inputEle.value = 's1s.s2s.s3s';
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    expect(component.value).toBe(123, 'input s1s.s2s.s3s');

    inputEle.value = '-1-2-3';
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    expect(component.value).toBe(-123, 'input -1-2-3');
  }));

  it('should blur check work', fakeAsync(() => {
    component.max = 20;
    component.min = 10;
    fixture.detectChanges();

    inputEle.value = 34;
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    inputEle.dispatchEvent(new Event('blur'));
    expect(component.value).toBe(20, 'check max input');

    inputEle.value = 4;
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    inputEle.dispatchEvent(new Event('blur'));
    expect(component.value).toBe(10, 'check min input');

    inputEle.value = 15;
    inputEle.dispatchEvent(new UIEvent('input'));
    tick(0);
    inputEle.dispatchEvent(new Event('blur'));
    expect(component.value).toBe(15, 'check normal input');
  }));

  it('should onChange work', () => {
    component.value = 5;
    component.step = 2;
    fixture.detectChanges();
    downButton.click();
    expect(component.value).toBe(3, 'step is 2');

    component.change = jasmine.createSpy('change callback');
    downButton.click();
    expect(component.change).toHaveBeenCalledTimes(1);
  });

  it('should ngModel work', () => {
    component.modelValue = 4;
    fixture.detectChanges();

    const downEl = stepperEles[1].nativeElement.querySelector('.am-stepper-handler-down');
    component.modelChange = jasmine.createSpy('modelChange callback');
    downEl.click();
    expect(component.modelChange).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-stepper',
  template: `
    <Stepper
      [defaultValue]="defaultValue"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [showNumber]="showNumber"
      [disabled]="disabled"
      [readOnly]="readOnly"
      (onChange)="change($event)"
    >
    </Stepper>
    <Stepper
      [defaultValue]="defaultValue"
      [ngModel]="modelValue"
      [min]="min"
      [max]="max"
      [step]="step"
      [showNumber]="showNumber"
      [disabled]="disabled"
      [readOnly]="readOnly"
      (ngModelChange)="modelChange($event)"
    >
    </Stepper>
  `
})
export class TestStepperComponent {
  max = Infinity;
  min = -Infinity;
  value;
  modelValue;
  step = 1;
  defaultValue;
  disabled = false;
  readOnly = false;
  showNumber = true;

  constructor() {}

  change(event) {
    this.value = event;
  }

  modelChange(event) {
    this.modelValue = event;
  }
}

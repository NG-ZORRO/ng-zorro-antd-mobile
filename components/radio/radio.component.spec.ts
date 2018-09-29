import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Radio } from './radio.component';
import { RadioModule } from './radio.module';

describe('radio', () => {
  let component;
  let fixture: ComponentFixture<TestRadioComponent>;
  let radioEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestRadioComponent],
      imports: [RadioModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRadioComponent);
    component = fixture.componentInstance;
    radioEle = fixture.debugElement.query(By.directive(Radio));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name work', () => {
    expect(radioEle.nativeElement.querySelector('.am-radio-input').name).toEqual('radio');
  });

  it('checked work', () => {
    expect(radioEle.nativeElement.firstElementChild.classList).not.toContain('am-radio-checked');
    component.checked = true;
    fixture.detectChanges();
    expect(radioEle.nativeElement.firstElementChild.classList).toContain('am-radio-checked');
  });

  it('disabled work', () => {
    expect(radioEle.nativeElement.firstElementChild.classList).not.toContain('am-radio-disabled');
    component.disabled = true;
    fixture.detectChanges();
    expect(component.radio.disabled).toBe(true);
    expect(radioEle.nativeElement.firstElementChild.classList).toContain('am-radio-disabled');
  });

  it('onChange work', () => {
    component.onChange = jasmine.createSpy('onChange callback');
    component.disabled = true;
    fixture.detectChanges();
    radioEle.nativeElement.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);

    component.disabled = false;
    component.checked = false;
    fixture.detectChanges();
    radioEle.nativeElement.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });

  it('radioItem onChange work', () => {
    const radioItemEle = fixture.debugElement.query(By.css('RadioItem'));
    component.onChange = jasmine.createSpy('onChange callback');
    component.disabled = true;
    fixture.detectChanges();
    radioItemEle.nativeElement.querySelector('.am-radio-item').click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);

    component.disabled = false;
    component.checked = false;
    fixture.detectChanges();
    radioItemEle.nativeElement.querySelector('.am-radio-item').click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-radio',
  template: `
    <label Radio
           [name]="'radio'"
           [checked]="checked"
           [disabled]="disabled"
           [(ngModel)]="checked"
           (onChange)="onChange($event)"
    ></label>
    <RadioItem [checked]="checked"
               [disabled]="disabled"
               (onChange)="onChange($event)"
               (onClick)="onClick()"
    ></RadioItem>
 `
})
export class TestRadioComponent {
  checked = false;
  disabled = false;

  @ViewChild(Radio)
  radio: Radio;

  onChange(e) {
    console.log('onChange', e);
  }

  onClick() {
    console.log('onClick');
  }
}

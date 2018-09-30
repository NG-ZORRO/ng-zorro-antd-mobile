import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Checkbox } from './checkbox.component';
import { CheckboxModule } from './checkbox.module';

describe('checkbox', () => {
  let component;
  let fixture: ComponentFixture<TestCheckboxComponent>;
  let checkboxEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestCheckboxComponent],
      imports: [CheckboxModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckboxComponent);
    component = fixture.componentInstance;
    checkboxEle = fixture.debugElement.query(By.directive(Checkbox));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checked work', () => {
    expect(checkboxEle.nativeElement.firstElementChild.classList).not.toContain('am-checkbox-checked');
    component.checked = true;
    fixture.detectChanges();
    expect(checkboxEle.nativeElement.firstElementChild.classList).toContain('am-checkbox-checked');
  });

  it('disabled work', () => {
    expect(checkboxEle.nativeElement.firstElementChild.classList).not.toContain('am-checkbox-disabled');
    component.disabled = true;
    fixture.detectChanges();
    expect(component.checkbox.disabled).toBe(true);
    expect(checkboxEle.nativeElement.firstElementChild.classList).toContain('am-checkbox-disabled');
  });

  it('onChange work', () => {
    component.onChange = jasmine.createSpy('onChange callback');
    component.disabled = true;
    fixture.detectChanges();
    checkboxEle.nativeElement.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);

    component.disabled = false;
    component.checked = false;
    fixture.detectChanges();
    checkboxEle.nativeElement.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });

  it('checkbox item onChange work', () => {
    // const checkboxItem = fixture.debugElement.query(By.css('CheckboxItem'));
    // component.onChange = jasmine.createSpy('onChange callback');
    // component.disabled = false;
    // fixture.detectChanges();
    // checkboxItem.nativeElement.click();
    // fixture.detectChanges();
    // expect(component.onChange).toHaveBeenCalledTimes(1);
  });

  it('checkbox item onClick work', () => {
    const checkboxItem = fixture.debugElement.query(By.css('ListItem'));
    component.onClick = jasmine.createSpy('onClick callback');
    component.disabled = false;
    component.checked = false;
    fixture.detectChanges();
    checkboxItem.nativeElement.click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(1);

    component.disabled = true;
    component.checked = false;
    fixture.detectChanges();
    checkboxItem.nativeElement.click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(2);
  });

  it('agreeItem onChange work', () => {
    const agreeItem = fixture.debugElement.query(By.css('AgreeItem')).nativeElement;
    component.onChange = jasmine.createSpy('onChange callback');
    component.disabled = false;
    component.checked = false;
    fixture.detectChanges();
    agreeItem.firstElementChild.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);

    component.disabled = true;
    fixture.detectChanges();
    agreeItem.firstElementChild.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-checkbox',
  template: `
    <label Checkbox
           [disabled]="disabled"
           [checked]="checked"
           [(ngModel)]="checked"
           (onChange)= "onChange($event)"
    ></label>
    <CheckboxItem [disabled]="disabled"
                  [checked]="checked"
                  (onChange)="onChange($event)"
                  (onClick)="onClick($event)"
    ></CheckboxItem>
    <AgreeItem [disabled]="disabled"
               [checked]="checked"
               (onChange)= "onChange($event)"
    ></AgreeItem>
  `
})
export class TestCheckboxComponent {
  checked = false;
  disabled = false;

  @ViewChild(Checkbox)
  checkbox: Checkbox;

  onChange(e) {
    console.log('onChange', e);
  }

  onClick(e) {
    console.log('onClick', e);
  }
}

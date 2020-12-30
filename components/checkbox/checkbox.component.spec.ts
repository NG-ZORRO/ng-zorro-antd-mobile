import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxModule } from './checkbox.module';

describe('checkbox', () => {
  let component;
  let fixture: ComponentFixture<TestCheckboxComponent>;
  let checkboxEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestCheckboxComponent],
      imports: [CheckboxModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckboxComponent);
    component = fixture.componentInstance;
    checkboxEle = fixture.debugElement.query(By.directive(CheckboxComponent));
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

  it('checkboxItem onChange work', () => {
    const checkboxItem = fixture.debugElement.query(By.css('.am-list-thumb>.am-checkbox-wrapper')).nativeElement;
    component.onChange = jasmine.createSpy('onChange callback');
    component.disabled = false;
    component.checked = false;
    fixture.detectChanges();
    checkboxItem.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
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
    <label Checkbox [disabled]="disabled" [checked]="checked" (onChange)="onChange($event)"></label>
    <CheckboxItem [disabled]="disabled" [(ngModel)]="checked" (onChange)="onChange($event)"></CheckboxItem>
    <AgreeItem [disabled]="disabled" [(ngModel)]="checked" (onChange)="onChange($event)"></AgreeItem>
  `
})
export class TestCheckboxComponent {
  checked: boolean = false;
  disabled: boolean = false;

  @ViewChild(CheckboxComponent)
  checkbox: CheckboxComponent;

  onChange(e) {
    console.log('onChange', e);
  }
}

import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import { RadioModule } from './radio.module';

describe('radio', () => {
  let component;
  let fixture: ComponentFixture<TestRadioComponent>;
  let radioEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestRadioComponent],
      imports: [RadioModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRadioComponent);
    component = fixture.componentInstance;
    radioEle = fixture.debugElement.query(By.directive(RadioComponent));
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

  it('radioItemGroup onChange work', () => {
    const radioItemEle = fixture.debugElement.query(By.css('RadioItemGroup'));
    component.onChange = jasmine.createSpy('onChange callback');
    component.disabled = true;
    fixture.detectChanges();
    radioItemEle.nativeElement
      .querySelector('.second-radio-item')
      .querySelector('.am-radio-wrapper')
      .click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);

    // component.disabled = false;
    // component.checked = false;
    // fixture.detectChanges();
    // radioItemEle.nativeElement.querySelector('.second-radio-item').querySelector('.am-radio-wrapper').click();
    // fixture.detectChanges();
    // expect(component.onChange).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-radio',
  template: `
    <label Radio [name]="'radio'" [checked]="checked" [disabled]="disabled" (onChange)="onChange($event)"></label>
    <RadioItemGroup [(ngModel)]="selectedStatus.value" (onChange)="onChange($event)">
      <RadioItem [name]="data[0].name" [value]="data[0].value">
        {{ data[0].name }}
      </RadioItem>
      <RadioItem class="second-radio-item" [name]="data[1].name" [value]="data[1].value" [disabled]="disabled">
        {{ data[1].name }}
      </RadioItem>
    </RadioItemGroup>
  `
})
export class TestRadioComponent {
  value = false;
  checked = false;
  disabled = false;
  selectedStatus = { value: 0, name: 'doctor' };
  data = [{ value: 0, name: 'doctor' }, { value: 1, name: 'bachelor' }];

  @ViewChild(RadioComponent)
  radio: RadioComponent;

  onChange(e) {
    console.log('onChange', e);
  }

  onClick() {
    console.log('onClick');
  }
}

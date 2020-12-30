import { Component, ViewChild, TemplateRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { InputItemModule } from './input-item.module';
import { createFakeEvent, dispatchFakeEvent } from '../core/testing';
import { InputItemComponent } from './input-item.component';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: TestInputComponent;
  let fixture: ComponentFixture<TestInputComponent>;
  let inputItem;
  let inputEle;
  let inputModel;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestInputComponent],
      imports: [InputItemModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;
    inputItem = fixture.debugElement.query(By.css('InputItem'));
    inputModel = fixture.debugElement.query(By.css('.input-item-1'));
    fixture.detectChanges();
  });

  it('should type work', () => {
    component.type = 'phone';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('type')).toBe('tel', 'type is phone');

    component.type = 'password';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('type')).toBe('password', 'type is password');

    component.type = 'digit';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('type')).toBe('number', 'type is digit');

    component.type = 'money';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle).toBeNull('type is money,input is null');
    const customInput = inputItem.nativeElement.querySelector('custominput');
    expect(customInput).not.toBeNull('custom-input is not null');
  });

  it('should value work', () => {
    component.value = 'test';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('ng-reflect-model')).toBe('test', 'type is text');

    component.value = null;
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('ng-reflect-model')).toBe('', 'value is undefined');

    component.type = 'money';
    fixture.detectChanges();
    component.value = '23';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.innerText).toBe('23', 'type is money');
  });

  it('should value override defaultValue work', () => {
    component.value = 'test';
    component.defaultValue = 'default test';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('ng-reflect-model')).toBe('test', 'type is text');

    component.type = 'money';
    fixture.detectChanges();
    component.value = '23';
    component.defaultValue = '26';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.innerText).toBe('23', 'type is money');
  });

  it('should input chinese character work', fakeAsync(() => {
    const inputModelEle = inputModel.nativeElement.querySelector('input');
    inputModelEle.value = '哈哈';
    inputModelEle.dispatchEvent(new Event('compositionstart'));
    inputModelEle.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(0);
    expect(component.modelValue).toBe(undefined);

    inputModelEle.value = '哈哈';
    inputModelEle.dispatchEvent(new Event('compositionend'));
    inputModelEle.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(0);
    expect(component.modelValue).toBe('哈哈');
  }));

  it('should defaultValue work', () => {
    component.value = null;
    component.defaultValue = 'test';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('ng-reflect-model')).toBe('test', 'type is text');

    component.type = 'money';
    fixture.detectChanges();
    component.value = '';
    component.defaultValue = '23';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.innerText).toBe('23', 'type is money');
  });

  it('should editable work', () => {
    component.editable = false;
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('readonly')).not.toBeNull('type is not money');

    component.type = 'money';
    fixture.detectChanges();
    component.editable = false;
    fixture.detectChanges();
    component.clickTitle();
    expect(component.focusFn).toHaveBeenCalledTimes(0);
  });

  it('should disabled work', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(inputItem.nativeElement.classList).toContain('am-input-disabled', 'type is text');

    component.type = 'money';
    fixture.detectChanges();
    component.disabled = true;
    fixture.detectChanges();
    component.clickTitle();
    expect(component.focusFn).toHaveBeenCalledTimes(0);
  });

  it('should clear work', () => {
    component.clear = true;
    component.value = 'test';
    fixture.detectChanges();
    component.clickTitle();
    expect(inputItem.nativeElement.querySelector('.am-input-clear')).not.toBeNull();

    component.type = 'money';
    fixture.detectChanges();
    component.value = 'test';
    fixture.detectChanges();
    component.clickTitle();
    expect(inputItem.nativeElement.querySelector('.am-input-clear')).not.toBeNull();
  });

  it('should placeholder work', () => {
    component.placeholder = 'placeholder';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('placeholder')).toBe('placeholder', 'type is text');

    component.type = 'money';
    fixture.detectChanges();
    component.placeholder = 'test';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input-placeholder');
    expect(fakeInput.innerText).toBe('test', 'type is money');
  });
  it('should fontColor work', () => {
    component.fontColor = '#2026e2';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('style')).toContain('color: rgb(32, 38, 226)', 'fontColor is text');

    component.type = 'money';
    fixture.detectChanges();
    component.fontColor = '#eee';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.getAttribute('style')).toBe('color: rgb(238, 238, 238);', 'fontColor is money');
  });

  it('should maxLength work', () => {
    component.maxLength = 7;
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('maxlength')).toBe('7', 'type is text');

    component.type = 'money';
    fixture.detectChanges();
    component.maxLength = 3;
    fixture.detectChanges();
    component.value = '23123';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.innerText).toBe('231', 'type is money');
  });

  it('should error work', () => {
    component.error = true;
    fixture.detectChanges();
    expect(inputItem.nativeElement.querySelector('.am-input-error-extra')).not.toBeNull();
  });

  it('should extra work', () => {
    component.extra = '$';
    fixture.detectChanges();
    let extraEle = inputItem.nativeElement.querySelector('.am-input-extra');
    expect(extraEle.innerText).toBe('$');

    component.extra = component.extraTpl;
    fixture.detectChanges();
    extraEle = inputItem.nativeElement.querySelector('.am-input-extra');
    expect(extraEle.innerText).toBe('#');
  });
  it('should labelNumber work', () => {
    component.labelNumber = 3;
    fixture.detectChanges();
    const labelEle = inputItem.nativeElement.querySelector('.am-input-label');
    expect(labelEle.classList).toContain('am-input-label-3');
  });
  it('should content work', () => {
    component.content = 'test content';
    fixture.detectChanges();
    const labelEle = inputModel.nativeElement.querySelector('.am-input-label');
    expect(labelEle.innerText).toContain('test content');
  });
  it('should updatePlaceholder work', () => {
    component.updatePlaceholder = true;
    component.value = 'hahah';
    component.clear = true;
    fixture.detectChanges();
    const clearEle = inputItem.nativeElement.querySelector('.am-input-clear');
    clearEle.click();
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('placeholder')).toBe('hahah');
  });
  it('should prefixListCls work', () => {
    component.prefixListCls = 'am-test';
    fixture.detectChanges();
    const warpEle = inputItem.nativeElement;
    expect(warpEle.classList).toContain('am-test-item');
  });
  it('should name work', () => {
    component.name = 'inputName';
    fixture.detectChanges();
    inputEle = inputItem.nativeElement.querySelector('input');
    expect(inputEle.getAttribute('ng-reflect-name')).toBe('inputName');
  });
  it('should moneyKeyboardAlign work', () => {
    component.type = 'money';
    component.moneyKeyboardAlign = 'left';
    fixture.detectChanges();
    const fakeInput = inputItem.nativeElement.querySelector('.fake-input-container');
    expect(fakeInput.classList).toContain('fake-input-container-left');
  });

  it('should focus work,when type is text', fakeAsync(() => {
    component.value = 'test';
    fixture.detectChanges();
    component.clickTitle();
    fixture.detectChanges();
    tick(100);
    fixture.detectChanges();
    const inputDivEle = inputItem.nativeElement;
    expect(inputDivEle.classList).toContain('am-input-focus');
  }));
  it('should focus work , when type is money', () => {
    component.type = 'money';
    fixture.detectChanges();
    component.value = 'test';
    fixture.detectChanges();
    const fakeInputEle = inputItem.nativeElement.querySelector('.fake-input');
    fakeInputEle.click();
    fixture.detectChanges();
    expect(fakeInputEle.classList).toContain('focus');
  });
  it('should errorClick work', () => {
    component.error = true;
    fixture.detectChanges();
    const errorEle = inputItem.nativeElement.querySelector('.am-input-error-extra');
    errorEle.click();
    expect(component.errorClick).toHaveBeenCalled();
  });
  it('should extraClick work', () => {
    component.extra = '$';
    fixture.detectChanges();
    const extraEle = inputItem.nativeElement.querySelector('.am-input-extra');
    extraEle.click();
    expect(component.extraClick).toHaveBeenCalled();
  });

  it('should OnFocus work , when type is text', () => {
    component.value = 'test';
    fixture.detectChanges();
    component.clickTitle();
    fixture.detectChanges();
    expect(component.focusFn).toHaveBeenCalled();
  });
  it('should OnFocus work , when type is money', () => {
    component.type = 'money';
    fixture.detectChanges();

    const inputNode = fixture.debugElement.query(By.css('.fake-input')).nativeElement;
    dispatchFakeEvent(inputNode, 'click');
    fixture.detectChanges();

    const fakeInputEle = inputItem.nativeElement.querySelector('.fake-input');
    fakeInputEle.click();
    fixture.detectChanges();
    expect(component.focusFn).toHaveBeenCalled();
  });
  it('should OnChange work, type is text', fakeAsync(() => {
    component.inputItemComp.inputType = 'phone';
    component.inputItemComp.inputChange('12334');
    component.clickTitle();
    tick(0);
    expect(component.inputItemComp.value).toBe('123 34');

    component.inputItemComp.inputChange('123123123123');
    component.clickTitle();
    tick(0);
    expect(component.inputItemComp.value).toBe('123 1231 2312');

    component.inputItemComp.inputType = 'bankCard';
    component.inputItemComp.inputChange('1231212312');
    component.clickTitle();
    tick(0);
    expect(component.inputItemComp.value).toBe('1231 2123 12');

    component.inputItemComp.inputType = 'number';
    component.inputItemComp.inputChange('sdf12hah3');
    component.clickTitle();
    tick(0);
    expect(component.inputItemComp.value).toBe('123');

    component.inputItemComp.inputType = 'password';
    component.inputItemComp.inputChange('passwordDemo');
    component.clickTitle();
    tick(0);
    expect(component.inputItemComp.value).toBe('passwordDemo');
  }));
  it('should OnChange work, type is money', () => {
    component.type = 'money';
    fixture.detectChanges();
    component.clear = true;
    component.value = 'test';
    fixture.detectChanges();
    component.clickTitle();
    const clearEle = inputItem.nativeElement.querySelector('.am-input-clear');
    clearEle.click();
    expect(component.change).toHaveBeenCalled();
  });
  it('should OnBlur work , when type is not money', () => {
    const fakeInputBlurEvent = createFakeEvent('blur', false, true);
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.dispatchEvent(fakeInputBlurEvent);
    fixture.detectChanges();
    expect(inputItem.nativeElement.classList).not.toContain('am-input-focus');
  });
  it('should OnBlur work , when type is  money', () => {
    component.type = 'money';
    fixture.detectChanges();
    component.blurFocus();

    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.classList).not.toContain('focus');
  });
  it('should custom-keyboard work , when type is  money', () => {
    component.type = 'money';
    fixture.detectChanges();

    const inputNode = fixture.debugElement.query(By.css('.fake-input')).nativeElement;
    dispatchFakeEvent(inputNode, 'click');
    fixture.detectChanges();

    const fakeInput = inputItem.nativeElement.querySelector('.fake-input');
    expect(fakeInput.classList).toContain('focus');
  });

  it('should ngModel work', fakeAsync(() => {
    const inputModelEle = inputModel.nativeElement.querySelector('input');
    inputModelEle.value = 'test-ng-model';
    inputModelEle.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(0);
    expect(component.modelValue).toBe('test-ng-model');
  }));

  it('should setDisabled work', () => {
    component.inputItemComp.setDisabledState(true);
    fixture.detectChanges();
    expect(inputItem.nativeElement.classList).toContain('am-input-disabled', 'type is text');

    component.type = 'money';
    fixture.detectChanges();
    component.inputItemComp.setDisabledState(true);
    fixture.detectChanges();
    component.clickTitle();
    expect(component.focusFn).toHaveBeenCalledTimes(0);
  });
});

@Component({
  selector: 'test-stepper',
  template: `
    <InputItem
      [type]="type"
      [value]="value"
      [defaultValue]="defaultValue"
      [editable]="editable"
      [disabled]="disabled"
      [clear]="clear"
      [placeholder]="placeholder"
      [maxLength]="maxLength"
      [error]="error"
      [extra]="extra"
      [labelNumber]="labelNumber"
      [updatePlaceholder]="updatePlaceholder"
      [prefixListCls]="prefixListCls"
      [name]="name"
      [fontColor]="fontColor"
      [moneyKeyboardAlign]="moneyKeyboardAlign"
      [locale]="locale"
      [focus]="focus"
      (onChange)="change($event)"
      (onBlur)="blur()"
      (onFocus)="focusFn()"
      (onErrorClick)="errorClick()"
      (onExtraClick)="extraClick()"
    >
      <span (click)="clickTitle()">标题</span>
    </InputItem>
    <InputItem class="input-item-1" [(ngModel)]="modelValue" [content]="content"></InputItem>
    <div class="am-list-content" click="blurFocus()">click to focus</div>
    <ng-template #extraTemplate>#</ng-template>
  `
})
export class TestInputComponent {
  type: string = 'text';
  value;
  modelValue;
  defaultValue: string = '';
  placeholder: string = '';
  editable: boolean = true;
  disabled: boolean = false;
  clear: boolean = false;
  maxLength: number;
  fontColor: string;
  error: boolean = false;
  extra: string | TemplateRef<any> = '';
  labelNumber: number = 5;
  updatePlaceholder: boolean = false;
  prefixListCls: string = 'am-list';
  name: string;
  moneyKeyboardAlign: string = 'right';
  locale;
  focus;
  content = 'content';

  @ViewChild(InputItemComponent)
  inputItemComp: InputItemComponent;

  @ViewChild('extraTemplate')
  extraTpl: TemplateRef<any>;

  errorClick = jasmine.createSpy('errorClick callback');
  extraClick = jasmine.createSpy('extraClick callback');
  focusFn = jasmine.createSpy('focus callback');
  blur = jasmine.createSpy('blur callback');
  change = jasmine.createSpy('change callback');

  constructor() {}

  clickTitle() {
    this.focus = {
      focus: true,
      date: new Date()
    };
  }

  blurFocus() {
    this.focus = {
      focus: false,
      date: new Date()
    };
  }
}

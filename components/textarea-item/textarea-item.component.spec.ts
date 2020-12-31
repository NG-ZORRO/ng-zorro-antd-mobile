import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { TextareaItemModule } from './textarea-item.module';
import { TextareaItemComponent } from './textarea-item.component';
import { dispatchFakeEvent } from '../core/testing';

describe('TextareaComponent', () => {
  let component: TestTextareaItemComponent;
  let fixture: ComponentFixture<TestTextareaItemComponent>;
  let textareaEle;
  let textareaCustomEle;
  let textareaDirective;
  let textareaItem;
  let textareaModel;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestTextareaItemComponent],
      imports: [TextareaItemModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTextareaItemComponent);
    component = fixture.componentInstance;
    textareaEle = fixture.debugElement.query(By.css('.text-1'));
    textareaCustomEle = fixture.debugElement.query(By.css('.text-2'));
    textareaModel = fixture.debugElement.query(By.css('.text-3'));
    textareaDirective = fixture.debugElement.query(By.directive(TextareaItemComponent));
    textareaItem = textareaDirective.nativeElement.querySelector('textarea');
    fixture.detectChanges();
  });

  it('should value work', () => {
    component.value = 'test';
    fixture.detectChanges();
    let textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.value).toBe('test');

    component.value = null;
    fixture.detectChanges();
    textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.value).toBe('');
  });
  it('should ngModel work', () => {
    // component.valueModel = 'ngmodel test';
    // fixture.detectChanges();
    let textarea = textareaModel.nativeElement.querySelector('textarea');
    textarea.value = 'test-ng-model';
    textarea.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.valueModel).toBe('test-ng-model');
  });
  it('should defaultValue work', () => {
    component.defaultValue = 'test';
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.value).toBe('test');
  });
  it('should title work , title is string', () => {
    component.title = '标题';
    fixture.detectChanges();
    const label = textareaEle.nativeElement.querySelector('.am-textarea-label');
    expect(label.innerText).toBe('标题');
  });
  it('should title work , title is string', () => {
    component.title = '标题';
    fixture.detectChanges();
    const label = textareaEle.nativeElement.querySelector('.am-textarea-label');
    expect(label.innerText).toBe('标题');
  });
  it('should title work , title is template', () => {
    const label = textareaCustomEle.nativeElement.querySelector('.am-textarea-label');
    expect(label.children[0].tagName).toBe('IMG');
  });
  it('should name work', () => {
    component.name = 'textareaName';
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.name).toBe('textareaName');
  });
  it('should placeholder work', () => {
    component.placeholder = 'hello test!';
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.getAttribute('placeholder')).toBe('hello test!');
  });
  it('should editable work', () => {
    component.editable = false;
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.getAttribute('readonly')).not.toBeNull();
  });
  it('should disabled work', () => {
    component.disabled = true;
    fixture.detectChanges();
    textareaItem = textareaEle.nativeElement;
    expect(textareaItem.classList).toContain('am-textarea-disabled');
  });
  it('should clear work', () => {
    component.clear = true;
    component.value = 'test';
    fixture.detectChanges();

    const textareaNode = fixture.debugElement.query(By.css('textarea')).nativeElement;
    dispatchFakeEvent(textareaNode, 'focus');
    fixture.detectChanges();

    expect(textareaEle.nativeElement.querySelector('.am-textarea-clear')).not.toBeNull();
  });
  it('should error work', () => {
    component.error = true;
    fixture.detectChanges();
    expect(textareaEle.nativeElement.querySelector('.am-textarea-error-extra')).not.toBeNull();
  });
  it('should rows work', () => {
    component.rows = 3;
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.getAttribute('rows')).toBe('3');
  });
  it('should count work', () => {
    component.count = 7;
    component.rows = 2;
    component.value = '1233';
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('.am-textarea-count');
    expect(textarea).not.toBeNull();
  });
  it('should count work after ngModel write value', () => {
    component.count = 100;
    component.rows = 5;
    const textarea = textareaModel.nativeElement.querySelector('textarea');
    textarea.value = '123';
    textarea.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const count = textareaModel.nativeElement.querySelector('.am-textarea-count').firstElementChild.innerText;
    expect(component.valueModel).toBe('123');
    expect(count).toBe('3');
  });
  it('should labelNumber work', () => {
    component.labelNumber = 3;
    component.title = 'test';
    fixture.detectChanges();
    const labelEle = textareaEle.nativeElement.querySelector('.am-textarea-label');
    expect(labelEle.classList).toContain('am-textarea-label-3');
  });
  it('should prefixListCls work', () => {
    component.prefixListCls = 'am-test';
    fixture.detectChanges();
    const inputDivEle = textareaEle.nativeElement;
    expect(inputDivEle.classList).toContain('am-test-item');
  });
  it('should autoFocus work', () => {
    component.autoFocus = true;
    fixture.detectChanges();
    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.getAttribute('autofocus')).not.toBeNull();
  });
  it('should autoHeight work', () => {
    component.autoHeight = true;
    component.value = 'test';
    fixture.detectChanges();

    const textareaNode = fixture.debugElement.query(By.css('textarea')).nativeElement;
    dispatchFakeEvent(textareaNode, 'focus');
    fixture.detectChanges();

    const textarea = textareaEle.nativeElement.querySelector('textarea');
    expect(textarea.getAttribute('style')).toContain('height');
  });
  it('should focus work', () => {
    component.clickTitle();
    fixture.detectChanges();
    expect(component.focusFn).toHaveBeenCalled();
  });
  it('should errorClickFn work', () => {
    component.error = true;
    fixture.detectChanges();
    const errorEle = textareaEle.nativeElement.querySelector('.am-textarea-error-extra');
    errorEle.click();
    expect(component.errorClickFn).toHaveBeenCalled();
  });
  it('should OnFocus work', () => {
    const textareaNode = fixture.debugElement.query(By.css('textarea')).nativeElement;
    dispatchFakeEvent(textareaNode, 'focus');
    fixture.detectChanges();
    expect(component.focusFn).toHaveBeenCalled();
  });
  it('should OnChange work', fakeAsync(() => {
    component.clear = true;
    component.value = 'test';
    fixture.detectChanges();

    const textareaNode = fixture.debugElement.query(By.css('textarea')).nativeElement;
    dispatchFakeEvent(textareaNode, 'focus');
    fixture.detectChanges();

    const clearEle = textareaEle.nativeElement.querySelector('.am-textarea-clear');
    clearEle.click();
    tick(100);
    expect(component.changeFn).toHaveBeenCalled();
  }));
  it('should OnBlur work', fakeAsync(() => {
    const textareaNode = fixture.debugElement.query(By.css('textarea')).nativeElement;
    dispatchFakeEvent(textareaNode, 'blur');
    fixture.detectChanges();
    tick(100);
    fixture.detectChanges();
    expect(component.blurFn).toHaveBeenCalled();
  }));
  it('should setDisabled work', () => {
    component.textareaItemComp.setDisabledState(true);
    fixture.detectChanges();
    textareaItem = textareaEle.nativeElement;
    expect(textareaItem.classList).toContain('am-textarea-disabled');
  });
});

@Component({
  selector: 'test-steps',
  template: `
    <TextareaItem
      class="text-1"
      [value]="value"
      [name]="name"
      [title]="title"
      [placeholder]="placeholder"
      [editable]="editable"
      [disabled]="disabled"
      [clear]="clear"
      [error]="error"
      [rows]="rows"
      [count]="count"
      [focus]="focus"
      [autoFocus]="autoFocus"
      [autoHeight]="autoHeight"
      [labelNumber]="labelNumber"
      [prefixListCls]="prefixListCls"
      [defaultValue]="defaultValue"
      (onChange)="changeFn($event)"
      (onBlur)="blurFn()"
      (onFocus)="focusFn()"
      (onErrorClick)="errorClickFn()"
    >
    </TextareaItem>
    <TextareaItem class="text-2" [title]="customTitle" [autoHeight]="true" [labelNumber]="5"> </TextareaItem>
    <TextareaItem class="text-3" [rows]="rows" [count]="count" [(ngModel)]="valueModel"> </TextareaItem>
    <ng-template #customTitle>
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png"
        style="width:28px;height:28px"
        alt=""
      />
    </ng-template>
    <span (click)="clickTitle()">标题</span>
  `
})
export class TestTextareaItemComponent {
  value: string;
  valueModel: string = 'ngmodel test';
  defaultValue: string = '';
  placeholder: string = '';
  editable: boolean = true;
  disabled: boolean = false;
  clear: boolean = false;
  error: boolean = false;
  labelNumber: number = 5;
  prefixListCls: string = 'am-list';
  title: string;
  rows: number = 1;
  count: number;
  autoHeight: boolean;
  focus: object;
  autoFocus: boolean;
  name: string;
  style: object;
  errorClickFn = jasmine.createSpy('errorClick callback');
  focusFn = jasmine.createSpy('focus callback');
  blurFn = jasmine.createSpy('blur callback');
  changeFn = jasmine.createSpy('change callback');

  @ViewChild(TextareaItemComponent)
  textareaItemComp: TextareaItemComponent;

  constructor() {}

  clickTitle() {
    this.focus = {
      focus: true,
      date: new Date()
    };
  }
}

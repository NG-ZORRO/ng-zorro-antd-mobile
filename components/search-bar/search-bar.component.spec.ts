import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { SearchBarModule } from './search-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';

describe('SearchBarComponent', () => {
  let component: TestSearchBarComponent;
  let fixture: ComponentFixture<TestSearchBarComponent>;
  let searchBarEle;
  let searchBarEles;
  let inputEle;
  let formEle;
  let buttonEle;
  let cancelEle;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestSearchBarComponent],
      imports: [SearchBarModule, BrowserAnimationsModule, LocaleProviderModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSearchBarComponent);
    component = fixture.componentInstance;
    searchBarEle = fixture.debugElement.query(By.css('SearchBar'));
    searchBarEles = fixture.debugElement.queryAll(By.css('SearchBar'));
    inputEle = searchBarEle.nativeElement.querySelector('input');
    formEle = searchBarEle.nativeElement.querySelector('form');
    buttonEle = fixture.debugElement.query(By.css('.am-button')).nativeElement;
    cancelEle = searchBarEle.nativeElement.querySelector('.cancel');
    fixture.detectChanges();
  });

  it('should maxLength work', () => {
    component.maxLength = 7;
    fixture.detectChanges();
    expect(inputEle.getAttribute('maxlength')).toBe('7');
  });
  it('should defaultValue work', () => {
    component.defaultValue = '34';
    fixture.detectChanges();
    expect(inputEle.value).toBe('34');
  });
  it('should placeholder work', () => {
    component.placeholder = 'search';
    fixture.detectChanges();
    expect(inputEle.getAttribute('placeholder')).toBe('search');
  });
  it('should cancelText work', () => {
    component.cancelText = 'cancel';
    fixture.detectChanges();
    expect(searchBarEle.nativeElement.querySelector('.am-search-cancel').innerText).toBe('cancel');
  });
  it('should showCancelButton work', () => {
    component.showCancelButton = true;
    fixture.detectChanges();
    expect(searchBarEle.nativeElement.querySelector('.am-search-cancel').classList).toContain('am-search-cancel-show');
  });
  it('should disabled work', fakeAsync(() => {
    component.disabled = true;
    component.handleClick();
    fixture.detectChanges();
    expect(searchBarEle.nativeElement.classList).not.toContain('am-search-start', 'disabled is true');
  }));
  it('should onSubmit work', () => {
    component.handleClick();
    component.value = '搜索美食';
    fixture.detectChanges();
    formEle.dispatchEvent(new UIEvent('submit'));
    expect(component.sumbitValue).toBe('搜索美食');
  });
  it('should cancel work', () => {
    component.handleClick();
    component.value = '搜索美食';
    fixture.detectChanges();
    cancelEle.click();
    expect(component.cancel).toHaveBeenCalledTimes(1);
  });

  it('should clear work', () => {
    component.handleClick();
    component.value = '搜索';
    fixture.detectChanges();
    const clearEle = searchBarEle.nativeElement.querySelector('.am-search-clear');
    clearEle.click();
    expect(component.clear).toHaveBeenCalledTimes(1);
  });

  it('should focus work', () => {
    component.handleClick();
    fixture.detectChanges();
    expect(component.focus).toHaveBeenCalled();
  });

  it('should blur work', fakeAsync(() => {
    component.handleClick();
    fixture.detectChanges();
    component.focusObj = {
      focusValue: false,
      date: new Date()
    };
    fixture.detectChanges();
    tick(50);
    expect(component.blur).toHaveBeenCalledTimes(1);
  }));

  it('should change work', () => {
    component.handleClick();
    component.value = '搜索';
    fixture.detectChanges();
    const clearEle = searchBarEle.nativeElement.querySelector('.am-search-clear');
    clearEle.click();
    expect(component.change).toHaveBeenCalledTimes(1);
  });

  it('should ngModel work', fakeAsync(() => {
    const inputEleNext = searchBarEles[1].nativeElement.querySelector('input');
    component.modelValue = 'test';
    fixture.detectChanges();
    tick();
    expect(inputEleNext.value).toBe('test', 'value is test');

    component.modelValue = null;
    fixture.detectChanges();
    tick();
    expect(inputEleNext.value).toBe('', 'value is undefined');
  }));

  it('should ngModelChange work', () => {
    const clearEle = searchBarEles[1].nativeElement.querySelector('a');
    clearEle.click();
    expect(component.modelChange).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-stepper',
  template: `
    <SearchBar
      [value]="value"
      [disabled]="disabled"
      [setFocus]="focusObj"
      [maxLength]="maxLength"
      [cancelText]="cancelText"
      [placeholder]="placeholder"
      [defaultValue]="defaultValue"
      [showCancelButton]="showCancelButton"
      (onSubmit)="submit($event)"
      (onBlur)="blur()"
      (onClear)="clear()"
      (onFocus)="focus()"
      (onCancel)="cancel()"
      (onChange)="change($event)"
    ></SearchBar>
    <SearchBar
      [ngModel]="modelValue"
      [maxLength]="maxLength"
      [cancelText]="cancelText"
      [placeholder]="placeholder"
      [showCancelButton]="showCancelButton"
      (ngModelChange)="modelChange($event)"
    ></SearchBar>
    <a role="button" class="am-button" (click)="handleClick()"><span>click to focus</span></a>
  `
})
export class TestSearchBarComponent {
  defaultValue = '';
  value = '';
  modelValue = '';
  placeholder = '';
  showCancelButton = false;
  cancelText = '取消';
  disabled = false;
  maxLength: number;
  sumbitValue;
  focusObj = {
    focusValue: true,
    date: new Date()
  };
  cancel = jasmine.createSpy('cancel callback');
  clear = jasmine.createSpy('clear callback');
  focus = jasmine.createSpy('focus callback');
  blur = jasmine.createSpy('blur callback');
  change = jasmine.createSpy('change callback');
  modelChange = jasmine.createSpy('ngModelChange callback');

  constructor() {}

  submit(value) {
    this.sumbitValue = value;
  }

  handleClick() {
    this.focusObj = {
      focusValue: true,
      date: new Date()
    };
  }
}

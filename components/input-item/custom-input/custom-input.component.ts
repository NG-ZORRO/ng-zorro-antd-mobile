import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  HostBinding,
  NgZone
} from '@angular/core';
import { CustomInputService } from './custom-input.service';

@Component({
  selector: 'CustomInput',
  templateUrl: './custom-input.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [CustomInputService]
})
export class CustomInputComponent implements OnInit, OnDestroy {
  keyboardPrefixCls: string = 'am-number-keyboard';
  fakeInputCls: object;
  focus: boolean = false;

  private _value: string = '';
  private _defaultValue: string = '';
  private _placeholder: string = '';
  private _maxLength: number;
  private _editable: boolean = true;
  private _disabled: boolean = false;
  private _setFocus: boolean = false;
  private _preventKeyboard: boolean;
  private _moneyKeyboardAlign: string;
  private _fontColor: string;

  @Input()
  get value(): string {
    return this._value;
  }
  set value(v: string) {
    if (typeof v === 'undefined' || v === null) {
      this._value = '';
    } else if (this._maxLength !== undefined && this._maxLength >= 0) {
      this._value = v.toString().substr(0, this._maxLength);
    } else {
      this._value = v.toString();
    }
  }
  @Input()
  set defaultValue(value: string) {
    this._defaultValue = value;
    if (!this._value) {
      this._value = this._defaultValue.toString();
    }
  }
  @Input()
  set maxLength(value: number) {
    this._maxLength = value;
  }
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }
  @Input()
  set editable(value: boolean) {
    this._editable = value;
  }
  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(value: string) {
    this._fontColor = value;
  }
  @Input()
  set moneyKeyboardAlign(value: string) {
    this._moneyKeyboardAlign = value;
    this.setContainerCls();
  }
  @Input()
  set setFocus(value) {
    if (value) {
      this._setFocus = value.focus;
      if (this._setFocus) {
        this.inputFocus();
      }
    }
  }
  @Output()
  onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onFocus: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.fake-input-container')
  clsFakeContainer: boolean = true;
  @HostBinding('class.fake-input-container-left')
  clsFakeContainerLeft: boolean;

  constructor(private _ref: ElementRef, private _customInputService: CustomInputService, private _ngZone: NgZone) {}

  onFakeInputClick() {
    if (this._preventKeyboard) {
      return;
    }
    this.inputFocus();
  }

  inputFocus = () => {
    this.removeBlurListener();
    const focus = this.focus;
    if (!focus || this._setFocus) {
      this.onInputFocus();
    }
    setTimeout(() => {
      this.addBlurListener();
    }, 50);
  }

  doBlur = ev => {
    const value = this._value;
    // 点击是否是组件本身
    let parentFound = false;
    // 点击目标是否是custom-input
    let isInput = false;
    // 点击目标是否是custom-keyboard
    let isKeyboard = false;
    let isClear = false;
    let target = ev.target;
    while (target && target !== null && !parentFound) {
      if (target === this._ref.nativeElement) {
        parentFound = true;
      }
      if (target.localName === 'custominput') {
        isInput = true;
      }
      if (target.localName === 'customkeyboard') {
        isKeyboard = true;
      }
      if (target.className.indexOf('am-input-clear') >= 0) {
        isClear = true;
      }
      target = target.parentElement;
    }
    // 当点击目标是本身的时候，获取焦点、不隐藏keyboard
    // 当点击目标不是本身但是其他的custom-input时，失去焦点、不隐藏keyboard
    // 当点击目标是keyboard时，不失去焦点，不隐藏keyboard
    if (parentFound) {
      this.focus = true;
    } else if (isInput) {
      this._setFocus = false;
      this.focus = false;
      this.onBlur.emit(this._value);
    }
    if (this.focus && isKeyboard) {
      this.focus = true;
      this.onKeyboardClick(CustomInputService.clickValue);
    }
    if (!parentFound && !isInput && !isKeyboard && !isClear && !this._setFocus) {
      this.focus = false;
      this._setFocus = false;
      this.onBlur.emit(this._value);
      CustomInputService.hideKeyboard();
    }
    this.setFakeInputCls();
  }

  removeBlurListener = () => {
    document.removeEventListener('click', this.doBlur, false);
  }

  addBlurListener = () => {
    document.addEventListener('click', this.doBlur, false);
  }

  onInputBlur = value => {
    this.focus = false;
    this.setFakeInputCls();
    this.onBlur.emit(this._value);
    CustomInputService.hideKeyboard();
  }

  onInputFocus = () => {
    this.onFocus.emit(this._value);
    this.focus = true;
    this._setFocus = false;
    this.setFakeInputCls();
    setTimeout(() => {
      CustomInputService.showKeyboard();
    }, 100);
  }

  setFakeInputCls = () => {
    this.fakeInputCls = {
      [`fake-input`]: true,
      ['fake-input-disabled']: this._disabled,
      ['focus']: this.focus
    };
  }

  setContainerCls = () => {
    this.clsFakeContainerLeft = this._moneyKeyboardAlign === 'left';
  }

  onKeyboardClick = keyboardItemValue => {
    // 只允许一个小数点且不能是首位
    if (keyboardItemValue === '.' && (this._value.includes('.') || this._value === '')) {
      return;
    }

    let valueAfterChange;
    // 删除键
    if (keyboardItemValue === 'delete') {
      valueAfterChange = this._value.substring(0, this._value.length - 1);
      this.onChange.emit(valueAfterChange);
      // 确认键
    } else if (keyboardItemValue === 'confirm') {
      valueAfterChange = this._value;
      this.onChange.emit(valueAfterChange);
      this.onInputBlur(this._value);
      // 收起键
    } else if (keyboardItemValue === 'hide') {
      valueAfterChange = this._value;
      this.onInputBlur(valueAfterChange);
    } else {
      if (
        this._maxLength !== undefined &&
        +this._maxLength >= 0 &&
        (this._value + keyboardItemValue).length > this._maxLength
      ) {
        valueAfterChange = (this._value + keyboardItemValue).substr(0, this._maxLength);
        this.onChange.emit(valueAfterChange);
      } else {
        valueAfterChange = this._value + keyboardItemValue;
        this.onChange.emit(valueAfterChange);
      }
    }
    this._ngZone.run(() => {
      this._value = valueAfterChange;
    });
  }

  ngOnInit() {
    this._preventKeyboard = this._disabled || !this._editable;
    this.setFakeInputCls();
    this.setContainerCls();
  }

  ngOnDestroy() {
    this.removeBlurListener();
    if (CustomInputService) {
      CustomInputService.hideKeyboard();
      CustomInputService.compRef = null;
    }
    const container = document.querySelector(`#${this.keyboardPrefixCls}-container`);
    if (container) {
      container.remove();
    }
  }
}

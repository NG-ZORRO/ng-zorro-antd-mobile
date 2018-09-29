import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, HostBinding } from '@angular/core';
const classnames = require('classnames');

@Component({
  selector: 'InputItem, nzm-input-item',
  templateUrl: './input-item.component.html'
})
export class InputItem implements OnInit, OnChanges {
  prefixCls: string = 'am-input';
  wrapCls: object;
  labelCls: object;
  controlCls: object;
  setFocus: object = {};
  pattern: string = '';
  autoFocus: boolean = false;
  inputType: string = 'text';

  private _type: string = 'text';
  private _value: string;
  private _defaultValue: string = '';
  private _placeholder: string = '';
  private _editable: boolean = true;
  private _disabled: boolean = false;
  private _clear: boolean = false;
  private _maxLength: number;
  private _error: boolean = false;
  private _extra: string = '';
  private _labelNumber: number = 5;
  private _updatePlaceholder: boolean = false;
  private _prefixListCls: string = 'am-list';
  private _name: string;
  private _moneyKeyboardAlign: string = 'right';
  private _locale;
  private _focus: boolean = false;
  private _isClear: boolean = false;

  @ViewChild('lableContent')
  lableRef;
  @ViewChild('inputElement')
  inputElementRef;

  @Input()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    if (value && value.length > 0) {
      this.inputType = value;
      if (value === 'bankCard' || value === 'phone') {
        this._type = 'tel';
      } else if (value === 'password') {
        this._type = 'password';
      } else if (value === 'digit') {
        this._type = 'number';
      } else if (value !== 'text' && value !== 'number') {
        this._type = value;
      }
      if (value === 'number') {
        this.pattern = '[0-9]*';
      }
    }
  }
  @Input()
  get value(): string {
    return this._value;
  }
  set value(v: string) {
    if (typeof v === undefined || v === null) {
      this._value = '';
    }
    this._value = v;
  }
  @Input()
  get defaultValue(): string {
    return this._defaultValue;
  }
  set defaultValue(value: string) {
    this._defaultValue = value;
    this._value = this._defaultValue;
  }
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }

  @Input()
  get editable(): boolean {
    return this._editable;
  }
  set editable(value: boolean) {
    this._editable = value;
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.setCls();
  }
  @Input()
  get clear(): boolean {
    return this._clear;
  }
  set clear(value: boolean) {
    this._clear = value;
  }
  @Input()
  get maxLength(): number {
    return this._maxLength;
  }
  set maxLength(value: number) {
    this._maxLength = value;
  }
  @Input()
  get error(): boolean {
    return this._error;
  }
  set error(value: boolean) {
    this._error = value;
    this.setCls();
  }
  @Input()
  get extra(): string {
    return this._extra;
  }
  set extra(value: string) {
    this._extra = value;
  }
  @Input()
  set labelNumber(value: number) {
    this._labelNumber = value;
    this.setCls();
  }
  @Input()
  set updatePlaceholder(value: boolean) {
    this._updatePlaceholder = value;
  }
  @Input()
  get prefixListCls(): string {
    return this._prefixListCls;
  }
  set prefixListCls(value: string) {
    this._prefixListCls = value;
    this.setCls();
  }
  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  @Input()
  get moneyKeyboardAlign(): string {
    return this._moneyKeyboardAlign;
  }
  set moneyKeyboardAlign(value: string) {
    this._moneyKeyboardAlign = value;
  }
  @Input()
  set locale(value) {
    this._locale = value;
  }
  @Input()
  set focus(value) {
    if (value && value.focus) {
      this.autoFocus = value.focus;
      if (this._type === 'money') {
        this.setFocus = value;
      } else if (this.inputElementRef) {
        this._focus = true;
        this.inputElementRef.nativeElement.focus();
        this.inputFocus('');
      }
    }
  }

  @Output()
  onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onErrorClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onExtraClick: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class')
  get class() {
    return this.wrapCls;
  }

  constructor() {}

  _onChange = (_: any) => {};

  setCls() {
    this.wrapCls = classnames({
      [`${this._prefixListCls}-item`]: true,
      [`${this.prefixCls}-item`]: true,
      [`${this._prefixListCls}-item-middle`]: true,
      [`${this.prefixCls}-disabled`]: this._disabled,
      [`${this.prefixCls}-error`]: this._error,
      [`${this.prefixCls}-focus`]: this._focus,
      [`${this.prefixCls}-android`]: this._focus
    });
    if (
      this.lableRef.nativeElement.children.length > 0 ||
      (this.lableRef.nativeElement && this.lableRef.nativeElement.innerText !== '')
    ) {
      this.labelCls = {
        [`${this.prefixCls}-label`]: true,
        [`${this.prefixCls}-label-2`]: this._labelNumber === 2,
        [`${this.prefixCls}-label-3`]: this._labelNumber === 3,
        [`${this.prefixCls}-label-4`]: this._labelNumber === 4,
        [`${this.prefixCls}-label-5`]: this._labelNumber === 5,
        [`${this.prefixCls}-label-6`]: this._labelNumber === 6,
        [`${this.prefixCls}-label-7`]: this._labelNumber === 7
      };
    }
    this.controlCls = { [`${this.prefixCls}-control`]: true };
  }

  inputChange(e) {
    let value = e;
    switch (this.inputType) {
      case 'text':
        break;
      case 'bankCard':
        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        value = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = value.length;
        if (valueLen > 3 && valueLen < 8) {
          value = `${value.substr(0, 3)} ${value.substr(3)}`;
        } else if (valueLen >= 8) {
          value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
        }
        break;
      case 'number':
        value = value.replace(/\D/g, '');
        break;
      case 'password':
        break;
      default:
        this._value = value;
        break;
    }
    this._value = value;

    if (this._type !== 'money') {
      this.inputElementRef.nativeElement.value = this._value;
    }

    this._onChange(this._value);
    this.onChange.emit(this._value);
  }

  inputFocus(value) {
    setTimeout(() => {
      this._focus = true;
      this.setCls();
    }, 100);
    this.onFocus.emit(value);
  }

  inputBlur(value, event) {
    setTimeout(() => {
      if (!this._isClear) {
        this._focus = false;
        this.setCls();
        this.onBlur.emit(value);
      }
      this._isClear = false;
    }, 100);
  }

  clearInput() {
    if (this._type !== 'password' && this._updatePlaceholder) {
      this._placeholder = this._value;
    }
    this._value = '';
    this.onChange.emit('');
    this._isClear = true;
    if (this._type !== 'money') {
      this.inputElementRef.nativeElement.value = this._value;
    }
    this.inputFocus(this._value);
  }

  errorClick(e) {
    if (this.onErrorClick) {
      this.onErrorClick.emit(e);
    }
  }

  extraClick(e) {
    if (this.onExtraClick) {
      this.onExtraClick.emit(e);
    }
  }

  ngOnChanges() {
    if (this.inputElementRef && this._type !== 'money' && this._value !== undefined) {
      this.inputElementRef.nativeElement.value = this._value;
    }
  }

  ngOnInit() {
    this.setCls();
  }
}

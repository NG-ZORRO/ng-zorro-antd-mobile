import {
  Component,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
  HostBinding,
  Renderer2,
  ElementRef,
  forwardRef,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isTemplateRef } from '../core/util/check';
import { NzmInputType } from './input-item.definitions';

@Component({
  selector: 'InputItem, nzm-input-item',
  templateUrl: './input-item.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputItemComponent),
      multi: true
    }
  ]
})
export class InputItemComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  prefixCls: string = 'am-input';
  wrapCls: object;
  labelCls: object;
  controlCls: object;
  setFocus: object = {};
  pattern: string = '';
  autoFocus: boolean = false;
  inputType: NzmInputType = 'text';
  ngTemplate: boolean = false;
  isTemplateRef = isTemplateRef;

  private _el: HTMLElement;
  private _type: NzmInputType = 'text';
  private _value: string;
  private _defaultValue: string = '';
  private _placeholder: string = '';
  private _editable: boolean = true;
  private _disabled: boolean = false;
  private _clear: boolean = false;
  private _maxLength: number;
  private _error: boolean = false;
  private _extra: string | TemplateRef<any> = '';
  private _labelNumber: number = 5;
  private _updatePlaceholder: boolean = false;
  private _prefixListCls: string = 'am-list';
  private _name: string;
  private _moneyKeyboardAlign: string = 'right';
  private _locale;
  private _focus: boolean = false;
  private _isClear: boolean = false;
  private _fontColor: string;
  private _content: string | TemplateRef<any> = '';
  private _inputLock = false;

  @ViewChild('lableContent', { static: true })
  lableRef: ElementRef;
  @ViewChild('inputElement')
  inputElementRef: ElementRef;

  @Input()
  get type(): NzmInputType {
    return this._type;
  }
  set type(value: NzmInputType) {
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
    if (typeof v === 'undefined' || v === null) {
      this._value = '';
    } else {
      this._value = v;
    }
  }
  @Input()
  get defaultValue(): string {
    return this._defaultValue;
  }
  set defaultValue(value: string) {
    this._defaultValue = value;
    if (!this._value) {
      this._value = this._defaultValue;
    }
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
    this.clsDisabled = value;
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
    this.clsError = value;
  }
  @Input()
  get extra(): string | TemplateRef<any> {
    return this._extra;
  }
  set extra(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.ngTemplate = true;
    } else {
      this.ngTemplate = false;
    }
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
    this.render.addClass(this._el, value + '-item');
    this.render.addClass(this._el, value + '-item-middle');
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
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(value: string) {
    this._fontColor = value;
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
  @Input()
  get content() {
    return this._content;
  }
  set content(value: string | TemplateRef<any>) {
    this._content = value;
    this.setCls();
  }

  @Input() compositionFilter = true;

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

  @HostBinding('class.am-input-item')
  clsItem: boolean = true;
  @HostBinding('class.am-input-disabled')
  clsDisabled: boolean = this._disabled;
  @HostBinding('class.am-input-error')
  clsError: boolean = this._error;
  @HostBinding('class.am-input-focus')
  clsFocus: boolean = this._focus;
  @HostBinding('class.am-input-android,')
  clsAndroid: boolean = this._focus;

  constructor(private element: ElementRef, private render: Renderer2) {
    this._el = element.nativeElement;
  }

  _onChange = (_: any) => { };

  setCls() {
    if (
      this.lableRef.nativeElement.children.length > 0 ||
      (this.lableRef.nativeElement && this.lableRef.nativeElement.innerText !== '') ||
      this._content != undefined
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

  inputChange(inputValue: string) {
    // 'compositionend' is earlier than ngModelChange, Therefore use timer to make ngModelChange runs after 'compositionend' event
    setTimeout(() => {
      if (this.compositionFilter && this._inputLock && this.inputType === 'text') {
        return;
      }
      let value = inputValue;
      switch (this.inputType) {
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
      }
      if (this.inputType !== 'text') {
        this._value = value;
      }
      this._onChange(this._value);
      this.onChange.emit(this._value);
    }, 0);
  }

  compositionStart() {
    this._inputLock = true;
  }

  compositionEnd() {
    this._inputLock = false;
  }

  inputFocus(value) {
    if (!this._editable && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setTimeout(() => {
      this._focus = true;
      this.clsFocus = true;
      this.clsAndroid = true;
    }, 100);
    this.onFocus.emit(value);
  }

  inputBlur(value) {
    setTimeout(() => {
      if (!this._isClear) {
        this._focus = false;
        this.clsFocus = false;
        this.clsAndroid = false;
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
    this.onChange.emit(this._value);
    this._onChange(this._value);
    this._isClear = true;
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

  writeValue(value: any): void {
    if (typeof value === undefined || value === null) {
      this._value = '';
    } else {
      this._value = value;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  ngOnInit() {
    this.setCls();
    this.render.addClass(this._el, this._prefixListCls + '-item');
    this.render.addClass(this._el, this._prefixListCls + '-item-middle');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setCls();
    }, 0);
  }
}

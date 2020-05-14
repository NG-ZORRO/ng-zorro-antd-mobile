import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  AfterContentChecked,
  forwardRef,
  HostBinding,
  ElementRef,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'TextareaItem , nzm-textarea-item',
  templateUrl: './textarea-item.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaItemComponent),
      multi: true
    }
  ]
})
export class TextareaItemComponent implements OnInit, AfterContentChecked, ControlValueAccessor {
  prefixCls: string = 'am-textarea';
  wrapCls: object;
  labelCls: object;
  controlCls: object;
  clearCls: object;
  hasCount: boolean;
  characterLength: number;
  isTitleString: boolean = true;
  maxLength: number = Infinity;

  private _el: ElementRef;
  private _prefixListCls = 'am-list';
  private _value: string;
  private _defaultValue: string = '';
  private _placeholder: string = '';
  private _editable: boolean = true;
  private _disabled: boolean = false;
  private _clear: boolean = false;
  private _rows: number = 1;
  private _count: number;
  private _autoHeight: boolean;
  private _error: boolean = false;
  private _labelNumber: number = 5;
  private _name: string = '';
  private _title: string | TemplateRef<any>;
  private _focus: boolean = false;
  private _autoFocus: boolean = false;
  private _isClear: boolean = false;
  private _isClickingClear: boolean = false;

  @ViewChild('text', { static: true })
  textRef;

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
    this.textRef.nativeElement.value = this._value;
    this._onChange(this._value);
  }
  @Input()
  get defaultValue(): string {
    return this._defaultValue;
  }
  set defaultValue(value: string) {
    this._defaultValue = value;
    this._value = this._defaultValue;
    this.textRef.nativeElement.value = this._value;
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
  get rows(): number {
    return this._rows;
  }
  set rows(value: number) {
    this._rows = value;
    this.setCls();
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
  set labelNumber(value: number) {
    this._labelNumber = value;
    this.setCls();
  }
  @Input()
  get count(): number {
    return this._count;
  }
  set count(value) {
    this._count = value;
    this.setCls();
    this.setCharacterLength();
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
  set name(value: string) {
    this._name = value;
    this.textRef.nativeElement.name = this._name;
  }
  @Input()
  set autoHeight(value: boolean) {
    this._autoHeight = value;
  }
  @Input()
  get title(): string | TemplateRef<any> {
    return this._title;
  }
  set title(value: string | TemplateRef<any>) {
    this._title = value;
    this.isTitleString = true;
    if (typeof value !== 'string') {
      this.isTitleString = false;
    }
  }
  @Input()
  set focus(value) {
    if (value && value.focus) {
      this.textRef.nativeElement.focus();
      this.inputFocus('');
    }
  }
  @Input()
  get autoFocus(): boolean {
    return this._autoFocus;
  }
  set autoFocus(value: boolean) {
    this._autoFocus = value;
  }
  @Output()
  onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onErrorClick: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.am-textarea-item')
  clsItem: boolean = true;
  @HostBinding('class.am-textarea-disabled')
  clsDisabled: boolean;
  @HostBinding('class.am-textarea-error')
  clsError: boolean;
  @HostBinding('class.am-textarea-focus')
  clsFocus: boolean;
  @HostBinding('class.am-textarea-item-single-line')
  clsSingleLine: boolean;
  @HostBinding('class.am-textarea-has-count')
  clsHasCount: boolean;

  constructor(private element: ElementRef, private render: Renderer2) {
    this._el = element.nativeElement;
  }

  _onChange = (_: any) => {};

  setCls() {
    this.hasCount = this._count > 0 && this._rows > 1;
    this.render.addClass(this._el, this._prefixListCls + '-item');
    this.clsSingleLine = this._rows === 1 && !this._autoHeight;
    this.clsDisabled = this._disabled;
    this.clsError = this._error;
    this.clsFocus = this._focus;
    this.clsHasCount = this.hasCount;
    this.labelCls = {
      [`${this.prefixCls}-label`]: true,
      [`${this.prefixCls}-label-2`]: this._labelNumber === 2,
      [`${this.prefixCls}-label-3`]: this._labelNumber === 3,
      [`${this.prefixCls}-label-4`]: this._labelNumber === 4,
      [`${this.prefixCls}-label-5`]: this._labelNumber === 5,
      [`${this.prefixCls}-label-6`]: this._labelNumber === 6,
      [`${this.prefixCls}-label-7`]: this._labelNumber === 7
    };
    this.controlCls = { [`${this.prefixCls}-control`]: true };
    this.clearCls = {
      [`${this.prefixCls}-clear-active`]: this._isClickingClear
    };
  }
  setCharacterLength() {
    this.characterLength = this.countSymbols(this._value);
    if (this._count > 0) {
      this.maxLength = this._count - this.characterLength + (this._value ? this._value.length : 0);
    }
  }

  inputChange(e) {
    this._value = e;
    this.textRef.nativeElement.value = this._value;
    this.setCharacterLength();
    this._onChange(this._value);
    this.onChange.emit(this._value);
  }

  inputFocus(value) {
    this._focus = true;
    this.setCls();
    if (value !== undefined) {
      this.onFocus.emit(value);
    }
  }

  inputBlur(value, event) {
    setTimeout(() => {
      this._focus = false;
      this.setCls();
      this.onBlur.emit(value);
      this._isClear = false;
    }, 100);
  }

  clearInput() {
    this._isClickingClear = true;
    this.setCls();
    setTimeout(() => {
      this._value = '';
      this.inputChange('');
      this.inputFocus(this._value);
      this._isClickingClear = false;
      this.setCls();
    }, 100);
  }
  errorClick(e) {
    if (this.onErrorClick) {
      this.onErrorClick.emit(e);
    }
  }
  reAlignHeight() {
    const textareaDom = this.textRef.nativeElement;
    textareaDom.style.height = '';
    textareaDom.style.height = `${textareaDom.scrollHeight}px`;
  }

  countSymbols(text = '') {
    const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
    return text.replace(regexAstralSymbols, '_').length;
  }

  writeValue(value: any): void {
    if (typeof value === 'undefined' || value === null) {
      this._value = '';
    } else {
      this._value = value;
    }
    this.setCharacterLength();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  ngOnInit() {
    this.textRef.nativeElement.value = this._value;
    this.setCls();
    this.setCharacterLength();
  }

  ngAfterContentChecked() {
    if (this._autoHeight) {
      this.reAlignHeight();
    }
  }
}

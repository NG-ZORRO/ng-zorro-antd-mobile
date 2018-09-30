import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'TextareaItem , nzm-textarea-item',
  templateUrl: './textarea-item.component.html'
})
export class TextareaItem implements OnInit, AfterContentChecked {
  prefixCls: string = 'am-textarea';
  wrapCls: object;
  labelCls: object;
  controlCls: object;
  clearCls: object;
  hasCount: boolean;
  characterLength: number;
  isTitleString: boolean = true;
  maxLength: number = Infinity;

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

  @ViewChild('text')
  textRef;

  @Input()
  get value(): string {
    return this._value;
  }
  set value(v: string) {
    if (typeof v === undefined || v === null) {
      this._value = '';
    }
    this._value = v;
    this.textRef.nativeElement.value = this._value;
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

  constructor() {}

  setCls() {
    this.hasCount = this._count > 0 && this._rows > 1;
    this.wrapCls = {
      [`${this._prefixListCls}-item`]: true,
      [`${this.prefixCls}-item`]: true,
      [`${this.prefixCls}-disabled`]: this._disabled,
      [`${this.prefixCls}-error`]: this._error,
      [`${this.prefixCls}-focus`]: this._focus,
      [`${this.prefixCls}-item-single-line`]: this._rows === 1 && !this._autoHeight,
      [`${this.prefixCls}-has-count`]: this.hasCount
    };
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

  ngOnInit() {
    this.setCls();
    this.setCharacterLength();
    this.textRef.nativeElement.value = this._value;
  }

  ngAfterContentChecked() {
    if (this._autoHeight && this._focus) {
      this.reAlignHeight();
    }
  }
}

import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewEncapsulation,
  Input,
  Output,
  forwardRef,
  ElementRef,
  EventEmitter,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'SearchBar, nzm-search-bar',
  templateUrl: './search-bar.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true
    }
  ],
  animations: [
    trigger('cancelButtonState', [
      state('visible', style({ width: '*' })),
      state('hidden', style({ width: '100%' })),
      transition('visible =>hidden', [animate(300, style({ width: '100%' }))]),
      transition('hidden => visible', [animate(300, style({ width: '*' }))])
    ])
  ]
})
export class SearchBarComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy, ControlValueAccessor {
  prefixCls: string = 'am-search';
  clearCls: object;
  wrapCls: object;
  cancelCls: object = {
    [`${this.prefixCls}-cancel`]: true
  };
  isComposing = false;

  private _defaultValue: string = '';
  private _value: string = '';
  private _placeholder: string = '';
  private _showCancelButton: boolean = false;
  private _cancelText: string;
  private _disabled: boolean = false;
  private _maxLength: number;
  private _focus: boolean = false;
  private _isSubmit: boolean = false;
  private _isCustomText: boolean = false;
  private _isClearClicking: boolean = false;
  private _syntheticPhContainerRef: HTMLElement;
  private _syntheticPhRef: HTMLElement;
  private _rightBtnRef: HTMLElement;
  private _inputContainerRef: HTMLElement;
  private _rightBtnInitMarginLeft: string;
  private _blurFromOnClear: boolean = false;
  private locale: any = {};
  private _unsubscribe$ = new Subject<void>();

  @ViewChild('search', { static: true })
  inputElementRef;

  @Input()
  set defaultValue(value: string) {
    this._defaultValue = value;
    this._value = value;
    this.inputElementRef.nativeElement.value = this._value;
  }
  @Input()
  get value(): string {
    return this._value;
  }
  set value(v: string) {
    this._value = v || '';
    this.inputElementRef.nativeElement.value = this._value;
    this.setClass();
  }
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }
  @Input()
  get showCancelButton(): boolean {
    return this._showCancelButton;
  }
  set showCancelButton(value: boolean) {
    this._showCancelButton = value;
    this.setClass();
  }
  @Input()
  get cancelText(): string {
    return this._cancelText;
  }
  set cancelText(value: string) {
    if (value !== undefined) {
      this._cancelText = value;
      this._isCustomText = true;
    }
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  get maxLength(): number {
    return this._maxLength;
  }
  set maxLength(value: number) {
    this._maxLength = value;
  }
  @Input()
  set setFocus(value) {
    if (value) {
      if (value.focusValue) {
        this._focus = true;
        this.inputElementRef.nativeElement.focus();
        this._blurFromOnClear = true;
        this.onSearchbarFocus();
      } else {
        this._blurFromOnClear = false;
        this.onSearchbarBlur();
      }
    }
  }
  @Output()
  onSubmit = new EventEmitter<any>();
  @Output()
  onChange = new EventEmitter<any>();
  @Output()
  onFocus = new EventEmitter<any>();
  @Output()
  onBlur = new EventEmitter<any>();
  @Output()
  onCancel = new EventEmitter<any>();
  @Output()
  onClear = new EventEmitter<any>();
  private onChangeFn: (value: string) => void = () => {};
  private onTouchFn: (value: string) => void = () => {};

  constructor(private _elementRef: ElementRef, private _localeProvider: LocaleProviderService) {}

  setClass() {
    this.wrapCls = {
      [`${this.prefixCls}`]: true,
      [`${this.prefixCls}-start`]: !!(this._focus || (this._value && this._value.length > 0)) && !this._disabled
    };
    this.cancelCls = {
      [`${this.prefixCls}-cancel`]: true,
      [`${this.prefixCls}-cancel-show`]:
        this._showCancelButton || this._focus || (this._value && this._value.length > 0),
      [`${this.prefixCls}-cancel-anim`]: this._focus
    };
    this.clearCls = {
      [`${this.prefixCls}-clear`]: this._value && this._value.length > 0,
      [`${this.prefixCls}-clear-show`]: this._value && this._value.length > 0 && !this._isSubmit,
      [`${this.prefixCls}-clear-active`]: this._isClearClicking
    };
  }

  setStyle() {
    if (this._inputContainerRef.className.indexOf(`${this.prefixCls}-start`) > -1) {
      const realWidth = this._syntheticPhContainerRef.getBoundingClientRect().width;
      this._syntheticPhRef.style.width = Math.ceil(realWidth) + 'px';
      if (!this._showCancelButton) {
        this._rightBtnRef.style.marginRight = '0';
      }
    } else {
      this._syntheticPhRef.style.width = '100%';
      if (!this._showCancelButton) {
        this._rightBtnInitMarginLeft = window.getComputedStyle(this._rightBtnRef)['margin-left'];
        const btnMarginRight = this._rightBtnRef.offsetWidth + parseInt(this._rightBtnInitMarginLeft, 10);
        this._rightBtnRef.style.marginRight = '-' + btnMarginRight + 'px';
      }
    }
  }

  onSearchbarBlur() {
    const self = this;
    setTimeout(() => {
      if (!self._blurFromOnClear && self._value === '' && self._focus) {
        self._focus = false;
        self._value = '';
        self.onBlur.emit();
        self.setClass();
      }
      self._blurFromOnClear = false;
    }, 50);
  }

  onSearchbarFocus() {
    this._focus = true;
    this._isSubmit = false;
    this.onFocus.emit();
    this.setClass();
  }

  onSearchbarChange(e) {
    this._focus = true;
    this._value = e;
    this.onChange.emit(e);
    this.onChangeFn(e);
    this.setClass();
  }

  onSearchSubmit(e) {
    e.preventDefault();
    this._value = e.target[0].value;
    this._isSubmit = true;
    this.onSubmit.emit(this._value);
    this.setClass();
    this._blurFromOnClear = true;
    this.inputElementRef.nativeElement.blur();
  }

  onSearchbarCancel() {
    this._focus = false;
    this._value = '';
    this.onCancel.emit();
    this.setClass();
  }

  onSearchbarClear() {
    this._blurFromOnClear = true;
    this._isClearClicking = true;
    this.onSearchbarChange('');
    this.inputElementRef.nativeElement.focus();
    this.onClear.emit(this._value);
    this.setClass();
    setTimeout(() => {
      this._value = '';
      this._isClearClicking = false;
      this._blurFromOnClear = false;
      this.setClass();
    }, 100);
    this.onSearchbarFocus();
  }

  onSetCompositionState(isComposing: boolean) {
    this.isComposing = isComposing;
  }

  writeValue(value: any): void {
    this._value = value || '';
    this.inputElementRef.nativeElement.value = this._value;
    this.setClass();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: (value: string) => void): void {
    this.onTouchFn = fn;
  }

  ngOnInit() {
    this.setClass();
    this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
      this.locale = this._localeProvider.getLocaleSubObj('SearchBar');
      this._cancelText = this._isCustomText ? this._cancelText : this.locale.cancelText;
    });
  }

  ngAfterViewInit() {
    this._syntheticPhContainerRef = this._elementRef.nativeElement.getElementsByClassName(
      `${this.prefixCls}-synthetic-ph-container`
    )[0];
    this._syntheticPhRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}-synthetic-ph`)[0];
    this._rightBtnRef = this._elementRef.nativeElement.getElementsByClassName('cancel')[0];
    this._inputContainerRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}`)[0];
  }

  ngAfterViewChecked() {
    this.setStyle();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}

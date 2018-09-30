import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  forwardRef,
  HostBinding,
  HostListener,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface OnChangeEvent {
  name: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: '[Radio], [nzm-radio]',
  templateUrl: './radio.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Radio),
      multi: true
    }
  ]
})
export class Radio implements OnInit, OnChanges, ControlValueAccessor {
  prefixCls: string = 'am-radio';
  classMap: object = {
    [this.prefixCls]: true,
    [`${this.prefixCls}-checked`]: this.checked,
    [`${this.prefixCls}-disabled`]: this.disabled
  };
  private _checked = false;
  private _disabled = false;
  private _ngModelOnChange: any = Function.prototype;
  private _ngModelOnTouched: any = Function.prototype;

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
    this.updateClassMap();
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = toBoolean(value);
  }
  @Output()
  onChange = new EventEmitter<OnChangeEvent>();

  @HostBinding('class.am-radio-wrapper')
  radioWrapper: boolean = true;

  @HostListener('click', ['$event'])
  onClick(e: TouchEvent): void {
    e.preventDefault();
    if (!this._disabled && !this._checked) {
      this.updateValue(true);
    }
  }

  constructor() {}

  updateValue(checkValue: boolean): void {
    this._ngModelOnChange(checkValue);
    this.onChange.emit({
      name: this.name,
      value: this.value,
      checked: checkValue
    });
    this.checked = checkValue;
  }

  writeValue(value: boolean): void {
    if (null !== value) {
      this.checked = value;
    }
  }

  registerOnChange(fn: (_: boolean) => {}): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._ngModelOnTouched = fn;
  }

  ngOnInit() {
    this.updateClassMap();
  }

  ngOnChanges(): void {
    this.updateClassMap();
  }

  private updateClassMap(): void {
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-disabled`]: this.disabled
    };
  }
}

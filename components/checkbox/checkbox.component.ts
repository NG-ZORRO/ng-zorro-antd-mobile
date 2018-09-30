import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  forwardRef
} from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface OnChangeEvent {
  name: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: '[Checkbox], [nzm-checkbox]',
  templateUrl: './checkbox.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Checkbox),
      multi: true
    }
  ]
})
export class Checkbox implements OnInit, OnChanges, ControlValueAccessor {
  prefixCls: string = 'am-checkbox';
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
    if (!this._disabled) {
      this._checked = value;
      this.updateClassMap();
    }
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

  @HostBinding('class.am-checkbox-wrapper')
  checkBoxWrapper: boolean = true;

  @HostListener('click', ['$event'])
  onClick(e: TouchEvent): void {
    e.preventDefault();
    if (!this._disabled) {
      this.updateValue(!this._checked);
    }
  }

  constructor() {}

  updateValue(value: boolean): void {
    this._ngModelOnChange(value);
    this.onChange.emit({ name: this.name, value: this.value, checked: value });
    this.checked = value;
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

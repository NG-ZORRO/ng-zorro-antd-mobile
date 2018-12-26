import { Component, forwardRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface CheckboxStatus {
  name: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'CheckboxItem, nzm-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxItem),
      multi: true
    }
  ]
})
export class CheckboxItem implements ControlValueAccessor {
  prefixCls = 'am-checkbox';
  checked: boolean = false;
  private _disabled: boolean = false;
  private _ngModelOnChange: (value: boolean) => {};
  private _ngModelOnTouched: () => {};

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Output()
  onChange = new EventEmitter<CheckboxStatus>();

  constructor(private cdr: ChangeDetectorRef) { }

  onCheckboxClick(event) { }

  change(event) {
    this.checked = event.checked;
    this._ngModelOnChange(event.checked);
    this.onChange.emit(event);
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (_: boolean) => {}): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._ngModelOnTouched = fn;
  }
}

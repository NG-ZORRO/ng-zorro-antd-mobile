import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostBinding
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Switch, nzm-switch',
  templateUrl: './switch.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Switch),
      multi: true
    }
  ]
})
export class Switch {
  prefixCls = 'am-switch';
  wrapCls = 'am-switch';
  checkboxCls = {
    'checkbox-disabled': false,
    'checkbox-active': false,
    'checkbox-enactive': false
  };
  colorStyle = {};
  switchChecked: boolean;

  private _color: string = '';
  private _platform: string = 'ios';
  private _disabled: boolean = false;
  private onChanged = Function.prototype;
  private onTouched = Function.prototype;

  @Input()
  set color(value) {
    this._color = value;
    this.colorStyle = { background: this._color };
  }

  @Input()
  name: string;

  @Input()
  set platform(value: string) {
    this._platform = value;
    this.wrapCls = value === 'android' ? `${this.prefixCls}-android` : this.prefixCls;
  }
  @Input()
  set checked(value: boolean) {
    this.switchChecked = value;
    this.checkboxCls = {
      'checkbox-disabled': this._disabled,
      'checkbox-active': this.switchChecked,
      'checkbox-enactive': !this.switchChecked
    };
    this.colorStyle = { background: value ? this._color : '' };
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.checkboxCls = {
      'checkbox-disabled': value,
      'checkbox-active': false,
      'checkbox-enactive': false
    };
  }
  @Output()
  onChange = new EventEmitter<boolean>();
  @Output()
  onClick = new EventEmitter<boolean>();

  @HostBinding('style.display')
  dispaly: boolean = true;

  constructor() {}

  changeSwitch(checkedValue) {
    this.onChanged(checkedValue);
    this.switchChecked = checkedValue;
    this.checkboxCls = {
      'checkbox-disabled': this._disabled,
      'checkbox-active': this.switchChecked,
      'checkbox-enactive': !this.switchChecked
    };
    this.colorStyle = { background: checkedValue ? this._color : '' };
    this.onChange.emit(checkedValue);
  }

  click() {
    this.onClick.emit(this.switchChecked);
  }

  writeValue(value: boolean): void {
    this.switchChecked = value;
  }

  registerOnChange(fn: (_: boolean) => {}): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}

import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { CheckboxOnChangeEvent } from './PropsType';

@Component({
  selector: '[Checkbox], [nzm-checkbox]',
  templateUrl: './checkbox.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {
  prefixCls: string = 'am-checkbox';
  classMap: object = {
    [this.prefixCls]: true,
    [`${this.prefixCls}-checked`]: false,
    [`${this.prefixCls}-disabled`]: false
  };
  private _checked: boolean = false;
  private _disabled: boolean = false;

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
    this._disabled = value;
    this.updateClassMap();
  }
  @Output()
  onChange = new EventEmitter<CheckboxOnChangeEvent>();

  @HostBinding('class.am-checkbox-wrapper')
  checkBoxWrapper: boolean = true;

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.preventDefault();
    if (!this._disabled) {
      this.updateValue(!this.checked);
    }
  }

  constructor() {}

  updateValue(value: boolean): void {
    this.checked = value;
    this.onChange.emit({
      name: this.name,
      value: this.value,
      checked: value
    });
  }

  ngOnInit() {
    this.updateClassMap();
  }

  private updateClassMap() {
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-disabled`]: this.disabled
    };
  }
}

import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  TemplateRef,
  ChangeDetectorRef,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxStatus } from './PropsType';

@Component({
  selector: 'CheckboxItem, nzm-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxItemComponent),
      multi: true
    }
  ]
})
export class CheckboxItemComponent implements ControlValueAccessor {
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
  arrow: string;
  @Input()
  extra: string | TemplateRef<any>;
  @Input()
  wrap: boolean = false;
  @Input()
  error: boolean = false;
  @Input()
  multipleLine: boolean = false;
  @Input()
  platform: string = 'ios';
  @Input()
  align: string = 'middle';
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Output()
  onChange = new EventEmitter<CheckboxStatus>();

  constructor(private cdr: ChangeDetectorRef) {}

  onCheckboxClick(event) {}

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

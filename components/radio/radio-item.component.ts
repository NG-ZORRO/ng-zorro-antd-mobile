import { Component, ChangeDetectorRef, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'RadioItem, nzm-radio-item',
  templateUrl: './radio-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioItem {
  select$ = new Subject<RadioItem>();
  prefixCls: string = 'am-radio';
  private _checked: boolean = false;
  private _disabled: boolean = false;

  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
    this.cdr.markForCheck();
  }

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
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  onRadioItemClick(event) {}

  change(event) {
    if (!this.disabled && !this.checked) {
      this.select$.next(this);
    }
  }
}

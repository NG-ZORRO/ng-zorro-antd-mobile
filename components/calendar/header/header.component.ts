import { Component, ViewEncapsulation, Input, Output, HostBinding, TemplateRef, EventEmitter } from '@angular/core';
import { DateModels } from '../date/DataTypes';

@Component({
  selector: 'CalendarHeader, nzm-calendar-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarHeaderComponent {
  title: string;
  closeIcon_component: boolean = false;
  clearIcon: any;

  private _locale: DateModels.Locale;
  private _showClear: boolean;
  private _closeIcon: any = 'X';

  @Input()
  get locale() {
    return this._locale;
  }
  set locale(value) {
    this._locale = value;
  }
  @Input()
  get closeIcon() {
    return this._closeIcon;
  }
  set closeIcon(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._closeIcon = value;
      this.closeIcon_component = true;
    } else {
      this._closeIcon = <string>value;
      this.closeIcon_component = false;
    }
  }
  @Input()
  get showClear() {
    return this._showClear;
  }
  set showClear(value) {
    this._showClear = value;
  }
  @Output()
  onCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onClear: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.header') header: boolean = true;

  constructor() {}

  triggerCancel() {
    if (this.onCancel) {
      this.onCancel.emit();
    }
  }

  triggerClear() {
    if (this.onClear) {
      this.onClear.emit();
    }
  }
}

import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
export type PositionType = 'normal' | 'fixed';

@Component({
  selector: 'Progress, nzm-progress',
  templateUrl: './progress.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent {
  prefixCls: string = 'am-progress';

  private _percent: number = 0;
  private _exceedance: boolean = false;

  @Input()
  unfilled: boolean = true;
  @Input()
  position: PositionType = 'fixed';
  @Input()
  barStyle: object = {};
  @Input()
  get percent(): number {
    return this._percent;
  }
  set percent(value: number) {
    this._percent = value;
    if (value > 100) {
      this._exceedance = true;
    } else {
      this._exceedance = false;
    }
  }

  @HostBinding('attr.max')
  max: number = 100;
  @HostBinding('attr.value')
  get value(): number {
    return this.percent;
  }

  @HostBinding('class.am-progress')
  amProgress: boolean = true;
  @HostBinding('class.am-progress-outer')
  outer: boolean = true;
  @HostBinding('class.am-progress-fixed-outer')
  get fixOuter(): boolean {
    return 'fixed' === this.position;
  }
  @HostBinding('class.am-progress-hide-outer')
  get hideOuter(): boolean {
    return !this.unfilled && !this._exceedance;
  }
  @HostBinding('class.am-progress-exceedance')
  get exceedance(): boolean {
    return this._exceedance;
  }

  constructor() {}
}

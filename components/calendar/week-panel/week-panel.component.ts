import { Component, HostBinding, ViewEncapsulation, Input } from '@angular/core';
import { Models } from '../date/DataTypes';

@Component({
  selector: 'CalendarWeekPanel, nzm-calendar-week-panel',
  templateUrl: './week-panel.component.html',
  encapsulation: ViewEncapsulation.None
})
export class WeekPanelComponent {
  constructor() {}

  week: string[] = ['日', '一', '二', '三', '四', '五', '六'];

  @Input()
  set locale(value: Models.Locale) {
    if (value) {
      this.week = value.week;
    }
  }

  @HostBinding('class.week-panel') weekPanel: boolean = true;
}

import { Component, HostBinding, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DateModels } from '../date/DataTypes';

@Component({
  selector: 'CalendarWeekPanel, nzm-calendar-week-panel',
  templateUrl: './week-panel.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarWeekPanelComponent implements OnInit {
  constructor() {}

  week: string[] = ['日', '一', '二', '三', '四', '五', '六'];

  private _locale: DateModels.Locale;

  @Input()
  set locale(value) {
    this._locale = value;
  }

  @HostBinding('class.week-panel') weekPanel: boolean = true;

  ngOnInit() {
    this.week = this._locale.week;
  }
}

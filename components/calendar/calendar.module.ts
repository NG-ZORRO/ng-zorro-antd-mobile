import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { CalendarComponent } from './calendar.component';
import { CalendarHeaderComponent } from './header/header.component';
import { CalendarWeekPanelComponent } from './week-panel/week-panel.component';
import { CalendarDatePickerComponent } from './datepicker/datepicker.component';
import { CalendarTimePickerComponent } from './timepicker/timepicker.component';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';
import { DatePickerViewModule } from 'ng-zorro-antd-mobile/date-picker-view';
import { CalendarSingleMonthComponent } from './single-month/single-month.component';
import { CalendarConfirmPanelComponent } from './confirm-panel/confirm-panel.component';
import { CalendarShortcutPanelComponent } from './shortcut-panel/shortcut-panel.component';

@NgModule({
  imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarWeekPanelComponent,
    CalendarDatePickerComponent,
    CalendarTimePickerComponent,
    CalendarSingleMonthComponent,
    CalendarConfirmPanelComponent,
    CalendarShortcutPanelComponent
  ],
  exports: [
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarWeekPanelComponent,
    CalendarDatePickerComponent,
    CalendarTimePickerComponent,
    CalendarSingleMonthComponent,
    CalendarConfirmPanelComponent,
    CalendarShortcutPanelComponent
  ]
})
export class CalendarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { CalendarComponent } from './calendar.component';
import { CalendarHeaderComponent } from './header/header.component';
import { CalendarWeekPanelComponent } from './week-panel/week-panel.component';
import { CalendarDatePickerComponent } from './datepicker/datepicker.component';
import { CalendarTimePickerComponent } from './timepicker/timepicker.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { DatePickerViewModule } from '../date-picker-view/date-picker-view.module';
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

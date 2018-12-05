import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { HeaderComponent } from './header/header.component';
import { DatePickerComponent } from './datepicker/datepicker.component';
import { TimePickerComponent } from './timepicker/timepicker.component';
import { WeekPanelComponent } from './week-panel/week-panel.component';
import { ConfirmPanelComponent } from './confirm-panel/confirm-panel.component';
import { SingleMonthComponent } from './single-month/single-month.component';
import { ShortcutPanelComponent } from './shortcut-panel/shortcut-panel.component';
import { DatePickerViewModule } from '../date-picker-view/date-picker-view.module';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
  declarations: [
    CalendarComponent,
    HeaderComponent,
    DatePickerComponent,
    WeekPanelComponent,
    SingleMonthComponent,
    ConfirmPanelComponent,
    TimePickerComponent,
    ShortcutPanelComponent
  ],
  exports: [
    CalendarComponent,
    HeaderComponent,
    DatePickerComponent,
    WeekPanelComponent,
    SingleMonthComponent,
    ConfirmPanelComponent,
    TimePickerComponent,
    ShortcutPanelComponent
  ],
  providers: [LocaleProviderModule]
})
export class CalendarModule {}

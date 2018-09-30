import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerViewComponent } from './date-picker-view.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { DatePickerModule } from '../date-picker/date-picker.module';

@NgModule({
  imports: [CommonModule, DatePickerModule, LocaleProviderModule],
  exports: [DatePickerViewComponent],
  declarations: [DatePickerViewComponent],
  providers: [LocaleProviderModule]
})
export class DatePickerViewModule {}

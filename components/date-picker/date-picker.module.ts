import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';

@NgModule({
  imports: [CommonModule, LocaleProviderModule],
  exports: [DatePickerComponent, DatePickerDirective],
  declarations: [DatePickerComponent, DatePickerDirective],
  entryComponents: [DatePickerComponent],
  providers: [DatePickerOptions, LocaleProviderModule]
})
export class DatePickerModule {}

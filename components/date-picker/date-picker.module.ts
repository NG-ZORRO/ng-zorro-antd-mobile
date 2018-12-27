import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { ToastModule } from '../toast/toast.module';
import { ToastComponent } from '../toast/toast.component';

@NgModule({
  imports: [CommonModule, LocaleProviderModule, ToastModule],
  exports: [DatePickerComponent, DatePickerDirective],
  declarations: [DatePickerComponent, DatePickerDirective],
  entryComponents: [DatePickerComponent, ToastComponent],
  providers: [DatePickerOptions, LocaleProviderModule]
})
export class DatePickerModule {}

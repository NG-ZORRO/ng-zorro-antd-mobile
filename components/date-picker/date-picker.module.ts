import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { ToastModule } from '../toast/toast.module';
import { ToastComponent } from '../toast/toast.component';

@NgModule({
  imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerComponent, DatePickerDirective],
  declarations: [DatePickerComponent, DatePickerDirective],
  providers: [DatePickerOptions]
})
export class DatePickerModule {}

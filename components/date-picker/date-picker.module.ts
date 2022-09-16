import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';
import { ToastModule } from 'ng-zorro-antd-mobile/toast';

@NgModule({
  imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerComponent, DatePickerDirective],
  declarations: [DatePickerComponent, DatePickerDirective],
  providers: [DatePickerOptions]
})
export class DatePickerModule {}

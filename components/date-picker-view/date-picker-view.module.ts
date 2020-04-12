import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerViewComponent } from './date-picker-view.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { ToastModule } from '../toast/toast.module';

@NgModule({
  imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerViewComponent],
  declarations: [DatePickerViewComponent]
})
export class DatePickerViewModule {}

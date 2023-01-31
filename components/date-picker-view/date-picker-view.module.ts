import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerViewComponent } from './date-picker-view.component';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';
import { DatePickerModule } from 'ng-zorro-antd-mobile/date-picker';
import { ToastModule } from 'ng-zorro-antd-mobile/toast';

@NgModule({
  imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerViewComponent],
  declarations: [DatePickerViewComponent]
})
export class DatePickerViewModule {}

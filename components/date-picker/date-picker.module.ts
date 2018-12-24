import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { ModalModule } from '../modal/modal.module';
import { Modal } from '../modal/modal.service';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  imports: [CommonModule, LocaleProviderModule, ModalModule],
  exports: [DatePickerComponent, DatePickerDirective],
  declarations: [DatePickerComponent, DatePickerDirective],
  entryComponents: [DatePickerComponent, ModalComponent],
  providers: [DatePickerOptions, LocaleProviderModule, Modal]
})
export class DatePickerModule {}

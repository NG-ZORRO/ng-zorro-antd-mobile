import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PickerViewComponent } from './picker-view.component';
import { PickerModule } from 'ng-zorro-antd-mobile/picker';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';

@NgModule({
  imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule],
  exports: [PickerViewComponent],
  declarations: [PickerViewComponent]
})
export class PickerViewModule {}

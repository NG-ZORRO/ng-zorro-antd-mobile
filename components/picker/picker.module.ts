import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker.component';
import { PickerDirective } from './picker.directive';
import { PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/services/popup.service';
import { PickerService } from './picker.service';

@NgModule({
  imports: [CommonModule],
  exports: [PickerComponent, PickerDirective],
  declarations: [PickerComponent, PickerDirective],
  providers: [PickerOptions, PopupService, PickerService],
  entryComponents: [PickerComponent]
})
export class PickerModule {}

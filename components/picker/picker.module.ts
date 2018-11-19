import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker.component';
import { PickerDirective } from './picker.directive';
import { PickerOptions } from './picker-options.provider';
import { CoreModule } from '../core/core.module';
@NgModule({
  imports: [CommonModule, CoreModule],
  exports: [PickerComponent, PickerDirective],
  declarations: [PickerComponent, PickerDirective],
  providers: [PickerOptions],
  entryComponents: [PickerComponent]
})
export class PickerModule {}

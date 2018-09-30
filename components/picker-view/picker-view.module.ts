import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerViewComponent } from './picker-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PickerViewComponent],
  declarations: [PickerViewComponent]
})
export class PickerViewModule { }

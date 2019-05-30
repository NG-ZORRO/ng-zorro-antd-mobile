import { NgModule } from '@angular/core';
import { ImagePickerComponent } from './image-picker.component';
import { FlexModule } from '../flex/flex.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImagePickerComponent],
  exports: [ImagePickerComponent],
  imports: [CommonModule, FlexModule]
})
export class ImagePickerModule {}

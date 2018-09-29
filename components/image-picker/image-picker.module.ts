import { NgModule } from '@angular/core';
import { ImagePicker } from './image-picker.component';
import { FlexModule } from '../flex/flex.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImagePicker],
  exports: [ImagePicker],
  imports: [CommonModule, FlexModule]
})
export class ImagePickerModule {}

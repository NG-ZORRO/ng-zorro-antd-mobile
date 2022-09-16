import { NgModule } from '@angular/core';
import { ImagePickerComponent } from './image-picker.component';
import { FlexModule } from 'ng-zorro-antd-mobile/flex';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImagePickerComponent],
  exports: [ImagePickerComponent],
  imports: [CommonModule, FlexModule]
})
export class ImagePickerModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { TagComponent } from './tag.component';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [TagComponent],
  exports: [TagComponent]
})
export class TagModule {}

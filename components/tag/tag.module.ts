import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { TagComponent } from './tag.component';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [TagComponent],
  exports: [TagComponent]
})
export class TagModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverItemComponent } from './popover-item.component';
import { IconModule } from 'ng-zorro-antd-mobile/icon';

@NgModule({
  imports: [CommonModule, IconModule],
  exports: [PopoverItemComponent],
  declarations: [PopoverItemComponent]
})
export class PopoverItemModule {}

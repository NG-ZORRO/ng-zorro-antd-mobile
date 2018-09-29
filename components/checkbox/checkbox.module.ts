import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListModule } from '../list/list.module';
import { Checkbox } from './checkbox.component';
import { AgreeItem } from './agree-item.component';
import { CheckboxItem } from './checkbox-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, ListModule],
  declarations: [Checkbox, CheckboxItem, AgreeItem],
  exports: [Checkbox, CheckboxItem, AgreeItem]
})
export class CheckboxModule {}

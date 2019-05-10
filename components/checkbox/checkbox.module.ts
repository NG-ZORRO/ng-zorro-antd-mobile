import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListModule } from '../list/list.module';
import { CheckboxComponent } from './checkbox.component';
import { AgreeItemComponent } from './agree-item.component';
import { CheckboxItemComponent } from './checkbox-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, ListModule],
  declarations: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent],
  exports: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]
})
export class CheckboxModule {}

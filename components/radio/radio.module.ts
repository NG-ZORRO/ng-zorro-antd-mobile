import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Radio } from './radio.component';
import { ListModule } from '../list/list.module';
import { RadioItemGroup } from "./radio-item-group.component";
import { RadioItem } from './radio-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule, ListModule],
  declarations: [Radio, RadioItem, RadioItemGroup],
  exports: [Radio, RadioItem, RadioItemGroup]
})
export class RadioModule {}

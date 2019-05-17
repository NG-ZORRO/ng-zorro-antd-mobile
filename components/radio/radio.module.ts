import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';
import { ListModule } from '../list/list.module';
import { RadioItemGroupComponent } from './radio-item-group.component';
import { RadioItemComponent } from './radio-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule, ListModule],
  declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
  exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
})
export class RadioModule {}

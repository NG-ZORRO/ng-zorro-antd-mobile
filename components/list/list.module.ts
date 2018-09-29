import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { List } from './list.component';
import { ListItem } from './list-item/list-item.component';
import { Brief } from './brief/brief.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [List, ListItem, Brief],
  declarations: [List, ListItem, Brief]
})
export class ListModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BriefComponent } from './brief/brief.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ListComponent, ListItemComponent, BriefComponent],
  declarations: [ListComponent, ListItemComponent, BriefComponent]
})
export class ListModule {}

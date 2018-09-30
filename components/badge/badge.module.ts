import { NgModule } from '@angular/core';
import { Badge } from './badge.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [Badge],
  declarations: [Badge],
  imports: [CommonModule, FormsModule]
})
export class BadgeModule {}

import { NgModule } from '@angular/core';
import { BadgeComponent } from './badge.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [BadgeComponent],
  declarations: [BadgeComponent],
  imports: [CommonModule, FormsModule]
})
export class BadgeModule {}

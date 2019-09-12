import { NgModule } from '@angular/core';
import { TextareaItemComponent } from './textarea-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [TextareaItemComponent],
  declarations: [TextareaItemComponent],
  imports: [CommonModule, FormsModule]
})
export class TextareaItemModule {}

import { NgModule } from '@angular/core';
import { TextareaItem } from './textarea-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [TextareaItem],
  declarations: [TextareaItem ],
  imports: [CommonModule, FormsModule]
})
export class TextareaItemModule {}

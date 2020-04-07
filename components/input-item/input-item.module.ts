import { NgModule } from '@angular/core';
import { InputItemComponent } from './input-item.component';
import { CustomKeyboardComponent } from './custom-keyboard/custom-keyboard.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
  declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class InputItemModule {}

import { NgModule } from '@angular/core';
import { InputItem } from './input-item.component';
import { CustomKeyboard } from './custom-keyboard/custom-keyboard.component';
import { CustomInput } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [InputItem, CustomKeyboard, CustomInput],
  declarations: [InputItem, CustomKeyboard, CustomInput],
  entryComponents: [CustomKeyboard],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class InputItemModule {}

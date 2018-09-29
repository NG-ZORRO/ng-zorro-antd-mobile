import { NgModule } from '@angular/core';
import { Stepper } from './stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';

@NgModule({
  exports: [Stepper],
  declarations: [Stepper],
  imports: [CommonModule, FormsModule, IconModule]
})
export class StepperModule {}

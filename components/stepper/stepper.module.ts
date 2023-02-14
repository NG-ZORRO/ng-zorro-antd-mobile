import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { StepperComponent } from './stepper.component';

@NgModule({
  exports: [StepperComponent],
  declarations: [StepperComponent],
  imports: [CommonModule, FormsModule, IconModule]
})
export class StepperModule {}

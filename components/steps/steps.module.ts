import { NgModule } from '@angular/core';
import { StepsComponent } from './steps.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { StepComponent } from './step/step.component';

@NgModule({
  exports: [StepsComponent, StepComponent],
  declarations: [StepsComponent, StepComponent],
  imports: [CommonModule, FormsModule, IconModule]
})
export class StepsModule {}

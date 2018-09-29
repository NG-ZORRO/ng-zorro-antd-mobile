import { NgModule } from '@angular/core';
import { Steps } from './steps.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';
import { Step } from './step/step.component';

@NgModule({
  exports: [Steps, Step],
  declarations: [Steps, Step],
  imports: [CommonModule, FormsModule, IconModule]
})
export class StepsModule {}

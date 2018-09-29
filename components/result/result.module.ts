import { NgModule } from '@angular/core';
import { Result } from './result.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [Result],
  exports: [Result],
  imports: [CommonModule, IconModule]
})
export class ResultModule {}

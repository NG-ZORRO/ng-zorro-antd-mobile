import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchFeedbackDirective } from './touch-feedback.directive';
import { TouchFeedBackComponent } from './touch-feedback.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TouchFeedbackDirective, TouchFeedBackComponent],
  declarations: [TouchFeedbackDirective, TouchFeedBackComponent],
})
export class TouchFeedbackModule { }

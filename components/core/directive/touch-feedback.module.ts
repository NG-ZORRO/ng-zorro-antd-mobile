import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchFeedbackDirective } from './touch-feedback.directive';
@NgModule({
  imports: [CommonModule],
  exports: [TouchFeedbackDirective],
  declarations: [TouchFeedbackDirective]
})
export class TouchFeedbackModule {}

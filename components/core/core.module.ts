import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchFeedbackDirective } from './directive/touch-feedback.directive';
import { TouchFeedBackComponent } from './directive/touch-feedback.component';

export { PopupService } from './services/popup.service';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TouchFeedbackDirective, TouchFeedBackComponent],
  declarations: [TouchFeedbackDirective, TouchFeedBackComponent]
})
export class CoreModule { }

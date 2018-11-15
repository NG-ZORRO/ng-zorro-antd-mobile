import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchFeedbackDirective } from './directive/touch-feedback.directive';
import { TouchFeedBackComponent } from './directive/touch-feedback.component';
import { PopupService } from './services/popup.service';
export { PopupService } from './services/popup.service';
import { OverlayModule } from '@angular/cdk/overlay';
@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [TouchFeedbackDirective, TouchFeedBackComponent],
  declarations: [TouchFeedbackDirective, TouchFeedBackComponent],
  providers: [PopupService]
})
export class CoreModule { }

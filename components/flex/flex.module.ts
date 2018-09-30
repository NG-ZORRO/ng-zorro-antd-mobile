import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent, FlexItemComponent } from './flex.component';

@NgModule({
  imports: [CommonModule],
  exports: [FlexComponent, FlexItemComponent],
  declarations: [FlexComponent, FlexItemComponent]
})
export class FlexModule {}

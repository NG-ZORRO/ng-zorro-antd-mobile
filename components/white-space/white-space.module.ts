import { NgModule } from '@angular/core';
import { WhiteSpaceComponent } from './white-space.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WhiteSpaceComponent],
  exports: [WhiteSpaceComponent],
  imports: [CommonModule]
})
export class WhiteSpaceModule {}

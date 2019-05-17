import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { ListModule } from '../list/list.module';
export const NZ_BUTTON_DIRECTIVES: Array<any> = [ButtonComponent];

@NgModule({
  declarations: NZ_BUTTON_DIRECTIVES,
  exports: NZ_BUTTON_DIRECTIVES,
  imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
})
export class ButtonModule {}

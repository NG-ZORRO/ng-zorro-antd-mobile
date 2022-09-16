import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { WingBlankModule } from 'ng-zorro-antd-mobile/wing-blank';
import { WhiteSpaceModule } from 'ng-zorro-antd-mobile/white-space';
import { ListModule } from 'ng-zorro-antd-mobile/list';
export const NZ_BUTTON_DIRECTIVES: Array<any> = [ButtonComponent];

@NgModule({
  declarations: NZ_BUTTON_DIRECTIVES,
  exports: NZ_BUTTON_DIRECTIVES,
  imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
})
export class ButtonModule {}

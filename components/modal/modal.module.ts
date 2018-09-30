import { NgModule } from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ListModule } from '../list/list.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { ButtonModule } from '../button/button.module';
import { InputItemModule } from '../input-item/input-item.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ListModule, WingBlankModule, WhiteSpaceModule, ButtonModule, InputItemModule, FormsModule, ReactiveFormsModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [NgSwitch, NgSwitchCase]
})
export class ModalModule {}

import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ModalComponent, ModalServiceComponent } from './modal.component';
import { ListModule } from '../list/list.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { ButtonModule } from '../button/button.module';
import { InputItemModule } from '../input-item/input-item.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertOptions } from './modal-options.provider';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
@NgModule({
  imports: [CommonModule, ListModule, WingBlankModule, WhiteSpaceModule, ButtonModule, InputItemModule, FormsModule, ReactiveFormsModule],
  exports: [ModalComponent, ModalServiceComponent],
  declarations: [ModalComponent, ModalServiceComponent],
  providers: [AlertOptions]
})
export class ModalModule {}

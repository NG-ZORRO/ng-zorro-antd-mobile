import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalServiceComponent } from './modal.component';
import { ModalService } from './modal.service';
import { ListModule } from 'ng-zorro-antd-mobile/list';
import { WingBlankModule } from 'ng-zorro-antd-mobile/wing-blank';
import { WhiteSpaceModule } from 'ng-zorro-antd-mobile/white-space';
import { ButtonModule } from 'ng-zorro-antd-mobile/button';
import { InputItemModule } from 'ng-zorro-antd-mobile/input-item';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupService } from 'ng-zorro-antd-mobile/core';

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    WingBlankModule,
    WhiteSpaceModule,
    ButtonModule,
    InputItemModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [ModalComponent, ModalServiceComponent],
  declarations: [ModalComponent, ModalServiceComponent],
  providers: [ModalService, PopupService]
})
export class ModalModule {}

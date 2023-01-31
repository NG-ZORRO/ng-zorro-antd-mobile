import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ListModule } from 'ng-zorro-antd-mobile/list';
import { NgZorroAntdMobilePipesModule } from 'ng-zorro-antd-mobile/pipes';
import { ActionSheetComponent } from './action-sheet.component';
import { WingBlankModule } from 'ng-zorro-antd-mobile/wing-blank';
import { WhiteSpaceModule } from 'ng-zorro-antd-mobile/white-space';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';
import { TouchFeedbackModule } from 'ng-zorro-antd-mobile/core';
import { PopupService } from 'ng-zorro-antd-mobile/core';
import { ActionSheetService } from './action-sheet.service';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    NgZorroAntdMobilePipesModule,
    ListModule,
    WhiteSpaceModule,
    WingBlankModule,
    LocaleProviderModule,
    TouchFeedbackModule
  ],
  declarations: [ActionSheetComponent],
  exports: [ActionSheetComponent],
  providers: [PopupService, ActionSheetService]
})
export class ActionSheetModule {}

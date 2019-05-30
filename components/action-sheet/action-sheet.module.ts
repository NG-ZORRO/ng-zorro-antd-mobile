import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../list/list.module';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
import { ActionSheetComponent } from './action-sheet.component';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule} from '../white-space/white-space.module';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { PopupService } from '../core/services/popup.service';
import { ActionSheetService } from './action-sheet.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule,OverlayModule, NgZorroAntdMobilePipesModule, ListModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule],
  declarations: [
    ActionSheetComponent
  ],
  exports: [
    ActionSheetComponent
  ],
  entryComponents: [ActionSheetComponent],
  providers: [PopupService, ActionSheetService]
})
export class ActionSheetModule { }

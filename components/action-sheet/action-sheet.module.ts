import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ListModule } from '../list/list.module';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
import { ActionSheetComponent } from './action-sheet.component';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule} from '../white-space/white-space.module';

@NgModule({
  imports: [CommonModule, NgZorroAntdMobilePipesModule, ListModule, WhiteSpaceModule, WingBlankModule, CoreModule],
  declarations: [
    ActionSheetComponent
  ],
  exports: [
    ActionSheetComponent
  ],
  entryComponents: [ActionSheetComponent]
})
export class ActionSheetModule { }

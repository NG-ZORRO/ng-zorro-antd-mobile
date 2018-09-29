import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeBarComponent } from './notice-bar.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [IconModule, CommonModule],
  declarations: [NoticeBarComponent],
  exports: [NoticeBarComponent],
  providers: [],
  entryComponents: []
})
export class NoticeBarModule {}

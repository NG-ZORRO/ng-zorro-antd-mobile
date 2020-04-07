import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticeBarComponent } from './notice-bar.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [IconModule, CommonModule, FormsModule],
  declarations: [NoticeBarComponent],
  exports: [NoticeBarComponent],
  providers: []
})
export class NoticeBarModule {}

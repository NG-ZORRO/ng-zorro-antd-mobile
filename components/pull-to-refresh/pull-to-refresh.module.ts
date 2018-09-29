import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullToRefreshComponent } from './pull-to-refresh.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, IconModule],
  exports: [PullToRefreshComponent],
  declarations: [PullToRefreshComponent]
})
export class PullToRefreshModule {}

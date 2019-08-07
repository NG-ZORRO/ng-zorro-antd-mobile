import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullToRefreshComponent } from './pull-to-refresh.component';
import { IconModule } from '../icon/icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule],
  exports: [PullToRefreshComponent],
  declarations: [PullToRefreshComponent]
})
export class PullToRefreshModule {}

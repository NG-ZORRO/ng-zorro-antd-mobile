import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NzSelectModule,
  NzButtonModule,
  NzGridModule,
  NzMenuModule,
  NzModalModule,
  NzIconModule,
  NzToolTipModule,
  NzPopoverModule,
  NzAffixModule,
  NzAnchorModule
} from 'ng-zorro-antd';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ColorSketchModule } from 'ngx-color/sketch';

import { NzCodeBoxModule } from './nz-codebox/nz-codebox.module';
import { NzHighlightModule } from './nz-highlight/nz-highlight.module';
import { NzNavBottomModule } from './nz-nav-bottom/nz-nav-bottom.module';
import { NzCopyIconModule } from './nz-copy-icon/nz-copy-icon.module';

const ngZorroModules = [
  NzIconModule,
  NzModalModule,
  NzToolTipModule,
  NzGridModule,
  NzSelectModule,
  NzButtonModule,
  NzMenuModule,
  NzPopoverModule,
  NzAffixModule,
  NzAnchorModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzCodeBoxModule,
    NzHighlightModule,
    NzNavBottomModule,
    NzCopyIconModule,
    // third libs
    InfiniteScrollModule,
    ColorSketchModule,
    ...ngZorroModules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzCodeBoxModule,
    NzHighlightModule,
    NzNavBottomModule,
    NzCopyIconModule,
    // third libs
    InfiniteScrollModule,
    ColorSketchModule,
    ...ngZorroModules
  ]
})
export class ShareModule {}

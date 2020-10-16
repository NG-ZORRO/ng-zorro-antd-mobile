import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ColorSketchModule } from 'ngx-color/sketch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

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

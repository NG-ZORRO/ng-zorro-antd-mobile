import { NgModule } from '@angular/core';
import { NzCodeBoxComponent } from './nz-codebox.component';
import { CommonModule } from '@angular/common';
import { NzHighlightModule } from '../nz-highlight/nz-highlight.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const ngZorroModules = [
  NzIconModule,
  NzModalModule,
  NzToolTipModule
];

@NgModule({
  imports     : [ CommonModule, NzHighlightModule, ...ngZorroModules ],
  declarations: [ NzCodeBoxComponent ],
  exports     : [ NzCodeBoxComponent ]
})

export class NzCodeBoxModule {
}


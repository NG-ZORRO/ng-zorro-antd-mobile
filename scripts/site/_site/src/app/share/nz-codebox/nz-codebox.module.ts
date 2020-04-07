import { NgModule } from '@angular/core';
import { NzCodeBoxComponent } from './nz-codebox.component';
import { CommonModule } from '@angular/common';
import { NzHighlightModule } from '../nz-highlight/nz-highlight.module';
import { NzIconModule, NzModalModule, NzToolTipModule } from 'ng-zorro-antd';

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


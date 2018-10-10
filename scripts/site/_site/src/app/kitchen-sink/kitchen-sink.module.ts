import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NgZorroAntdMobileModule } from '../../../../index.showcase';
import { KitchenSinkRoutes, KitchenSinkComponents } from './kitchen-sink.routes';

@NgModule({
  imports: [
    CommonModule,
    // NgZorroAntdMobileModule,
    RouterModule.forChild(KitchenSinkRoutes)
  ],
  declarations: [KitchenSinkComponents]
})
export class KitchenSinkModule { }

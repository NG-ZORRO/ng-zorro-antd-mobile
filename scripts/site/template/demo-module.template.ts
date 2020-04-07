import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
{{imports}}

@NgModule({
  imports     : [
    ShareModule,
    NgZorroAntdMobileModule,
    RouterModule.forChild([
      { path: 'en', component: Demo{{component}}EnComponent },
      { path: 'zh', component: Demo{{component}}ZhComponent },
      {{routes}}
    ])
  ],
  declarations: [
{{declarations}}
  ]
})
export class Demo{{component}}Module {

}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';
import { DEMOComponent } from './_demo/demo.component';
import { routes } from './app.routing.module';
import { environment } from '../environments/environment';
import { NgZorroAntdMobileModule, ModalComponent, ToastComponent, ActionSheetComponent  } from '../../../index.showcase';
@NgModule({
  declarations: [
    AppComponent, DEMOComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    NgZorroAntdModule,
    NgZorroAntdMobileModule.forRoot(),
    RouterModule.forRoot(routes, environment.production ? { useHash: true, preloadingStrategy: PreloadAllModules } : {useHash: true,})
  ],
  providers   : [
    Title,
  ],
  bootstrap   : [ AppComponent ],
  entryComponents: [ModalComponent, ToastComponent, ActionSheetComponent]
})
export class AppModule {
}

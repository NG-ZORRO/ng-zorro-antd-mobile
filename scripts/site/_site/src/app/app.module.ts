import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { ShareModule } from './share/share.module';
import { IconDefinition } from '@ant-design/icons-angular';

import { AppComponent } from './app.component';
import { DEMOComponent } from './_demo/demo.component';
import { routes } from './app.routing.module';
import { environment } from '../environments/environment';
import { NgZorroAntdMobileModule, ModalServiceComponent, ToastComponent, ActionSheetComponent  } from 'ng-zorro-antd-mobile';

import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ LeftOutline, RightOutline ];

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
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#1890ff' }
  ],
  bootstrap   : [ AppComponent ],
  entryComponents: [ToastComponent, ActionSheetComponent, ModalServiceComponent]
})
export class AppModule {
}

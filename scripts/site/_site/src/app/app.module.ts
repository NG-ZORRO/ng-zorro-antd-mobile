import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { ShareModule } from './share/share.module';
import { IconDefinition } from '@ant-design/icons-angular';

import { AppComponent } from './app.component';
import { DEMOComponent } from './_demo/demo.component';
import { routes } from './app.routing.module';
import { environment } from '../environments/environment';

import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
// import { NgZorroAntdMobileModule } from '../../../../../components/ng-zorro-antd-mobile.module';

const ngZorroConfig: NzConfig = {
  icon: { nzTwotoneColor: '#1890ff' }
};
const icons: IconDefinition[] = [LeftOutline, RightOutline];

@NgModule({
  declarations: [AppComponent, DEMOComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    NgZorroAntdMobileModule,
    RouterModule.forRoot(
      routes,
      environment.production ? { useHash: true, preloadingStrategy: PreloadAllModules } : { useHash: true }
    )
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title, { provide: NZ_ICONS, useValue: icons }, { provide: NZ_CONFIG, useValue: ngZorroConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import zh_CN from './locale/zh_CN';
import { LocaleProviderPipe } from './locale-provider.pipe';
import { LOCAL_PROVIDER_TOKEN } from './locale-provider.token';
import { LOCALE_PROVIDER_SERVICE_PROVIDER } from './locale-provider.service';

@NgModule({
  imports: [],
  declarations: [LocaleProviderPipe],
  exports: [LocaleProviderPipe],
  providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: zh_CN }, LOCALE_PROVIDER_SERVICE_PROVIDER]
})
export class LocaleProviderModule {}

import { NgModule } from '@angular/core';
import zh_CN from './languages/zh_CN';
import { LocaleProviderPipe } from './locale-provider.pipe';
import { LOCAL_PROVIDER_TOKEN } from './locale-provider.token';
import { LocaleProviderService } from './locale-provider.service';

@NgModule({
  imports: [],
  declarations: [LocaleProviderPipe],
  exports: [LocaleProviderPipe],
  providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: zh_CN }, LocaleProviderService]
})
export class LocaleProviderModule {}

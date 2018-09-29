import { Pipe, PipeTransform } from '@angular/core';
import { LocaleProviderService } from './locale-provider.service';

@Pipe({
  name: 'localeProvider'
})
export class LocaleProviderPipe implements PipeTransform {
  constructor(private _locale: LocaleProviderService) {}

  transform(keyPath: string): string {
    return this._locale.getLocaleValue(keyPath);
  }
}

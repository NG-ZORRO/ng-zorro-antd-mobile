---
category: Components
title: LocaleProvider
type: Other
---

`LocaleProvider` provides a uniform localization support for built-in text of components.

## Usage

## Providers

`ng-zorro-antd-mobile` provides the token of `LOCAL_PROVIDER_TOKEN` for configuring antd locale text globally.

```typescript

/** config ng-zorro-antd-mobile i18n **/
import { LOCAL_PROVIDER_TOKEN, en_US } from 'ng-zorro-antd-mobile';

@NgModule({
  ...
  imports     : [ NgZorroAntdMobileModule ],
  providers   : [ { provide: LOCAL_PROVIDER_TOKEN, useValue: en_US } ]
})
export class AppModule { }

```

## Service

`ng-zorro-antd-mobile` provides the service of  `LocaleProviderService` to dynamic change the locale text.

```typescript
import { en_US, LocaleProviderService } from 'ng-zorro-antd-mobile';
...
constructor(private localeProviderService:LocaleProviderService) {
}

switchLanguage() {
  this.localeProviderService.setLocale(en_US);
}

```

Note: `en_US` is the package name.

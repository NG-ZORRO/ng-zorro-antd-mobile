---
category: Components
title: LocaleProvider
subtitle: 国际化
type: Other
---

为组件内建文案提供统一的国际化支持。

## 使用

### 全局配置

`ng-zorro-antd-mobile` 提供了一个配置型 token `LOCAL_PROVIDER_TOKEN` 用于全局配置国际化文案，可以在引入模块时初始化语言。

```typescript

/** 配置 ng-zorro-antd-mobile 国际化 **/
import { LOCAL_PROVIDER_TOKEN, en_US } from 'ng-zorro-antd-mobile';

@NgModule({
  ...
  imports     : [ NgZorroAntdMobileModule ],
  providers   : [ { provide: LOCAL_PROVIDER_TOKEN, useValue: en_US } ]
})
export class AppModule { }

```


## 运行时修改

`ng-zorro-antd-mobile` 提供了一个服务 `LocaleProviderService` 用于动态修改国际化文案。

```typescript
import { en_US, LocaleProviderService } from 'ng-zorro-antd-mobile';
...
constructor(private localeProviderService:LocaleProviderService) {
}

switchLanguage() {
  this.localeProviderService.setLocale(en_US);
}

```

注意：`en_US` 是语言包名称，以下表格也遵循同样的规则。

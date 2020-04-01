---
order: 2
title: 在Ionic中使用
---

## 第一个本地实例

我们可以在 **Ionic** 开发框架下使用 **NG-ZORRO-MOBILE**，下面我们用一个简单的实例来说明。

### 1. 安装脚手架工具

> 使用前，务必确认 [Node.js](https://nodejs.org/en/) 已经安装。

```bash
$ npm install -g ionic
```

### 2. 创建一个项目

> 在创建项目之前，请确保 `ionic` 已被成功安装。

执行以下命令，`ionic` 会在当前目录下新建一个名称为 PROJECT-NAME 的文件夹，并自动安装好相应依赖。

```bash
$ ionic start PROJECT-NAME
```

### 3. 初始化配置

进入项目文件夹，执行以下命令后将自动完成 `ng-zorro-antd-mobile` 的初始化配置。

```bash
$ ng add ng-zorro-antd-mobile
```

开发者可以通过增加参数来完成个性化的初始化配置，例如自定义主题，还可以快速生成模板代码，详细可以参考 [脚手架](https://ng.mobile.ant.design/#/docs/schematics/zh) 部分。

### 4. 开发调试

一键启动调试，运行成功后显示欢迎页面。

```bash
$ ionic serve
```

<img style="display: block;padding: 30px 30%;height: 260px;" src="https://img.alicdn.com/tfs/TB15EhGJwHqK1RjSZFPXXcwapXa-500-539.png">

## 自行构建

### 1. 安装组件

```bash
$ npm install ng-zorro-antd-mobile --save
```

### 2.引入模块

在 app.modules.ts 中，全局引入 `ng-zorro-antd-mobile`。

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3.引入样式

在 angular.json 中，全局引入 `ng-zorro-antd-mobile`样式。

```json
"styles": [
  "node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.min.css",
  {
    "input": "src/theme/variables.scss"
  },
  {
    "input": "src/global.scss"
  }
]
```

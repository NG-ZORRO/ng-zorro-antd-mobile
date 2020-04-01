---
order: 2
title: Running in Ionic
---

## First Local Development

**NG-ZORRO-MOBILE** can be used in **Ionic**, let's get started with a simple example.

### 1. Installation

> Please make sure [Node.js](https://nodejs.org/en/) has been installed before use.

```bash
$ npm install -g ionic
```

### 2. Create a New Project

> Please make sure `ionic` has been installed before use.

A new project can be created using ionic CLI tools with the following command.

```bash
$ ionic start PROJECT-NAME
```

### 3. Install `ng-zorro-antd-mobile`

`ng-zorro-antd-mobile` will be installed in the project folder with the following command.

```bash
$ ng add ng-zorro-antd-mobile
```

`ng-zorro-antd-mobile` supports init configuration with schematics, you can get more info in the [schematics](https://ng.mobile.ant.design/#/docs/schematics/en) part.

### 4. Development & Debugging

Run your project now, you can see the image below now.

```bash
$ ionic serve
```

<img style="display: block;padding: 30px 30%;height: 260px;" src="https://img.alicdn.com/tfs/TB15EhGJwHqK1RjSZFPXXcwapXa-500-539.png">

## Customized Work Flow

### 1. Install `ng-zorro-antd-mobile`

```bash
$ npm install ng-zorro-antd-mobile --save
```

### 2.Import module

Add `ng-zorro-antd-mobile` globally in app.modules.ts。

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

### 3.Import style

Add `ng-zorro-antd-mobile` style globally in angular.json。

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

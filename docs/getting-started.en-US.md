---
order: 1
title: Getting Started
---

**NG-ZORRO-MOBILE** is dedicated to providing a **good development experience** for programmers.

> Before delving into **NG-ZORRO-MOBILE**, a good knowledge of [Angular](https://angular.io/) and [JavaScript ES2015](https://babeljs.io/docs/learn-es2015/) is needed.

## Playground

The following StackBlitz demo is the simplest use case, and it's also a good habit to fork this demo to provide a reproducible demo while reporting a bug. Please don't use this demo as a scaffold in production.

- [NG-ZORRO-MOBILE StackBlitz](https://stackblitz.com/edit/ng-zorro-antd-mobile-start?file=src/app/app.component.ts)

## First Local Development

During development, you may need to compile and debug TypeScript code, and even proxy some of the requests to mock data or other external services. All of these can be done with quick feedback provided through hot reloading of changes.

Such features, together with packaging the production version, are covered in this workflow.

### 1. Installation

We strongly recommended to develop Angular with the latest `@angular/cli`, you can install it with the following commands.

> Read [the documentation of `Angular CLI`](https://github.com/angular/angular-cli/wiki) to explore more features.

```bash
$ npm install -g @angular/cli
```

### 2. Create a New Project

A new project can be created using Angular CLI tools.

```bash
$ ng new PROJECT-NAME
```

`@angular/cli` will run `npm install` after a project is created. If it fails, you can run `npm install` by yourself.

### 3. Install `ng-zorro-antd-mobile`

`ng-zorro-antd-mobile` support init configuration with schematics, you can get more info in the [schematics](/#/docs/schematics/en) part.

```bash
$ cd PROJECT-NAME
$ ng add ng-zorro-antd-mobile
```

### 4. Development & Debugging

Run your project now, you can see the image below now.

```bash
$ ng serve --port 0 --open
```

<img style="display: block;padding: 30px 30%;height: 260px;" src="https://img.alicdn.com/tfs/TB15EhGJwHqK1RjSZFPXXcwapXa-500-539.png">

### 5. Building & Deployment

```bash
$ ng build --prod
```

Entry files will be built and generated in `dist` directory, where we can deploy it to different environments.

## Customized Work Flow

If you want to customize your workflow, you can use any scaffold available in the Angular ecosystem. If you encounter problems, you can use our [config](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/tree/master/integration) and modify it.

### 1. Install `ng-zorro-antd-mobile`

```bash
$ npm install ng-zorro-antd-mobile --save
```

### 2. Import module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** import ng-zorro-antd-mobile root module，you should import NgZorroAntdModule instead in sub module **/
    NgZorroAntdMobileModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. Add Styles

Add `node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.min.css` in `angular.json`. You can get more info about how to customize styles at [customize theme](/#/docs/customize-theme/en) part.
```json
{
 "assets": [
    "src/favicon.ico",
    "src/assets"
  ],
  "styles": [
    "node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.min.css",
    "src/styles.css"
  ],
}
```

## Customization

- [Customize Theme](/#/docs/customize-theme/en)
- [Local Iconfont](/#/docs/customize-theme/en)

---
order: 0
title: Ant Design Mobile of Angular <div class="github-btn"><a class="gh-btn" href="https://github.com/NG-ZORRO/ng-zorro-antd-mobile/" target="_blank"><span class="gh-ico" aria-hidden="true"></span><span class="gh-text">Star</span></a><a class="gh-count" target="_blank" href="https://github.com/NG-ZORRO/ng-zorro-antd-mobile/stargazers">{{starCount}}</a></div>
---

这里是 **Ant Design** 移动规范的 **Angular** 实现，服务于阿里巴巴集团数据无线业务。

<div class="pic-plus">
  <img width="150" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  <span>+</span>
  <img height="150" src="https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
.github-btn {
  display:inline-block;
  margin-left:20px;
  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  height: 20px;
  overflow: hidden;
}
.gh-btn,
.gh-count,
.gh-ico {
  float: left;
}
.gh-btn,
.gh-count {
  padding: 2px 5px 2px 4px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 3px;
}
.gh-btn {
  background-color: #eee;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(100%, #eee));
  background-image: -webkit-linear-gradient(top, #fcfcfc 0, #eee 100%);
  background-image: -moz-linear-gradient(top, #fcfcfc 0, #eee 100%);
  background-image: -ms-linear-gradient(top, #fcfcfc 0, #eee 100%);
  background-image: -o-linear-gradient(top, #fcfcfc 0, #eee 100%);
  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);
  background-repeat: no-repeat;
  border: 1px solid #d5d5d5;
}
.gh-btn:hover,
.gh-btn:focus {
  text-decoration: none;
  background-color: #ddd;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), color-stop(100%, #ddd));
  background-image: -webkit-linear-gradient(top, #eee 0, #ddd 100%);
  background-image: -moz-linear-gradient(top, #eee 0, #ddd 100%);
  background-image: -ms-linear-gradient(top, #eee 0, #ddd 100%);
  background-image: -o-linear-gradient(top, #eee 0, #ddd 100%);
  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);
  border-color: #ccc;
}
.gh-btn:active {
  background-image: none;
  background-color: #dcdcdc;
  border-color: #b5b5b5;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}
.gh-ico {
  width: 14px;
  height: 14px;
  margin-right: 4px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.gh-count {
  position: relative;
  display: none; /* hidden to start */
  margin-left: 4px;
  background-color: #fafafa;
  border: 1px solid #d4d4d4;
}
.gh-count:hover,
.gh-count:focus {
  color: #4183C4;
}
.gh-count:before {
  content: '';
  position: absolute;
  display: inline-block;
  width: 5px;
  height: 5px;
  border-left: 1px solid #d4d4d4;
  border-top: 1px solid #d4d4d4;
  top: 50%;
  transform: rotate(-45deg);
  left: -3px;
  margin-top: -3px;
  background-color: inherit;
}
</style>

## 扫码体验

![ng-zorro-mobile](https://img.alicdn.com/tfs/TB1QMx.JwHqK1RjSZJnXXbNLpXa-260-260.png)

## 特性

- 开箱即用的高质量 **Angular** 无线端组件
- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 使用 **TypeScript** 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
- 提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 支持在 Ionic 中运行[[指南]](/#/docs/running-in-ionic/zh)

## 支持环境

> 需要 [polyfills](https://angular.io/guide/browser-support)

- `iOS 7.0+`
- `Android 4.4+`

## 当前版本

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd-mobile.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd-mobile)

## 支持 Angular 版本

目前支持 Angular `^11.0.0` 版本。

## 安装

我们强烈推荐官方的 `@angular/cli` 工具链辅助进行开发，在实际项目开发中，它可以很好的满足对 TypeScript 代码的构建、调试、代理、打包部署等一系列工程化的需求。

```bash
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
$ ng add ng-zorro-antd-mobile
```

> 如果你想了解更多 CLI 工具链的功能和命令，建议访问 [Angular CLI](https://github.com/angular/angular-cli) 了解更多

## 链接

- [首页](https://ng.mobile.ant.design)
- [Angular 官方文档](https://angular.io/)
- [开发脚手架](https://cli.angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://github.com/ReactiveX/rxjs)

## 谁在使用

- [阿里巴巴](https://www.alibaba.com/)

> 如果你的公司和产品使用了 **NG-ZORRO-MOBILE**，欢迎到 [这里](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/3) 留言。

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/blob/master/CONTRIBUTING.md)。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pulls)，或给我们 [报告 Bug](https://ng.mobile.ant.design/issue-helper/#/zh)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)(本指南不提供此项目的实际支持服务！)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `ng-zorro-mobile` 标签。

1. [<img alt="Stack Overflow" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66" width="140" />](https://stackoverflow.com/questions/tagged/ng-zorro-mobile)（English）
2. [<img alt="Segment Fault" src="https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg" width="100" />](https://segmentfault.com/t/ng-zorro-mobile)（中文）
3. [![Gitter](https://img.shields.io/gitter/room/ng-zorro/ng-zorro-antd-mobile.svg?style=flat-square)](https://gitter.im/ng-zorro/ng-zorro-antd-mobile)（English & 中文）
4. 加入钉钉 **NG-ZORRO-MOBILE** 自助服务群（中文）<br/>
   <img src="https://img.alicdn.com/imgextra/i4/O1CN01ylpwqk1F5Gy1VfokO_!!6000000000435-0-tps-1125-1485.jpg" width="300">

---
order: 0
title: Ant Design Mobile of Angular <div class="github-btn"><a class="gh-btn" href="https://github.com/NG-ZORRO/ng-zorro-antd-mobile/" target="_blank"><span class="gh-ico" aria-hidden="true"></span><span class="gh-text">Star</span></a><a class="gh-count" target="_blank" href="https://github.com/NG-ZORRO/ng-zorro-antd-mobile/stargazers">{{starCount}}</a></div>
---

This is the **Angular** implementation of **Ant Design Mobile** specification, serving **Alibaba** big data wireless service.

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

## Scan QR Code

![ng-zorro-mobile](https://img.alicdn.com/tfs/TB1QMx.JwHqK1RjSZJnXXbNLpXa-260-260.png)

## Features

- An enterprise-class UI design language for **Angular** mobile web applications.
- The UI is fully Configurable and Scalable, easily adapt to all kinds of product style.
- Use **TypeScript** to develop, provide type definition files, support type and attribute smart tips for easy business development.
- Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.
- Support running in Ionic[[Guide]](/#/docs/running-in-ionic/en).

## Environment Support

> with [polyfills](https://angular.io/guide/browser-support)

- `iOS 7.0+`
- `Android 4.4+`

## Version

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd-mobile.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd-mobile)

## Angular Support

Now Supports Angular `^11.0.0`.

## Installation

**We recommend using `@angular/cli` to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of angular packages and tooling.

```bash
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
$ ng add ng-zorro-antd-mobile --i18n=en_US
```

> More information about `@angular/cli` [here](https://github.com/angular/angular-cli).

You can also install `ng-zorro-antd-mobile` with npm or yarn

```bash
$ npm install ng-zorro-antd-mobile
```

## Companies using NG-ZORRO-MOBILE

- [Alibaba](https://www.alibaba.com/)

> If your company or product is using **NG-ZORRO-MOBILE**, please let us know [here](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/3)!

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/blob/master/CONTRIBUTING.md) first.

If you'd like to help us improve ng-zorro-antd-mobile, just create a [Pull Request](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pulls). Feel free to report bugs and issues [here](https://ng.mobile.ant.design/issue-helper/#/en).

> If you're new to posting issues, we ask that you read [How To Ask Questions The Smart Way](https://www.catb.org/~esr/faqs/smart-questions.html)(This guide does not provide actual support services for this project!) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use **NG-ZORRO-MOBILE**, please post questions to [<img alt="Stack Overflow" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66" width="140" />](https://stackoverflow.com/questions/tagged/ng-zorro-mobile) using the `ng-zorro-mobile` tag. If you're not finding what you need on StackOverflow, you can find us on [![Gitter](https://img.shields.io/gitter/room/ng-zorro/ng-zorro-antd-mobile.svg?style=flat-square)](https://gitter.im/ng-zorro/ng-zorro-antd-mobile) as well.

As always, we encourage experienced users to help those who are not familiar with **NG-ZORRO-MOBILE**!

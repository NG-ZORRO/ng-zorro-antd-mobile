---
order: 5
title: 更新日志
toc: false
timeline: true
---

`ng-zorro-antd-mobile` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---
## 0.9.4 (2018-10-10)


### Bug Fixes

* **button:** 修复Button带自定义icon显示问题([a3c6150](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a3c6150))
* **ci:** 修复ci node版本号 ([312fce6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/312fce6))
* **components:** 改变Subject引用方式 ([88864ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/88864ab))
* **date-picker:** 修复iOS上无效日期问题 ([6620635](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6620635))
* **demo:** 修复展开代码不可见问题 ([6d65ebb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6d65ebb))
* **pulltorefresh:** 修复下拉刷新的Demo ([8725c4b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8725c4b))
* **input-item:** 修复custom-keyboard无法隐藏问题 ([#21](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/21)) ([9b8f3da](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/9b8f3da))
* **carousel:** 修复走马灯最后一页偶现白屏问题 ([2c5cd92](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2c5cd92))
* **tabs:** 修复TabBar与Tabs混用导致第一次加载时Tabs高亮下划线无法正常渲染问题 ([#7](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/7)) ([6502082](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6502082))
* **steps:** 更新setTimeout时间 ([6da37ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6da37ab))


### Features

* **ci:** 更新ci的配置 ([0b178c4](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0b178c4))
* **list-item:** 移除className依赖 ([#20](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/20)) ([e0850f6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e0850f6))
* **modal:** 增加Modal测试 ([#18](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/18)) ([7c59b61](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/7c59b61))
* **template:** 增加issue和PR模板 ([bc59939](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc59939))

## 0.9.0（2018-09-29）

**NG-ZORRO** 组件库从设计初期就包含了桌面端与无线端两套。

从 2016 年下半年开始，**阿里巴巴集团数据技术及产品部**无线团队就开始基于 **Ant Design Mobile** 设计规范进行 **Angular** 2 代及以上的无线组件研发，并应用在了数据无线业务中。

在 2017 年下半年，**Ant Design Mobile** React 版本开始进行 2.x 重构。为了保持与 React 版本同步，**NG-ZORRO-MOBILE** 中止了对标 **Ant Design Mobile 1.x** 的工作，开始整体组件重构对标 **React 2.x** 版本。

现在 **NG-ZORRO-MOBILE** 已完成了与 **Ant Design Mobile 2.x** 45 个组件的同步工作，基于最新的 **Angular ^6.0.0** 与 **RxJS ^6.0.0** 构建，与 **@angular/cli** 进行了深度整合。同时我们与 **NG-ZORRO DESKTOP** 组件库共享文档和官网构建系统，保持风格统一。

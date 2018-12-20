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

## 0.10.1 (2018-12-20)

### Bug Fixes

* **checkbox:** disabled 状态为 true 时 checked 状态应该锁定 ([#170](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/170)) ([5fe311f](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5fe311f))
* **step and slider-marks:** 修复AOT build 错误 ([#157](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/157)) ([94cb387](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/94cb387))
* **button:** 修复 loading input 只在第一次启动时生效的问题. ([#161](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/161)) ([b54bd04](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b54bd04))

### Features

* **calendar:** ngModel 支持 ([#164](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/164)) ([327d33b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/327d33b))
* **checkbox&radio:** ngModel&Onpush 支持 ([#167](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/167)) ([b1b4807](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b1b4807))
* **inputitem:** 增加 fontColor input ([#156](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/156)) ([0ef2620](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0ef2620))
* **picker:** ngModel 支持 ([#165](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/165)) ([b4af7c7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b4af7c7))
* **progress:** nzm-progress 支持 大于100%的进度 ([#152](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/152)) ([021f7d8](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/021f7d8))
* **switch:** ngModel 支持 ([#145](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/145)) ([6998e40](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6998e40))
* **textarea-item:** ngModel 支持 ([#162](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/162)) ([6b60cca](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6b60cca))

## 0.9.10 (2018-12-06)

### Bug Fixes

* **calendar:** 引入 LocalProvider Module ([#134](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/134)) ([37f20ae](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/37f20ae))
* **checkbox&radio:** 修复回调状态错误([#122](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/122)) ([e709b86](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e709b86))
* **popover:** 修复 Visable Input 除初始化外无效 ([#127](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/127)) ([05313a4](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/05313a4))
* **Searchbar:** 修复 LocaleProviderService 依赖问题 ([#133](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/133)) ([1ac6008](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1ac6008))
* **TabBar:** 移除对 TabsModule 的依赖([#135](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/135)) ([eab449b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/eab449b))

### Features

* **badge:** 在 text 文案外层增加 span 标签 ([#125](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/125)) ([e362320](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e362320))
* **popover:** 增加自定义样式支持 ([#129](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/129)) ([26bbe53](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/26bbe53)), closes [#120](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/120)
* **PickerView:** 引入 PickerModule 和 LocaleProviderModule
([#141](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/141)) ([52ebaeb](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/52ebaeb))
* **popover:** 增加是否使用组件内部的点击自动关闭 opover
([#130](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/130)) ([71ea780](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/71ea780))

## 0.9.9 (2018-11-27)

### Bug Fixes

* **locale-provider:** 让 locale-provider 跨模块生效; ([#113](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/113)) ([e09f0a3](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e09f0a3))
* **picker:** 引入 OverlayModule ([#111](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/111)) ([722ee27](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/722ee27))
* **grid:** 修复item数超过数量会出错的bug ([#119](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/119)) ([34e1dd7](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/34e1dd7))


### Features

* **locale:** 增加丹麦语 locale ([5361536](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/5361536))


## 0.9.7 (2018-11-14)

### Bug Fixes

* **action-sheet:** 修复点击item事件会响应背景点击事件 ([#98](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/98)) ([b24bcbc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/b24bcbc))
* **action-sheet:** 修复遗漏点击item事件 ([#99](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/99)) ([1697cda](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/1697cda))
* **badge:** 修复 badge 单测错误 ([#83](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/83)) ([43eb155](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/43eb155))
* **carousel:** 修复只有一个 item 时宽度不对的问题 ([#86](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/86)) ([bb59fe7](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bb59fe7))
* **date-picker:** 修复没有 locale 输入时报错 ([#103](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/103)) ([2aa43aa](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2aa43aa))
* **input-item:** 使用 ngzone.run set value ([#101](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/101)) ([ed2b243](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/ed2b243))
* **LocaleProvider:** 导出 LOCAL_PROVIDER_TOKEN ([#96](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/96)) ([16922a2](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/16922a2))
* **tabs:** 修复 MacOS Safari及 iOS 9.3以下版本的显示问题 ([#106](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/106)) ([ba9e43b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/ba9e43b))
* **Toast:** 修复 toast 在 init 初始化时报错 ([#93](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/93)) ([49d52be](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/49d52be))
* **showcase:** 更改展开代码 icon ([#97](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/97)) ([8bcfda5](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8bcfda5))

### Features

* **date-picker-view:** 增加indicatorStyle参数 ([#104](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/104)) ([e97acbd](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e97acbd))
* **picker:** 增加动态初始化方式 ([#105](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/105)) ([90866df](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/90866df))

## 0.9.6 (2018-10-24)

### Bug Fixes

* **carousel:** 触摸响应时禁止冒泡传递([#61](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/61)) ([c44ba59](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/c44ba59))
* **carousel:** 当vertical:false时修复走马灯无宽度问题([#67](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/67)) ([8dd703f](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8dd703f))
* **carousel:** 只有2页幻灯片时修复 mousemove 问题 ([#56](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/56)) ([bc02951](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc02951))
* **icon:** 修复 icon 的 line-height ([#46](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/46)) ([#47](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/47)) ([28d76f2](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/28d76f2))
* **pulltorefresh:** 修复 drag up touch 问题 ([#51](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/51)) ([8b905cc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8b905cc))
* **textarea:** 修复 textarea-item test case 错误 ([#50](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/50)) ([f2bbdfb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/f2bbdfb))
* **showcase:** 替换正确的钉钉QR码 ([#74](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/74)) ([b4e7483](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/b4e7483))

---
## 0.9.5 （2018-10-15）

### Bug Fixes

* **codebox:** 修复英文网站中弹出代码框显示中文“返回“bug ([#35](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/35)) ([0720fdc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0720fdc))
* **codebox:** 修复StackBliz中的问题 ([#41](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/41)) ([8adcbb0](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8adcbb0))
* **package.json:** 取消Package Json的版本号 ([#27](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/27)) ([fc3cf65](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/fc3cf65))
* **popover:** 为 PopoverOptions 加入providers ([#30](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/30)) ([8f9e1d3](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8f9e1d3))
* **textarea:** 修复textarea test case错误 ([#36](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/36)) ([97639fc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/97639fc))
* **package.json:** 修复npm run start在windows中无法运行的错误 ([#42](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/42)) ([68a0453](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/68a0453))
* **tabs:** 修复swipeable为false时useOnPan依然生效的问题 ([#43](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/43)) ([2d63730](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2d63730))

### Features

* **nav-bar:** 增加 icon string类型支持 ([#38](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/38)) ([4a89b0c](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/4a89b0c))

### Docs

* **README:** 在README中增加更多的状态指示 ([#44](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/44)) ([a59797e](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a59797e))

---
## 0.9.4 (2018-10-10)


### Bug Fixes

* **button:** 修复Button带自定义icon显示问题([a3c6150](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a3c6150))
* **ci:** 修复ci node版本号 ([312fce6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/312fce6))
* **components:** 改变Subject引用方式 ([88864ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/88864ab))
* **date-picker:** 修复iOS上无效日期问题 ([6620635](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6620635))
* **demo:** 修复展开代码不可见问题 ([6d65ebb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6d65ebb))
* **pulltorefresh:** 修复下拉刷新的Demo ([8725c4b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8725c4b))
* **input-item:** 修复custom-keyboard无法隐藏问题 ([#21](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/21)) ([9b8f3da](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/9b8f3da))
* **carousel:** 修复走马灯最后一页偶现白屏问题 ([2c5cd92](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2c5cd92))
* **tabs:** 修复TabBar与Tabs混用导致第一次加载时Tabs高亮下划线无法正常渲染问题 ([#7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/7)) ([6502082](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6502082))
* **steps:** 更新setTimeout时间 ([6da37ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6da37ab))


### Features

* **ci:** 更新ci的配置 ([0b178c4](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0b178c4))
* **list-item:** 移除className依赖 ([#20](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/20)) ([e0850f6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e0850f6))
* **modal:** 增加Modal测试 ([#18](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/18)) ([7c59b61](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/7c59b61))
* **template:** 增加issue和PR模板 ([bc59939](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc59939))

## 0.9.0（2018-09-29）

**NG-ZORRO** 组件库从设计初期就包含了桌面端与无线端两套。

从 2016 年下半年开始，**阿里巴巴集团数据技术及产品部**无线团队就开始基于 **Ant Design Mobile** 设计规范进行 **Angular** 2 代及以上的无线组件研发，并应用在了数据无线业务中。

在 2017 年下半年，**Ant Design Mobile** React 版本开始进行 2.x 重构。为了保持与 React 版本同步，**NG-ZORRO-MOBILE** 中止了对标 **Ant Design Mobile 1.x** 的工作，开始整体组件重构对标 **React 2.x** 版本。

现在 **NG-ZORRO-MOBILE** 已完成了与 **Ant Design Mobile 2.x** 45 个组件的同步工作，基于最新的 **Angular ^6.0.0** 与 **RxJS ^6.0.0** 构建，与 **@angular/cli** 进行了深度整合。同时我们与 **NG-ZORRO DESKTOP** 组件库共享文档和官网构建系统，保持风格统一。

---
order: 5
title: 更新日志
toc: false
timeline: true
---

`ng-zorro-antd-mobile` 严格遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

## 5.0.0(2021-08-06)

### Features

- **all:** 升级支持 Angular 12 ([#797](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/797)) ([26201a9](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/26201a9b70688ee08f5e9d992703d8367fc13d9e))
- **security:** 增加 codeql-analysis ([a6f95cf](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/a6f95cf6b1b7f7a7f494dd6722cb7ac8adf250ee))
- **stepper:** 只允许输入为数字格式 ([#791](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/791)) ([71fb188](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/71fb188fe2bb3dd3ea54da749643d3e306cb04ab))
- **core:** 修复应用启动错误 ([#792](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/792)) ([1d9a4a6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1d9a4a61919cffe88e6c46fd633d6f6449ee0d13))

### Bug Fixes

- **input-item:** 修复小数格式问题 ([#794](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/794)) ([c10877a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c10877a21d535fe8353876e9a9864a436e43804d))
- **toast:** 修复在 ngOnInit 唤起报错 ([#795](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/795)) ([77f36ab](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/77f36ab7df3f8e74c63059b7e9333f9554d26f5c))
- **website:** 更新钉钉二维码；修复文档中 Angular 支持版本号; ([#788](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/788)) ([42e77c0](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/42e77c06df80a760c48f80dd983c5f92c6a34f33))

## 4.0.0(2020-12-31)

### Features

- **all:** 升级至 Angular 11 ([#773](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/773)) ([7917100](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7917100cfc2d5c81ca18ddc47cbccd748e06de95))

### Bug Fixes

- **carousel:** 修复激活 slider 尺寸自适应引发的错误 ([#767](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/767)) ([a6ae246](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/a6ae24679362b70e1f3dc4f5b6516c5b8cbeb46e))
- **pagination:** 增加 disabled 支持 ([#772](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/772)) ([d798cc9](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/d798cc9c7c1ca508d9fdf3165825577451e1b814))
- **radio:** 修复不使用 list wrapper 时 listitem 无法点击的问题 ([#756](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/756)) ([9089a24](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/9089a247eebb631b48c24290f65febbbcf860ac8))
- **steps:** 增加 current 支持 ([#762](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/762)) ([60d6b54](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/60d6b54860b857c12fe08eea9c3aea4d9b84ed81))

## 3.0.3(2020-10-21)

### Features

- **all:** 支持 Angular 10 ([#741](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/741)) ([e81e65c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e81e65c0b88eb44cf2692b29d7ebe69e1a55d171))
- **website:** 替换 QRCode ([#739](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/739)) ([b014e17](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b014e1733c8ee5f742388adb830877d2f65925d0))
- **package.json:** marked 版本升级至 1.1.1 ([#743](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/743)) ([abc11b9](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/abc11b94cb5af24fb190d48b3a6ba72192941ddc))

### Bug Fixes

- **tabbar:** fix title input ts error ([#753](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/753)) ([42b17e2](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/42b17e2817e59aaf8b382ae18751db260bfd6fb8))

## 2.0.7(2020-07-20)

### Bug Fixes

- **date-picker-view:** 增加异步数据输入支持 ([#718](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/718)) ([f2748f0](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f2748f0f5ea5624dfa87816a28d91e9bee0f67a8))
- **drawer:** 修复 drawer 在 tabs 中闪现的问题你 ([#724](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/724)) ([c4b56e0](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c4b56e02af4f03ecd1f2dfbf921d78feef8503b4))
- **image-picker:** 修复旋转不生效的问题 ([#717](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/717)) ([364d368](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/364d368e7cbb2f54cf8feab83f51f9ad8f023e55))
- **modal:** 修复 `maskClosable` 不生效的问题([#722](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/722)) ([8aae09b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/8aae09b5fb315d9c539f82ae2f6b77f9891b6aa1))

### Features

- **input-item:** 增加 [compositionFilter] 输入 ([#735](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/735)) ([1d73f30](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1d73f30ca52454f25ae14e89fb368b80914211d6))

## 2.0.3(2020-06-15)

### Bug Fixes

- **accordion:** 不再支持 innerHtml ([#695](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/695)) ([6ac0642](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6ac0642e96920f20e34765d9ba9ff539e6e5ab05))
- **action-sheet:** import TouchFeedbackDirective ([#669](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/669)) ([c5da920](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c5da92037e5c448eca3c27d09aae3d425eadb279))
- **date-picker:** 修复 mindate 改变月份错误 ([#685](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/685)) ([21e4df9](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/21e4df92cfdeb1425fb38ed99372e0de12b94059))
- **datepickerview:** 修复 datePickerOptions 单例 ([#708](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/708)) ([3a32fdd](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3a32fdd080885434a87910e99dc536cbed275b85))
- **grid:** 修复 columnNum 与 carouselMaxRow 无法正常运行问题 ([#704](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/704)) ([920676d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/920676d9d0d1b00598c65bd549b5028a344d36c7))
- **picker:** 修复 binding 赋值问题 ([#683](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/683)) ([f2ac758](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f2ac7581986d4dff78a0990afb43b3a4baee5b42))
- **stackblitz:** 修复 stackblitz @angular/cdk 依赖版本 ([#667](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/667)) ([6b27539](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6b27539b544201685b631af452e2bdc8bef9404a))
- **tabs:** 修复 tabs 宽度计算精度丢失的问题 ([#668](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/668)) ([c1fc617](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c1fc6173b2d3590d04abb3e3780d6f1510b3457b))
- **textarea-item:** 修复 ngModel 写入后计数器没有运行的问题 ([#680](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/680)) ([45f9759](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/45f97591304ed89f8b655db3de74d3a38a0cb712))
- **pulltorefresh:** 修复元素高度 ([#698](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/698)) ([5db6c0b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5db6c0bcaf2481cdad450f79eafa8c1c7821344f))

### Features

- **accordion:** 增加 nzm- selector ([#666](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/666)) ([3cc3279](https://github.com/NG-ZORRO/

## 1.0.6(2020-06-11)

### Bug Fixes

- **date-picker:** 修复 mindate 改变月份错误 ([#686](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/686)) ([6ebc91c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6ebc91c5d634ad1b7ccf5d7b71a839fddaa17249))
- **datepickerview:** 修复 datePickerOptions 单例 ([#709](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/709)) ([f973f87](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f973f870b30ebed444cdee09928cf4b3fa6e352c))
- **grid:** 修复 columnNum 与 carouselMaxRow 无法正常运行问题 ([#705](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/705)) ([6e3fd25](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6e3fd2576f4a4259cfc680c365bd6d643cb89a4c))
- **picker:** 修复 binding 赋值问题 ([#684](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/684)) ([0974096](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/097409694db60fc49cbb016c97684bfc9ff350d6))
- **pulltorefresh:** 修复元素高度 ([#699](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/699)) ([eb9fd9c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/eb9fd9cd71e4b0a061ed2d17834854683fbebf91))

## 2.0.1(2020-04-13)

### Bug Fixes

- **locale-provider:** 修复 provider 中依赖 LocaleProviderModule 引发的错误 ([#662](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/662)) ([7f52fca](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7f52fca3950e67602c8578e42664ac566861437d))

## 2.0.0(2020-04-07)

### Features

- **all:** 支持 Angular 9 ([#652](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/652)) ([2150bcb](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/2150bcb955596b9297e34cc7fa6dae1d12625226))

## 1.0.5(2020-03-17)

### Features

- **steps:** step title&description input 增加 templateRef 类型 ([#650](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/650)) ([bb41050](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/bb4105060cad850d9d6d106f8b6b2521bb6a5902))

## 1.0.4(2020-03-10)

### Bug Fixes

- **carousel:** 修复走马灯 slide 宽度问题 ([#646](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/646)) ([b26eb8c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b26eb8c9517c8a81f4169bebf2033846e99e1b17))
- **input-item:** 修复光标一直返回到最后的问题 ([#639](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/639)) ([0f032ad](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0f032adae19d4827bde17f4952124ccce5421216))

## 1.0.3(2020-01-08)

### Bug Fixes

- **date-picker:** 修复时间选择范围问题 ([#627](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/627)) ([2225539](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/22255394a5d9cf9bb19cc0a647bdb33a106a31c0))
- **date-picker:** 修复 mode:time 状态下时间选择范围问题 ([#629](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/629)) ([e685ffa](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e685ffa65e533c529734ebe8eca85baddf01d89d))
- **datepicker:** 修复单测失败例子 ([#632](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/632)) ([7183052](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/71830525f4d7445fff95e1562c28dfcd940e8989))
- **drawer:** 修复无法遮盖背景元素的问题 ([#631](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/631)) ([8794e89](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/8794e895364b53f068702ebbfd0f200df1bdcd40))

## 1.0.2(2019-12-04)

### Bug Fixes

- **accordion:** 修复快速点击 accordion 展开时错误([#614](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/614)) ([567ff59](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/567ff59))
- **calendar:** 从 cell 而非 row 中获取 extra cell class 名([#620](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/620)) ([0a11514](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0a11514))
- **carousel:** 修复 resize 时 carousel slide 展示错误 ([#615](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/615)) ([3ff1894](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3ff1894))
- **checkbox:** 修复 disabled 状态为 true 时已点击的初始状态([#598](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/598)) ([85511ca](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/85511ca))
- **datepicker:** 修复中文提示文案错误 ([#616](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/616)) ([71576bb](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/71576bb))
- **list:** 修复 inputitem demo ([#606](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/606)) ([0a50951](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0a50951))
- **list&range:** 删除 console.log ([#610](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/610)) ([762f200](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/762f200))
- **pagination:** 修复设置 locale 不生效错误 ([#611](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/611)) ([756f5be](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/756f5be))
- **searchbar:** 修复用户提交时键盘未收起的问题 ([#596](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/596)) ([5e20a54](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5e20a54))
- **steps:** 修复 step import async 错误 ([#617](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/617)) ([ef4153c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/ef4153c))
- **tabs:** 让 popup 类组件在 Tabs 和 TabBar 里正常的面板里弹出 ([#621](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/621)) ([89bd218](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/89bd218))

## 1.0.1(2019-09-24)

### Bug Fixes

- **picker:** 去除对 lodash isEqual 的引用 ([#592](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/592)) ([ee6f4b6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/ee6f4b6))

## 1.0.0(2019-09-23)

### Bug Fixes

- **date-picker:** 修复快速滑动时显示 NAN 的错误 ([#589](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/589)) ([3e63d20](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3e63d20))

- **picker:** 修复 data input 为一个函数时引发的选择错误 ([#586](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/586)) ([26a07d7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/26a07d7))

## 1.0.0-rc.0(2019-09-16)

### Bug Fixes

- **carousel:** 当设置为左右滑动方向时忽略垂直方向的事件 ([#581](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/581)) ([abb3a0a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/abb3a0a))

- **carousel:** 修复走马灯样式错误 ([#582](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/582)) ([004e4e0](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/004e4e0))

- **toast:** 修复 toast z-index ([#580](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/580)) ([7350600](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7350600))

- **steps:** 修复 steps 状态 icon 错误 ([#577](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/577)) ([fef7568](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/fef7568))

- **accordion:** 修复 accordion 无法自动展开错误 ([#575](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/575)) ([19b90da](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/19b90da))

- **pull-to-refresh:** 修复 pull-to-refresh direction 属性为空时的运行错误 ([#573](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/573)) ([6df7d7c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6df7d7c))

- **textarea-item:** 修复 textarea-item 自动高度错误 ([#571](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/571)) ([5aa3149](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5aa3149))

- **swipe-action:** 修复 swipe-action 在 ionic 中无法正常运行错误 ([#569](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/569)) ([f2d1600](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f2d1600))

## 1.0.0-beta.2(2019-09-05)

### Bug Fixes

- **list:** 修复 typescript 格式导致的编译报错 ([#565](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/565)) ([46e66f2](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/46e66f2))

- **website:** 修复官网 version 映射 ([#562](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/562)) ([3744833](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3744833))

- **codebox:** 修复 stackblitz package 依赖展示错误 ([#561](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/561)) ([61dcc28](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/61dcc28))

- **codebox:** 修复复制代码为对象的错误 ([#560](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/560)) ([630f63c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/630f63c))

- **codebox:** 修复 rawCode 转换错误 ([#558](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/558)) ([ddb89cb](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/ddb89cb))

- **website:** 修复官网运行错误 ([#557](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/557)) ([b44a095](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b44a095))

## 1.0.0-beta.1(2019-09-03)

### Bug Fixes

- **stepper:** 修复用户输入时按钮状态错误 ([#554](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/544)) ([0739e2c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0739e2c))

- **modal:** 修复函数调用错误 ([#543](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/543)) ([53cde92](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/53cde92))

### Features

- **All:** 支持 Angular 8.0 ([#553](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/pull/553)) ([c2fd82d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c2fd82d))

## 1.0.0-beta.0(2019-08-21)

### BreakChange

- **toast:** toast 重构 ([454b55c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/454b55c))

- **picker & modal & action-sheet:** popup 相关重构
  ([62c4d60](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/62c4d60))

- **input-item:** 增加 label content API ([#527](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/527)) ([109dbd6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/109dbd6))

### Bug Fixes

- **modal:** 修复 visable 默认值为 false ([#535](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/535)) ([1f6391e](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1f6391e))
- **radio:** 删除重复 API ([#508](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/508)) ([2fc7350](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/2fc7350))
- **textarea-item:** 修复自动高度错误([#501](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/501)) ([#502](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/502)) ([50ade9b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/50ade9b))
- **picker:** 修复 okText & dismissText API ([#499](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/499)) ([0c9bc52](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0c9bc52))

### Features

- **action-sheet:** 增加单元测试 ([#515](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/515)) ([b74db68](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b74db68))
- **carousel:** 增加单元测试 ([#511](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/511)) ([7f80c13](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7f80c13))
- **input-item:** 增加 label content API ([#527](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/527)) ([109dbd6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/109dbd6))
- **input-item:** 修复 input-item cursor bug ([#500](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/500)) ([9f9f579](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/9f9f579))
- **README:** 增加 CodeFactor&Twitter 标签 ([#490](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/490)) ([6fe3caf](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6fe3caf))

## 0.12.5(2019-06-25)

### Bug Fixes

- **carousel:** 修复只包含一个元素时的宽度错误 ([#482](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/482)) ([7ab3cba](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7ab3cba))

## 0.12.4 (2019-06-24)

### Bug Fixes

- **carousel:** 修复竖直模式时宽度错误 ([#477](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/477)) ([b0ca5ba](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b0ca5ba))
- **date-picker:** 增加 minuteStep 支持 ([#479](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/479)) ([246c222](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/246c222))

### Features

- **calendar:** 增加单测覆盖范围 ([#474](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/474)) ([7dd77ba](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7dd77ba))
- **input-item:** 修复 clear 时出现的值错误 ([#472](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/472)) ([51772f7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/51772f7))

## 0.12.3 (2019-06-05)

### Bug Fixes

- **date-picker:** 修复时间计算错误 ([#456](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/456)) ([413178d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/413178d))
- **date-picker:** 修复在 safari 中日期初始化可能出现无效日期 ([#454](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/454)) ([87c62a3](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/87c62a3))
- **radio-item-group:** 修复可选项在运行时变更时导致选中状态出错 ([#458](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/458)) ([#463](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/463)) ([0e3ca04](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0e3ca04))
- **stackblitz:** 为 @angular/compiler 设置正确的版本 ([#466](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/466)) ([3bc4053](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3bc4053))
- **picker:** 修复返回结果错误 ([#462](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/462)) ([eeabc11](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/eeabc11))

## 0.12.2 (2019-05-21)

### Bug Fixes

- **popupservice:** 在相关组件的 providers 里添加 popupservice ([#449](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/449)) ([a14ea6b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/a14ea6b))

### Features

- **toast:** 支持 top 和 bottom 两种位置 ([#450](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/450)) ([77c326a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/77c326a))

## 0.12.1 (2019-05-20)

### Bug Fixes

- **calendar:** 修复 calendar timepicker 显示标题错误 ([#444](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/444)) ([7ad01ba](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7ad01ba))
- **mobile site:** 修复无线站点中的组件名称格式错误 ([#415](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/415)) ([f106942](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f106942))
- **picker:** 修复 picker 样式错误 ([#434](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/434)) ([c09b85e](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c09b85e))
- **badge:** 修复文案从空到非空时 badge 错误 ([#441](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/441)) ([fab7312](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/fab7312))
- **carousel:** 修复横竖屏切换时未动态调整的错误 ([#411](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/411)) ([4ff06d9](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/4ff06d9))

### Features

- **imagepicker:** 增加 capture&disableDelete API ([#410](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/410)) ([cfd733e](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/cfd733e))
- **swipe-action:** 增加 className api ([#436](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/436)) ([3a976c5](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3a976c5))
- **toast:** 提供一种新的 API 方案自注入 ([#426](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/426)) ([ad31989](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/ad31989))

## 0.12.0 (2019-04-30)

### BreakChange

- **tabbar:** 使用 TabBarItem 替代 TabPane 和 TabBarTab, 使用上更加简单
- **grid:** 将 OnClick 修改为 onClick

### Bug Fixes

- **grid:** 将 OnClick 修改为 onClick ([#394](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/394)) ([bf3039a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/bf3039a))
- **schematics:** 将 url 从 https 切换到 http ([#393](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/393)) ([0c3ad0f](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0c3ad0f))
- **stepper:** 修复 stepper 不可用的问题 ([#405](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/405)) ([acb2a95](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/acb2a95))

### Features

- **all:** 公开导出组件库 API ([#389](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/389)) ([dd9af23](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/dd9af23))
- **checkboxitem&radioitem:** 支持 wrap API ([#406](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/406)) ([db8a6c8](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/db8a6c8))
- **checkboxItem&radioItem:** API 与 listItem 同步 ([#408](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/408)) ([6cf232f](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6cf232f))
- **dependencies:** 更新三方依赖 ([#401](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/401)) ([dcf4a61](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/dcf4a61))
- **docs:** 更新 README.md ([#398](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/398)) ([80bd1b5](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/80bd1b5))
- **styles:** 与 ant design mobile of react 样式同步 ([#403](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/403)) ([5c77b8c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5c77b8c))
- **tabs&tabbar:** tabs&tabbar 重构，支持动态增加面板、预加载以及自定义设置标签页尺寸，提升整体性能 ([#399](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/399)) ([f82ceab](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f82ceab))

### Performance Improvements

- **code-box:** 优化 stackblitz 中 demo 参数. ([#404](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/404)) ([9c39051](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/9c39051))
- **site:** 更新首页 ([#397](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/397)) ([92ae470](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/92ae470))
- **tabs&tabbar:** 默认将 prerenderingSiblingsNumber 设置为-1，预加载逻辑与 React 版本能保持一致 ([#407](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/407)) ([1db49eb](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1db49eb))

## 0.11.9 (2019-04-18)

### Bug Fixes

- **calendar:** 修复样式更新后出现的样式问题 ([#385](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/385)) ([cee534a](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/cee534a))
- **datepickerview:** 修复日选择无法选中 31 号的问题 ([#383](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/383)) ([aac65b6](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/aac65b6))
- **inputitem:** 修复样式更新后出现的样式问题 ([#377](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/377)) ([97bf63e](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/97bf63e))
- **picker:** 修复样式更新后出现的样式问题 ([#387](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/387)) ([d5128af](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/d5128af))
- **carousel:** 修复走马灯不在视图内且页面没重新渲染的情况下会停止轮播的问题 ([#382](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/382)) ([362245f](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/362245f))

### Features

- **styles:** 与 React 版本进行样式同步 ([#376](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/376)) ([0c4b966](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0c4b966))
- **textarea:** 更改样式 ([#379](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/379)) ([bcd5d1f](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/bcd5d1f))

### Performance Improvements

- **site:** 资源链接默认使用 https ([#373](//github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/373)) ([cc693e5](//github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/cc693e5))

## 0.11.8 (2019-04-04)

### Bug Fixes

- **tabbar:** 修复 tabbar 设置 activeTab 错误并修改 demo ([#345](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/345)) ([3f8becd](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3f8becd))
- **accordion:** 修复 accordion 支持异步加载 accordionPanel ([#355](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/355)) ([924bcc2](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/924bcc2))
- **carousel:** 修复 carousel vertical 模式异常 ([#344](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/344)) ([e9ae898](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e9ae898))
- **inputitem:** 修复 inputitem extra 模板支持 ([#353](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/353)) ([aeb3cbe](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/aeb3cbe))
- **inputitem:** 修复 inputitem label 样式初始化问题 ([#364](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/364)) ([bd11c54](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/bd11c54))
- **picker:** 修复 异步 picker 需要更新选中数据 ([#346](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/346)) ([fbcc0cf](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/fbcc0cf))
- **picker:** 修复 picker wrap z-index 与 mask 保持一致 ([#362](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/362)) ([3f2a83c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3f2a83c))

### Features

- **carousel:** carousel 支持拖拽 ([#350](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/350)) ([5dc49a4](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5dc49a4))

### Performance Improvements

- **modal:** modal 引入 coremodule ([#348](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/348)) ([a3b9014](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/a3b9014))

## 0.11.7 (2019-03-12)

### Bug Fixes

- **assets:** 修复 logo 名称 ([#319](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/319)) ([475eb14](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/475eb14))
- **grid:** 修复 contentType 返回错误 ([#320](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/320)) ([dd88a52](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/dd88a52))
- **input-item:** 修复 custom keyboard input 值 ([#330](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/330)) ([a73a7e8](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/a73a7e8))
- **popupservice:** 修复 popupservice 获取 component 名称时 运行时报错 ([#333](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/333)) ([b69ee5a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b69ee5a))
- **textarea-item:** 修复 textarea-item 值保护 ([#331](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/331)) ([ffe4f8d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/ffe4f8d))

## 0.11.6 (2019-03-04)

### Bug Fixes

- **accordion:** 修复 accordion template 支持 ([#307](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/307)) ([15f90a6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/15f90a6))
- **carousel:** 修复 carousel 检测高度变化 ([#290](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/290)) ([86be97d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/86be97d))
- **carousel:** 修复设置 selecedindex 值超出当前最大值的问题 ([#315](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/315)) ([193a4d6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/193a4d6))
- **drawer:** 更新文档 ([#311](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/311)) ([1d53a15](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1d53a15))
- **inputitem:** 修复输入中文时 onChange 不响应的问题 ([#299](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/299)) ([e7a925d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e7a925d))
- **PopupService:** 修复多 PopupService 运行错误 ([#292](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/292)) ([3717db7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3717db7))
- **swipe-action:** 修复无法响应滚动事件问题([#300](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/300)) ([98bd525](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/98bd525))
- **tabs:** 禁止 descendants ([#296](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/296)) ([5ed613e](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5ed613e))
- **date-picker:** 修复当 ngmodel 为 null 时选择出错的问题 ([#310](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/310)) ([58e88ca](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/58e88ca))

### Features

- **list:** renderHeader 和 renderFooter 支持 String 和 Template 输入 ([#313](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/313)) ([546b38d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/546b38d))

### Performance Improvements

- **logo:** 更换全新的 logo ([#314](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/314)) ([a66be30](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/a66be30))

## 0.11.5 (2019-02-21)

### Bug Fixes

- **actionsheet:** 将模板中 title 改成 message ([#283](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/283)) ([f850e1a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f850e1a))
- **date-picker-view:** 修复 input 不生效的问题 ([#287](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/287)) ([7d74e54](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/7d74e54))
- **stepper:**  修复 float 计算 bug ([#280](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/280)) ([5cd1f6c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5cd1f6c))
- **swipe-action:** 修复 autoclose 不生效 bug ([#282](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/282)) ([acb180e](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/acb180e))

### Performance Improvements

- **tabbar:** 扩大 tabbartab 点击区域 ([#286](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/286)) ([5830cd6](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5830cd6))

## 0.11.4 (2019-02-14)

### Bug Fixes

- **carousel:** 修复设置 Carousel 选中序列失败的问题 ([#269](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/269)) ([55ae6d2](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/55ae6d2))
- **input-item:** 修复 iOS9 中文字符输入问题 ([#249](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/249)) ([f421746](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/f421746))
- **notice-bar:** 修复 notice-bar-card 颜色问题 ([#274](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/274)) ([53f5b45](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/53f5b45))
- **searchbar:** 修复 iOS9 中文字符输入问题 ([#250](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/250)) ([3e7efd4](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3e7efd4))
- **date-picker:** 修复不使用 onOK 导致的下一次显示失败问题 ([#258](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/258)) ([2f5fc79](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/2f5fc79))
- **date-picker:** 修复设置最大最小日期后打开 Picker 显示错误 ([#256](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/256)) ([41f20f5](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/41f20f5))
- **date-picker:** 修复选择最早最晚时间时的 interval ([#267](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/267)) ([3fa56dc](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3fa56dc))
- **date-picker:** 修复设置 minDate 错误 ([#243](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/243)) ([8fdbe8f](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/8fdbe8f))
- **pulltorefresh:** 修复上划然后下划时导致的 refresh 信号错误 ([#248](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/248)) ([5fd57d7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5fd57d7))

### Features

- **button:** 增加 dashed 样式 ([#273](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/273)) ([8759db0](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/8759db0))
- **grid:** Grid 中支持动态的 ng-content ([#268](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/268)) ([2a579a2](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/2a579a2))
- **grid:** 支持 自定义 icon 和本地静态资源 ([#257](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/257)) ([eafe8ec](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/eafe8ec))

### Performance Improvements

- **picker:** 删除成员默认值 ([#272](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/272)) ([ec748c3](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/ec748c3))

## 0.11.2 (2019-01-11)

### Bug Fixes

- **actionsheet:** 修复 Actionsheet 没有销毁 locale 订阅问题 ([#236](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/236)) ([d719496](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/d719496))
- **carousel:** 修复 Carousel 选中序列初始化失败问题 ([#230](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/230)) ([5482cb2](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5482cb2))
- **pulltorefresh:** 修复没有使用 NgModel 出现的错误 ([#229](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/229)) ([5a3ba5d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5a3ba5d))

### Features

- **actionsheet:** 支持 locale 国际化 ([#232](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/232)) ([39870da](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/39870da))
- **carousel:** 仅有 1 个元素时禁止 drag ([#239](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/239)) ([799ce51](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/799ce51))
- **datepicker:** 增加 disabled 属性 ([#233](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/233)) ([8f772a9](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/8f772a9))
- **picker:** 增加 disabled 属性 ([#231](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/231)) ([02733b4](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/02733b4))
- **switch:** 根据选中状态在子元素设置类名 ([#238](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/238)) ([1117c7c](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1117c7c))
- **showcase:** 在 kitchen-sink 中设置 "user-select: none" ([#234](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/234)) ([65ad469](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/65ad469))

### Performance Improvements

- **actionsheet:** 使用 cdk 优化实现([#228](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/228)) ([9a9988a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/9a9988a))

## 0.11.1 (2019-01-08)

### Bug Fixes

- **calendar:** 修复 timepicker 选择报错([#216](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/216)) ([03ffa9e](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/03ffa9e))
- **codebox:** 升级 ng-zorro-antd-mobile 的版本号 ([#218](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/218)) ([3fb41f1](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3fb41f1))
- **modal:** 修复无 actions 报错. ([#222](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/222)) ([25b7aec](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/25b7aec))
- **package.json:** 升级 ng-zorro-antd 依赖 ([#213](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/213)) ([b53ff31](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b53ff31))
- **showcase:** 修复文档官网 icon 显示问题 ([#214](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/214)) ([bfe2b3d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/bfe2b3d))

### Performance Improvements

- **modal:** 优化 modal service 的使用 ([#220](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/220)) ([4fca40a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/4fca40a))

## 0.11.0 (2018-12-29)

### Bug Fixes

- **ActionSheet:** 修复当无标题或消息时头部不为空的问题 ([#192](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/192)) ([b0f41b7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b0f41b7))
- **checkbox:** 修复初始值为选中时 checkbox 状态不对的问题 ([#193](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/193)) ([0293e85](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0293e85))
- **input-item:** 修复 input 值不能为空字符串或 0 的问题 ([#185](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/185)) ([59e0ea8](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/59e0ea8))
- **input-item:** 修复 inputitem 值保护问题 ([#196](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/196)) ([883c2ba](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/883c2ba))
- **package.json:** 修复 Invalid Host/Origin header 导致的循环问题 ([#199](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/199)) ([450c66a](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/450c66a))
- **picker:** 修复当使用  服务并点击 OK 按钮抛错的问题 ([#176](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/176)) ([40a8fee](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/40a8fee))
- **picker:** 修复点击取消无响应的问题 ([#205](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/205)) ([bee4fc4](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/bee4fc4))
- **textarea-item:** 修复 textarea 值不能为空字符串或 0 的问题 ([#186](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/186)) ([0759f65](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0759f65))
- **textarea-item:** 修复 textarea-item 值保护问题 ([#197](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/197)) ([e2c0157](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e2c0157))

### Features

- **Framework:** 支持 Angular 7.0
- **date-picker:** date-picker 支持 ngmodel ([#207](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/207)) ([c1e6d11](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/c1e6d11))
- **picker-view:** picker-view 支持 ngModel ([#180](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/180)) ([500c893](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/500c893))
- **pulltorefresh:** 支持 scrollendrefresh 和 上、下两个方向滑动刷新 ([#204](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/204)) ([149c461](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/149c461))
- **range:** range 支持 ngmodel ([#208](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/208)) ([26d019d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/26d019d))
- **searchbar:** searchbar 支持 ngModel ([#179](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/179)) ([8bd39d7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/8bd39d7))
- **slider:** slider 支持 ngModel ([#202](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/202)) ([3db39ae](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/3db39ae))
- **stepper:** stepper 支持 ngModel ([#181](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/181)) ([23f36c1](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/23f36c1))
- **modal:** 增加 modal closable 和 maskClosable 演示样例 ([#195](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/195)) ([d3d3478](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/d3d3478))

### Performance Improvements

- **picker-view:** perf docs and demo ([#189](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/189)) ([fc9627d](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/fc9627d))

## 0.10.1 (2018-12-20)

### Bug Fixes

- **checkbox:** disabled 状态为 true 时 checked 状态应该锁定 ([#170](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/170)) ([5fe311f](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/5fe311f))
- **step and slider-marks:** 修复 AOT build 错误 ([#157](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/157)) ([94cb387](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/94cb387))
- **button:** 修复 loading input 只在第一次启动时生效的问题. ([#161](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/161)) ([b54bd04](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b54bd04))

### Features

- **calendar:** ngModel 支持 ([#164](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/164)) ([327d33b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/327d33b))
- **checkbox&radio:** ngModel&Onpush 支持 ([#167](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/167)) ([b1b4807](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b1b4807))
- **inputitem:** 增加 fontColor input ([#156](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/156)) ([0ef2620](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/0ef2620))
- **picker:** ngModel 支持 ([#165](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/165)) ([b4af7c7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/b4af7c7))
- **progress:** nzm-progress 支持 大于 100%的进度 ([#152](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/152)) ([021f7d8](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/021f7d8))
- **switch:** ngModel 支持 ([#145](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/145)) ([6998e40](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6998e40))
- **textarea-item:** ngModel 支持 ([#162](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/162)) ([6b60cca](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/6b60cca))

## 0.9.10 (2018-12-06)

### Bug Fixes

- **calendar:** 引入 LocalProvider Module ([#134](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/134)) ([37f20ae](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/37f20ae))
- **checkbox&radio:** 修复回调状态错误([#122](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/122)) ([e709b86](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e709b86))
- **popover:** 修复 Visable Input 除初始化外无效 ([#127](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/127)) ([05313a4](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/05313a4))
- **Searchbar:** 修复 LocaleProviderService 依赖问题 ([#133](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/133)) ([1ac6008](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/1ac6008))
- **TabBar:** 移除对 TabsModule 的依赖([#135](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/135)) ([eab449b](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/eab449b))

### Features

- **badge:** 在 text 文案外层增加 span 标签 ([#125](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/125)) ([e362320](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/e362320))
- **popover:** 增加自定义样式支持 ([#129](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/129)) ([26bbe53](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/26bbe53)), closes [#120](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/120)
- **PickerView:** 引入 PickerModule 和 LocaleProviderModule
  ([#141](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/141)) ([52ebaeb](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/52ebaeb))
- **popover:** 增加是否使用组件内部的点击自动关闭 opover
  ([#130](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/130)) ([71ea780](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/commit/71ea780))

## 0.9.9 (2018-11-27)

### Bug Fixes

- **locale-provider:** 让 locale-provider 跨模块生效; ([#113](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/113)) ([e09f0a3](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e09f0a3))
- **picker:** 引入 OverlayModule ([#111](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/111)) ([722ee27](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/722ee27))
- **grid:** 修复 item 数  超过数量会出错的 bug ([#119](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/119)) ([34e1dd7](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/34e1dd7))

### Features

- **locale:** 增加丹麦语 locale ([5361536](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/5361536))

## 0.9.7 (2018-11-14)

### Bug Fixes

- **action-sheet:** 修复点击 item 事件会响应背景点击事件 ([#98](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/98)) ([b24bcbc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/b24bcbc))
- **action-sheet:** 修复遗漏点击 item 事件 ([#99](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/99)) ([1697cda](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/1697cda))
- **badge:** 修复 badge 单测错误 ([#83](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/83)) ([43eb155](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/43eb155))
- **carousel:** 修复只有一个 item 时宽度不对的问题 ([#86](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/86)) ([bb59fe7](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bb59fe7))
- **date-picker:** 修复没有 locale 输入时报错 ([#103](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/103)) ([2aa43aa](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2aa43aa))
- **input-item:** 使用 ngzone.run set value ([#101](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/101)) ([ed2b243](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/ed2b243))
- **LocaleProvider:** 导出 LOCAL_PROVIDER_TOKEN ([#96](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/96)) ([16922a2](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/16922a2))
- **tabs:** 修复 MacOS Safari 及 iOS 9.3 以下版本的显示问题 ([#106](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/106)) ([ba9e43b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/ba9e43b))
- **Toast:** 修复 toast 在 init 初始化时报错 ([#93](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/93)) ([49d52be](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/49d52be))
- **showcase:** 更改展开代码 icon ([#97](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/97)) ([8bcfda5](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8bcfda5))

### Features

- **date-picker-view:** 增加 indicatorStyle 参数 ([#104](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/104)) ([e97acbd](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e97acbd))
- **picker:** 增加动态初始化方式 ([#105](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/105)) ([90866df](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/90866df))

## 0.9.6 (2018-10-24)

### Bug Fixes

- **carousel:**  触摸响应时禁止  冒泡传递([#61](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/61)) ([c44ba59](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/c44ba59))
- **carousel:** 当 vertical:false 时修复走马灯无宽度问题([#67](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/67)) ([8dd703f](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8dd703f))
- **carousel:** 只有 2 页幻灯片时修复 mousemove 问题 ([#56](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/56)) ([bc02951](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc02951))
- **icon:** 修复 icon 的 line-height ([#46](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/46)) ([#47](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/47)) ([28d76f2](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/28d76f2))
- **pulltorefresh:** 修复 drag up touch 问题 ([#51](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/51)) ([8b905cc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8b905cc))
- **textarea:** 修复 textarea-item test case 错误 ([#50](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/50)) ([f2bbdfb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/f2bbdfb))
- **showcase:** 替换正确的钉钉 QR 码 ([#74](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/74)) ([b4e7483](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/b4e7483))

---

## 0.9.5 （2018-10-15）

### Bug Fixes

- **codebox:** 修复英文网站中弹出代码框显示中文“返回“bug ([#35](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/35)) ([0720fdc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0720fdc))
- **codebox:**  修复 StackBliz 中的问题 ([#41](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/41)) ([8adcbb0](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8adcbb0))
- **package.json:** 取消 Package Json 的版本号 ([#27](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/27)) ([fc3cf65](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/fc3cf65))
- **popover:** 为 PopoverOptions 加入 providers ([#30](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/30)) ([8f9e1d3](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8f9e1d3))
- **textarea:** 修复 textarea test case 错误 ([#36](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/36)) ([97639fc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/97639fc))
- **package.json:** 修复 npm run start 在 windows 中无法运行的错误 ([#42](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/42)) ([68a0453](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/68a0453))
- **tabs:** 修复 swipeable 为 false 时 useOnPan 依然生效的问题 ([#43](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/43)) ([2d63730](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2d63730))

### Features

- **nav-bar:** 增加 icon string 类型支持 ([#38](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/38)) ([4a89b0c](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/4a89b0c))

### Docs

- **README:** 在 README 中增加更多的状态指示 ([#44](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/44)) ([a59797e](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a59797e))

---

## 0.9.4 (2018-10-10)

### Bug Fixes

- **button:** 修复 Button 带自定义 icon 显示问题([a3c6150](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a3c6150))
- **ci:** 修复 ci node 版本号 ([312fce6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/312fce6))
- **components:** 改变 Subject 引用方式 ([88864ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/88864ab))
- **date-picker:** 修复 iOS 上无效日期问题 ([6620635](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6620635))
- **demo:** 修复展开代码不可见问题 ([6d65ebb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6d65ebb))
- **pulltorefresh:** 修复下拉刷新的 Demo ([8725c4b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8725c4b))
- **input-item:** 修复 custom-keyboard 无法隐藏问题 ([#21](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/21)) ([9b8f3da](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/9b8f3da))
- **carousel:** 修复走马灯最后一页偶现白屏问题 ([2c5cd92](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2c5cd92))
- **tabs:** 修复 TabBar 与 Tabs 混用导致第一次加载时 Tabs 高亮下划线无法正常渲染问题 ([#7](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/7)) ([6502082](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6502082))
- **steps:** 更新 setTimeout 时间 ([6da37ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6da37ab))

### Features

- **ci:** 更新 ci 的配置 ([0b178c4](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0b178c4))
- **list-item:** 移除 className 依赖 ([#20](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/20)) ([e0850f6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e0850f6))
- **modal:** 增加 Modal 测试 ([#18](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/issues/18)) ([7c59b61](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/7c59b61))
- **template:** 增加 issue 和 PR 模板 ([bc59939](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc59939))

## 0.9.0（2018-09-29）

**NG-ZORRO** 组件库从设计初期就包含了桌面端与无线端两套。

从 2016 年下半年开始，**阿里巴巴集团数据技术及产品部**无线团队就开始基于 **Ant Design Mobile** 设计规范进行 **Angular** 2 代及以上的无线组件研发，并应用在了数据无线业务中。

在 2017 年下半年，**Ant Design Mobile** React 版本开始进行 2.x 重构。为了保持与 React 版本同步，**NG-ZORRO-MOBILE** 中止了对标 **Ant Design Mobile 1.x** 的工作，开始整体组件重构对标 **React 2.x** 版本。

现在 **NG-ZORRO-MOBILE** 已完成了与 **Ant Design Mobile 2.x** 45 个组件的同步工作，基于最新的 **Angular ^6.0.0** 与 **RxJS ^6.0.0** 构建，与 **@angular/cli** 进行了深度整合。同时我们与 **NG-ZORRO DESKTOP** 组件库共享文档和官网构建系统，保持风格统一。

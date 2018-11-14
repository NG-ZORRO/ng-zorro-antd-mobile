---
order: 5
title: Change Log
toc: false
timeline: true
---

`ng-zorro-antd-mobile` strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breadking change and new features.

## 0.9.7 (2018-11-14)

### Bug Fixes

* **action-sheet:** fix click item will response background click event ([#98](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/98)) ([b24bcbc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/b24bcbc))
* **action-sheet:** fix click item without event ([#99](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/99)) ([1697cda](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/1697cda))
* **badge:** fixed badge test case error ([#83](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/83)) ([43eb155](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/43eb155))
* **carousel:** fix carouselslide when set one item and vertical:true, width not right ([#86](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/86)) ([bb59fe7](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bb59fe7))
* **date-picker:** fix no locale input will trigger error ([#103](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/103)) ([2aa43aa](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2aa43aa))
* **input-item:** fix set value by ngzone.run ([#101](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/101)) ([ed2b243](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/ed2b243))
* **LocaleProvider:** export LOCAL_PROVIDER_TOKEN ([#96](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/96)) ([16922a2](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/16922a2))
* **tabs:** fix tabs display error in macos safari ([#106](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/106)) ([ba9e43b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/ba9e43b))
* **Toast:**  fix tasks can reenter the Angular zone via run ([#93](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/93)) ([49d52be](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/49d52be))
* **showcase:** change expand icon ([#97](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/97)) ([8bcfda5](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8bcfda5))


### Features

* **date-picker-view:** feat indicatorStyle ([#104](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/104)) ([e97acbd](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e97acbd))
* **picker:** feat create 'Picker' with dynamic ([#105](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/105)) ([90866df](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/90866df))

## 0.9.6 (2018-10-24)

### Bug Fixes

* **carousel:** add stopPropagation when touch action is triggered ([#61](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/61)) ([c44ba59](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/c44ba59))
* **carousel:** fix carouselslide no width when vertical:false ([#67](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/67)) ([8dd703f](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8dd703f))
* **carousel:** fix mousemove action when carousel only has two carouselslide ([#56](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/56)) ([bc02951](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc02951))
* **icon:** fix icon line-height([#46](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/46)) ([#47](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/47)) ([28d76f2](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/28d76f2))
* **pulltorefresh:** fix drag up touch bug ([#51](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/51)) ([8b905cc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8b905cc))
* **textarea:** fixed textarea-item test case error ([#50](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/50)) ([f2bbdfb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/f2bbdfb))
* **showcase:** replace dingtalk qrcode ([#74](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/74)) ([b4e7483](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/b4e7483))

---
## 0.9.5 （2018-10-15）

### Bug Fixes

* **codebox:** fix show code window back title always show '返回' ([#35](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/35)) ([0720fdc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0720fdc))
* **codebox:** fix StackBlitz with dynamic component ([#41](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/41)) ([8adcbb0](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8adcbb0))
* **package.json:** delete not use version key ([#27](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/27)) ([fc3cf65](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/fc3cf65))
* **popover:** add provider for PopoverOptions ([#30](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/30)) ([8f9e1d3](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8f9e1d3))
* **textarea:** fix textarea test case error ([#36](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/36)) ([97639fc](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/97639fc))
* **package.json:** change run start way ([#42](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/42)) ([68a0453](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/68a0453))
* **codebox:** fix show code window back title always show '返回' ([#29](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/29)) ([96bf9b8](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/96bf9b8))
* **tabs:** disable useOnPan when swipeable is false ([#43](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/43)) ([2d63730](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2d63730))

### Features

* **nav-bar:** add icon string support ([#38](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/38)) ([4a89b0c](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/4a89b0c))


### Docs

* **README:** add more status indicators in README ([#44](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/44)) ([a59797e](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a59797e))


---

## 0.9.4 (2018-10-10)


### Bug Fixes

* **button:** fix button with custom icon ([a3c6150](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/a3c6150))
* **ci:** fix ci node version ([312fce6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/312fce6))
* **components:** change the way to import subject ([88864ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/88864ab))
* **date-picker:** fix invaild date ([6620635](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6620635))
* **demo:** don’t  expand code ([6d65ebb](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6d65ebb))
* **pulltorefresh:** fix demo pulltorefresh ([8725c4b](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/8725c4b))
* **input-item:** fixed custom-keyboard hide ([#21](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/21)) ([9b8f3da](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/9b8f3da))
* **carousel:** fix last panel bug ([2c5cd92](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/2c5cd92))
* **tabs:** unable get offsetWidth & offsetHeight when setInkBarStatus at first time sometime ([#7](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/7)) ([6502082](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6502082))
* **steps:** udpate setTimeout time ([6da37ab](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/6da37ab))


### Features

* **ci:** update ci config ([0b178c4](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/0b178c4))
* **list-item:** remove classname ([#20](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/20)) ([e0850f6](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/e0850f6))
* **modal:** add modal test ([#18](https://github.com/fisherspy/ng-zorro-antd-mobile/issues/18)) ([7c59b61](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/7c59b61))
* **template:** support issue and PR template ([bc59939](https://github.com/fisherspy/ng-zorro-antd-mobile/commit/bc59939))

## 0.9.0 (2018-09-29)

**NG-ZORRO** has a blueprint for both desktop and mobile at the very beginning of the project.

According to the specification of **Ant Design Mobile**, **Alibaba Data Technology and Product** terminal team started to develop **NG-ZORRO-MOBILE** based on **Angular >=2** in June 2016. To prove its ability also integrate it into production.

In the last half year of 2017, **Ant Design Mobile of React** implementation started to redesign and implement with a brand new version **2.x**. To keep in pace with the React edition, **NG-ZORRO-MOBILE** terminated the ongoing development and started a tight development of the all-new **NG-ZORRO-MOBILE** corresponding to the **Ant Design Mobile of React 2.x**.

For now, based on the latest **Angular ^6.0.0** and **RxJS ^6.0.0** , **NG-ZORRO-MOBILE** have finished all the 45 components which exist in **Ant Design Mobile React 2.x**, and have integrated with **@angular/cli** for ease of use. Meanwhile, we share the same docs&website build system with **NG-ZORRO-DESKTOP** as a uniform style.

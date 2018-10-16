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

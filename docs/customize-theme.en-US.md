---
order: 4
title: Customize Theme
---

**NG-ZORRO-MOBILE** allows customizing some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

![](https://gw.alipayobjects.com/zos/rmsportal/bvJhBmAfTWsUixLpGLbL.png)

## Less variables

We are using [Less](https://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

> You can use the theme definition file of react version in ng-zorro-antd-mobile too.

### Customize theme with schematics

Run `ng add ng-zorro-antd-mobile --theme`，then modified the file `src/theme.less`.

> Note: `ng add ng-zorro-antd-mobile --theme` will [downgrade](https://github.com/angular/angular-cli/issues/10430) the version of `less` to `2.7`.

### Without schematics

Create a standalone less file named `theme.less` in `src` folder, and add the path of it to the list of `styles` in `angular.json` file.

> Note: You have to [downgrade](https://github.com/angular/angular-cli/issues/10430) the version of `less` to `2.7`.

```json
...
  "styles": [
    ...
    "src/theme.less"
    ...
  ]
...
```

Here is an example of `theme.less`

> The base color is changed to `#f5222d` in the example below.

```less
// -------- import official less file -----------
@import '../node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.less';

// -------- override less var -----------
@brand-primary : #f5222d;
```

All less vars can be checked [here](https://github.com/NG-ZORRO/ng-zorro-antd-mobile/blob/master/components/style/themes/default.less) is a sample of theme define file.

## Local deployment fonts

make locally deployed version of the icon font, the newest iconfont file could be downloaded [here](https://github.com/ant-design/ant-design/releases/download/resource/iconfont-3.x.zip).

add the path of iconfont to the list of `scripts` in `angular.json`

```json
...
  "scripts": [
    ...
    "src/assets/font/iconfont.js"
    ...
  ]
...
```
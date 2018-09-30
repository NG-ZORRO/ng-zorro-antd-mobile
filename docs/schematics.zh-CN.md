---
order: 3
title: 脚手架
---

使用脚手架可以更加方便的初始化项目，生成模板代码，节省开发时间。

> 脚手架部分完全基于 [Schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) 部分进行开发。

## 项目初始化

自动完成 `ng-zorro-antd-mobile` 的初始化配置，包括导入模块，引入样式文件等工作。

### 初始化命令

```bash
ng add ng-zorro-antd-mobile [options]
```

### 初始化参数

**_--theme_**

`ng-zorro-antd-mobile` 会[自动](https://github.com/angular/angular-cli/issues/10430)降级 `less` 版本至 `2.7` 并在 `src` 目录下生成 `theme.less` 的主题配置文件

详细的配置可以在[自定义主题](/#/docs/customize-theme/zh)中查看。

## 生成组件

快速生成模板代码，每个官网的代码演示都附有可生成的模板，开发者可以通过展开每个组件的代码演示部分获取其生成代码。

### 生成组件命令

```bash
ng g ng-zorro-antd-mobile:[template] --name=NAME [options]
```

例如通过以下代码可以快速生成一个导航栏组件，其中`nav-bar-basic`为对应组件代码演示中的 selector 去除'demo-'前缀。

```bash
ng g ng-zorro-antd-mobile:nav-bar-basic -p app --styleext='less' --name=navbar
```

### 生成组件参数

**_--name_**

组件名称(必选)

**_--styleext_**

样式文件扩展名（默认 css）

**_--prefix_**, **_-p_**

组件选择器前缀

**_--inlineStyle_**, **_-s_**

使用行内样式

**_--inlineTemplate_**, **_-t_**

使用行内模版

**_--path_**

指定组件创建目录（相当于执行时所在的目录）

**_--spec_**

是否生成 `.spec` 测试文件

**_--skipImport_**

是否跳过模块引入（及导入所属模块）

**_--selector_**

选择器名称（默认根据 `name` 自动生成）

**_--export_**

是否将组件声明在模块的 `exports`

**_--module_**, **_-m_**

指定要声明的模块名

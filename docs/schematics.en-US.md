---
order: 3
title: Schematics
---

`ng-zorro-antd-mobile` supports [schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2), you can init configuration and generate component with schematics now.

## Init Project

Init project with `ng-zorro-antd-mobile`.

### Command

```bash
ng add ng-zorro-antd-mobile [options]
```

### Options

**_--theme_**

`ng-zorro-antd-mobile` will [downgrade](https://github.com/angular/angular-cli/issues/10430) the version of `less` to `2.7` and create `theme.less` in `src` folder.

You can get more information at the [Customize Theme](/#/docs/customize-theme/en) part.

## Component Generation

You can get component generation code in our doc after expand the code panel below every example.

### Command

```bash
ng g ng-zorro-antd-mobile:[template] --name=NAME [options]
```

For example, you can generate a nav bar with the following command.`nav-bar-basic` represents the selector in the demo code which removes the 'demo-' prefix.

```bash
ng g ng-zorro-antd-mobile:nav-bar-basic -p app --styleext='less' --name=navbar
```

### Options

**_--name_**

Specify the component name(required)

**_--styleext_**

The type of style file（default css).

**_--prefix_**, **_-p_**

The prefix name of the component.

**_--inlineStyle_**, **_-s_**

Using the inline style.

**_--inlineTemplate_**, **_-t_**

Using the inline template.

**_--path_**

Specify the path of the created component.

**_--spec_**

Create the test file.

**_--skipImport_**

Skip module import.

**_--selector_**

The name of the selector.

**_--export_**

Should add the component to `exports` part.

**_--module_**, **_-m_**

Specify the module name.

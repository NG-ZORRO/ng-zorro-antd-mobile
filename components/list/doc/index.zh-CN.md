---
category: Components
type: Data Display
title: List
subtitle: 列表
---

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

<!-- 当你需要一个 infinite scroll 列表时，请使用 [ListView](https://mobile.ant.design/components/list-view/)。 -->

### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。


## API

### List

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[renderHeader]` | list heder | `string \| TemplateRef` | - |
| `[renderFooter]` | list footer | `string \| TemplateRef` | - |

### ListItem

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[thumb]` | 缩略图(当为 string 类型时作为 img src) | `string \| TemplateRef` | - |
| `[extra]` | 右边内容 | `string \| TemplateRef` | - |
| `[arrow]` | 箭头方向(右,上,下)，如果是`empty`则存在对应的dom,但是不显示 | `'horizontal' \| 'up' \| 'down' \| 'empty'` | - |
| `[align]` | 子元素垂直对齐 | `'top' \| 'middle' \| 'bottom'` | `'middle'` |
| `[error]` | 报错样式,右侧文字颜色变成橙色 | `boolean` | `false` |
| `[multipleLine]` | 多行 | `boolean` | `false` |
| `[wrap]` | 是否换行，默认情况下，文字超长会被隐藏， | `boolean` | `false` |
| `[platform]` | 设定组件的平台特有样式, 默认为 `cross`， 是指组件会自动检测设备 UA 应用不同平台的样式 | `'android' \| 'ios' \| 'cross'` | `'cross'` |
| `(onClick)` | 点击事件的回调函数 | `EventEmitter<void>` | - |

### Brief

辅助说明.

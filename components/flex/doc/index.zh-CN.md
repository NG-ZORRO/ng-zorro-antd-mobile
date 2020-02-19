---
category: Components
type: Layout
title: Flex
subtitle: Flex布局
---


Flex 是 CSS flex 布局的一个封装。



## API

### Flex

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[direction]` | 项目定位方向 | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` |
| `[wrap]` | 子元素的换行方式 | `'nowrap' \| 'wrap' \| 'wrap-reverse'`  | `'nowrap'` |
| `[justify]` | 子元素在主轴上的对齐方式 | `'start' \| 'end' \| 'center' \| 'between' \| 'around'` | `'start'` |
| `[align]` | 子元素在交叉轴上的对齐方式  | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'` | `'center'` |
| `[alignContent]` | 有多根轴线时的对齐方式 | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'stretch'`  | `'stretch'` |

### Flex.Item

Flex.Item 组件默认加上了样式`flex:1`,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 Flex.Item

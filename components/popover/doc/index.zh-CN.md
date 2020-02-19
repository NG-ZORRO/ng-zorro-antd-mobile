---
category: Components
type: Navigation
title: Popover
subtitle: 气泡
---

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。


## API

### Popover

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[visible]` | 当前显隐状态 | `boolean` | `false` |
| `[placement]` | 气泡的位置 | `'left' \|'right' \|'top' \|'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` \| `'bottomRight'` |
| `[mask]` | 是否显示遮罩背景层 | `boolean` | `false` |
| `[overlay]` | 弹出层内容 | `TemplateRef` | - |
| `[className]` | 传入自定义class, e.g. "am-popover-${your className}" | `string` | `am-popover` | 
| `[autoClose]` | 是否使用点击popover元素关闭popover | `boolean` | `true` |
| `(onVisibleChange)` | 当显隐状态变化时回调函数 | `EventEmitter<boolean>` | - |
| `(onSelect)` | 选中某选项时的回调函数 | `EventEmitter<node: any, index?: number>` | - |

### Popover.Item

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `disabled` | 是否禁用 | `boolean` | `false` |
| `style` | item 样式 | `object` | - |
| `icon` | icon | `TemplateRef` | - |

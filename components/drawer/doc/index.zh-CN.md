---
category: Components
type: Navigation
title: Drawer
subtitle: 抽屉
---

用于在屏幕边缘显示应用导航等内容的面板。

### 规则

- 是 Android 推荐的导航方式，常见于该平台应用。

## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[sidebar]` | 抽屉里的内容 | `TemplateRef` | - |
| `[open]` | 开关状态 | `boolean` | `false` |
| `[position]` | 抽屉所在位置 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| `[sidebarStyle]` | - | `object` | `{}` |
| `[contentStyle]` | - | `object` | `{}` |
| `[overlayStyle]` | - | `object` | `{}` |
| `[dragHandleStyle]` | - | `object` | `{}` |
| `[touch]` | 是否开启触摸手势 | `boolean` | `true` |
| `[transitions]` | 是否开启动画 | `boolean` | `true` |
| `[docked]` | 是否嵌入到正常文档流里 | `boolean` | `false` |
| `[enableDragHandle]` | 是否启用 dragHandle | `boolean` | `false` |
| `[dragToggleDistance]` | 打开/关闭抽屉时距 sidebar 的拖动距离 | `number` | `30` |
| `(onOpenChange)` | open 状态切换时调用 | `EventEmitter<boolean>` | - |

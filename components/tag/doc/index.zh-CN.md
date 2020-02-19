---
category: Components
type: Data Display
title: Tag
subtitle: 标签
---

进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。

### 规则
- 标签文字必须显示完全。


## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[small]` | 小号标签 | `boolean` | `false` |
| `[disabled]` | 是否不可用 | `boolean` | `false` |
| `[closable]` | 是否关闭（非 disabled small 状态） | `boolean` | `false` |
| `[selected]` | 是否默认选中 | `boolean` | `false` |
| `(onChange)` | 切换选中回调函数 | `EventEmitter<boolean>` | - |
| `(onClose)` | 点关闭时的回调函数 | `EventEmitter<void>` | - |
| `(afterClose)` | 关闭后的回调 | `EventEmitter<void>` | - |

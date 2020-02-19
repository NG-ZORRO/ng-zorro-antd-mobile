---
category: Components
type: Data Entry
title: Switch
subtitle: 滑动开关
---


在两个互斥对象进行选择，eg：选择开或关。

### 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。


## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[checked]` | 是否默认选中 | `boolean` | `false` |
| `[disabled]` | 是否不可修改 | `boolean` | `false` |
| `[color]` | 开关打开后的颜色 | `string` | `'#4dd865'` |
| `[name]` | switch 的 name | `string` | - |
| `[platform]` | 设定组件的平台特有样式 | `'ios' \| 'android'` | `'ios'`|
| `[(ngModel)]` | 当前值 | `boolean` | `false` |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<boolean>` | - |
| `(onClick)` | click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值 | `EventEmitter<boolean>` | - |

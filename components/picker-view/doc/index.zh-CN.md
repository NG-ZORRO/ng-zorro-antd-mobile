---
category: Components
type: Data Entry
title: PickerView
subtitle: 选择器
---

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[data]` | 数据源 | `Array<{value, label}> \| Array<Array<{value, label}> `| - |
| `[cascade]` | 是否级联 | `boolean` | `true` |
| `[cols]` | 列数 | `number` | `3` |
| `[itemStyle]` | 每列样式 | `object` | - |
| `[indicatorStyle]` | indicator 样式  | `object` | - |
| `[(ngModel)]` | 当前值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value | `Array` | - |
| `(ngModelChange)` | 选中后的回调 | `EventEmitter<any[]>` | - |

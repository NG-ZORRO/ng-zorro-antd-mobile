---
category: Components
type: Data Entry
title: Button
subtitle: 按钮
---

点击后会触发一个操作。


## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[type]` | 按钮类型 | `'default' \| 'primary' \| 'ghost' \| 'warning'` | `'default'` |
| `[size]` | 按钮大小 | `'large' \| 'small'` | `large`|
| `[disabled]` | 设置禁用 | `boolean` | `false` |
| `[style]` | 自定义样式 | `object` | - |
| `[inline]` | 是否设置为行内按钮  | `boolean` | `false` |
| `[loading]` | 设置按钮载入状态 | `boolean` | `false` |
| `[icon]` | 可以是 [Icon](https://mobile.ant.design/components/icon) 组件里内置的某个 icon 的 type 值，也可以是任意合法的 TemplateRef (注意: `loading`设置后此项设置失效) | `string \| TemplateRef` | - |
| `(onClick)` | 点击按钮的点击回调函数 | `EventEmitter<void>` | -  |

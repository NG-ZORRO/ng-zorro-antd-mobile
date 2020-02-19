---
category: Components
type: Data Entry
title: Range
subtitle: 区域选择
---


允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。


### 规则
- 默认状态下，左边为最小值，右边为最大值。
- 一般水平放置。


## Common API

参数 | 说明 | 类型 | 默认值 |
----|-----|------|------
| `[min]` | 最小值 | `number` | `0` |
| `[max]` | 最大值 | `number` | `100` |
| `[step]` | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null` | 1 |
| `[value]` | 设置当前取值 | `Array<number>` | - |
| `[defaultValue]` | 设置初始取值 | `Array<number>` | `[0, 0]` |
| `[disabled]` | 值为 `true` 时，滑块为禁用状态 | `boolean` | `false` |
| `[onChange]` | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | `EventEmitter<Array<number>>` | - |
| `[onAfterChange]` | 与 `ontouchend` 触发时机一致，把当前值作为参数传入 | `EventEmitter<Array<number>>` | - |
| `[marks]` | 刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内 | `{ [_: number]: string }` | `{ }` |
| `[count]` | 有几个区间块，比如有一个圆圈就是两个区间 | `number` | `1` |
| `[allowCross]` | 是否允许两个handler(圆圈)互相穿越 | `boolean` | `true` |
| `[pushable]` | 两个触点之间的最小距离, 仅限`allowCross`为`false` | `number` | - |
| `[handleStyle]` | 滑块的样式，按数组顺序应用到多滑块 | `Array<object>` | - |
| `[trackStyle]` | 选中部分滑动条的样式，按数组顺序应用到滑动条的多区间 | `Array<object>` | - |
| `[railStyle]` | 未选中部分 | `object` | - |
| `[(ngModel)]`| 当前取值 | `number` | - |
| `(ngModelChange)` | 当 Slider 的值发生改变时，会触发 ngModelChange 事件，并把改变后的值作为参数传入 | `EventEmitter<Array<number>>` | - |

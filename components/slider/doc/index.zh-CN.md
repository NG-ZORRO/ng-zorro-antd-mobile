---
category: Components
type: Data Entry
title: Slider
subtitle: 滑动输入条
---


允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。


### 规则
- 默认状态下，左边为最小值，右边为最大值。
- 一般水平放置。


## Common API

属性 | 类型 | 默认值 | 说明
----|-----|------|------
| ngModel|  Number  |     | 设置当前取值，可双向绑定。 |
| ngModelChange |  Function     | Noop    | 当 Slider 的值发生改变时，会触发 ngModelChange 事件，并把改变后的值作为参数传入。 |
| min    |  Number     | 0     | 最小值 |
| max    |  Number     | 100    | 最大值 |
| step    |  Number or null     | 1    | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。 |
| value    |  Number  |     | 设置当前取值。 |
| defaultValue    |  Number   | 0     | 设置初始取值。|
| disabled    |  Boolean     | false    | 值为 `true` 时，滑块为禁用状态 |
| onChange    |  Function     | Noop    | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 |
| onAfterChange    |  Function     | Noop    | 与 `ontouchend` 触发时机一致，把当前值作为参数传入。 |
| marks     |  Object{Number:String}     | { }    | 刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内 |
| handleStyle   |  Object    |  -  | 滑块的样式  |
| trackStyle   | Object     |  -   | 选中部分滑动条的样式 |
| railStyle  |  Object     |  - | 未选中部分 |

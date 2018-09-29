---
category: Components
type: Data Entry
title: Calendar
subtitle: 日历
---

用于选择日期区间。

### 规则
- 显示日历以用来选择日期或日期区间。


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
enterDirection | 入场方向 vertical: 垂直 horizontal: 水平 | 'horizontal' \| 'vertical'| vertical | false
locale | 本地化 | Models.Locale | <span> </span> | false
onCancel | 关闭时回调 | () => void | <span> </span>  | false
onConfirm | 确认时回调 | (startDateTime?: Date, endDateTime?: Date) => void |  <span> </span>  | false
pickTime|是否选择时间 | boolean | false | false
prefixCls| 样式前缀 | string | rmc-calendar | false
showShortcut | 快捷日期选择 | boolean | false | false
type | 选择类型 one: 单日 range: 日期区间 | 'one' \| 'range'| range | false
visible | 是否显示 | boolean | false | false
defaultDate | 显示开始日期 | Date | today | false
getDateExtra | 日期扩展数据 | (date: Date) => Models.ExtraData |  <span> </span>   | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date |   <span> </span>  | false
minDate | 最小日期 | Date |  <span> </span>   | false
onSelect | 选择区间回调 | (date: Date, state?: \[Date \| undefined, Date \| undefined\]) => \[Date, Date\] \| \[Date\] \| void | <span> </span> | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | <span> </span> | false
rowSize | 行大小 | 'normal' \| 'xl' | <span> </span> | false
defaultValue | 默认日历选择范围 | \[Date, Date\] \| \[Date\] | <span> </span> | false
defaultTimeValue | 默认时间选择值 | Date |  <span> </span>  | false

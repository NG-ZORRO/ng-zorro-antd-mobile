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

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[enterDirection]` | 入场方向 | `'horizontal' \| 'vertical'` | `'vertical'` |
| `[locale]` | 本地化 | `DateModels.Locale` | - |
| `[pickTime]` |是否选择时间 | `boolean` | `false` |
| `[prefixCls]` | 样式前缀 | `string` | `rmc-calendar` |
| `[showShortcut]` | 快捷日期选择 | `boolean` | `false` |
| `[type]` | 选择类型 one: 单日 range: 日期区间 | `'one' \| 'range'` | `'range'` |
| `[visible]` | 是否显示 | `boolean` | `false` |
| `[defaultDate]` | 显示开始日期 | `Date` | `new Date()` |
| `[getDateExtra]` | 日期扩展数据 | `(date: Date) => DateModels.ExtraData` | - |
| `[initalMonths]` | 初始化月个数 | `number` | `6` |
| `[maxDate]` | 最大日期 | `Date` | - |
| `[minDate]` | 最小日期 | `Date` | - |
| `[rowSize]` | 行大小 | `'normal' \| 'xl'` | - |
| `[defaultValue]` | 默认日历选择范围 | `[Date, Date] \| [Date]` | - |
| `[defaultTimeValue]` | 默认时间选择值 | `Date` |  -  |
| `[onSelect]` | 选择区间回调 | `(date: Date, state?: [Date \| undefined, Date \| undefined]) => [Date, Date] \| [Date] \| void` | - |
| `[(ngModel)]` | ngModel | `Array<Date> \| Date` | `Date` |
| `(onCancel)` | 关闭时回调 | `EventEmitter<void>` | - |
| `(onConfirm)` | 确认时回调 | `EventEmitter<{startDateTime?: Date, endDateTime?: Date}>` | - |
| `(onSelectHasDisableDate)` | 选择区间包含不可用日期 | `(date: Date[]) => void` | - |

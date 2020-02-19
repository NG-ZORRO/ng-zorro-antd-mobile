---
category: Components
type: Data Entry
title: DatePickerView
subtitle: 选择器
---

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[mode]`| 日期选择的类型 | `'year' \| 'month' \| 'date' \| 'time' \| 'datetime'` | `'date'` |
| `[minDate]` | 最小可选日期 | `Date` | `2000-1-1` |
| `[maxDate]` | 最大可选日期 | `Date` | `2030-1-1` |
| `[locale]` | 国际化，可覆盖全局`[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/zh)`的配置 | `{DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText }` | - |
| `[disabled]` | 是否不可用 | `boolean` | `false`  |
| `[indicatorStyle]` | indicator的样式 | `object` | - |
| `[showErrorToast]` | 显示Toast错误信息 | `boolean` | `true` |
| `[showErrorToastInterval]` | Toast错误信息显示时间 | `number` | `2000` |
| `[(ngModel)]` | 当前选中时间 | `Date` | `new Date()` |
| `(onChange)` | 时间发生变化的回调函数 | `EventEmitter<{date: object}>` | - |
| `(onValueChange)` | 每列 picker 改变时的回调 | `EventEmitter<{date: object, index: string}>` | - |

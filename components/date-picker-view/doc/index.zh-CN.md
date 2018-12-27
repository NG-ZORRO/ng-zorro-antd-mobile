---
category: Components
type: Data Entry
title: DatePickerView
subtitle: 选择器
---

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | 当前选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  |  2000-1-1  |
| maxDate   | 最大可选日期 | Date  |  2030-1-1  |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/zh)`的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void | - |
| onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | - |
| indicatorStyle  | style of indicator | Object | - |
| showErrorToast | 显示Toast错误信息 | Boolean | true |
| showErrorToastInterval | Toast错误信息显示时间 | number | 2000 |
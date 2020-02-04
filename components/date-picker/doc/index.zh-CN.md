---
category: Components
type: Data Entry
title: DatePicker
subtitle: 日期选择
---

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。


## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[mode]`| 日期选择的类型 | `'year' \| 'month' \| 'date' \| 'time' \| 'datetime'` | `'date'` |
| `[minDate]` | 最小可选日期 | `Date` | `2000-1-1` |
| `[maxDate]` | 最大可选日期 | `Date` | `2030-1-1` |
| `[minuteStep]` | 分钟数递增步长设置 | `number` | `1` |
| `[locale]` | 国际化，可覆盖全局`[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/zh)`的配置 | `{DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText }` | - |
| `[disabled]` | 是否不可用 | `boolean` | `false`  |
| `[showErrorToast]` | 显示Toast错误信息 | `boolean` | `true` |
| `[showErrorToastInterval]` | Toast错误信息显示时间 | `number` | `2000` |
| `[title]` | 弹框的标题 | `string \| TemplateRef` | - |
| `[(ngModel)]` | 当前选中时间 | `Date` | `new Date()` |
| `(onValueChange)` | 每列 picker 改变时的回调 | `EventEmitter<{date: object, index: string}>` | - |
| `(onOk)` | 点击选中时执行的回调 | `EventEmitter<Date>` | - |
| `(onDismiss)` | 点击取消时执行的回调 | `EventEmitter<void>` | - |

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。

注意：`DatePicker` children 建议是 `ListItem`, 如果不是，需要是自定义组件(组件内需处理 `onClick` / `extra` / `children` 属性)

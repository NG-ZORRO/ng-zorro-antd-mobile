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

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | 当前选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  |  2000-1-1  |
| maxDate   | 最大可选日期 | Date  |  2030-1-1  |
| minuteStep |  分钟数递增步长设置   | Number | 1 |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/zh)`的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
| disabled   | 是否不可用      | Boolean |    false  |
| onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | - |
| title  | 弹框的标题 | string/React.TemplateRef |  无  |
| onOk  | 点击选中时执行的回调 | (val): void  |  无 |
| onDismiss  | 点击取消时执行的回调 | (): void  |  无  |

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。

注意：`DatePicker` children 建议是 `ListItem`, 如果不是，需要是自定义组件(组件内需处理 `onClick` / `extra` / `children` 属性)

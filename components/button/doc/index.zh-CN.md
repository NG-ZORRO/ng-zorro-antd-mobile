---
category: Components
type: Data Entry
title: Button
subtitle: 按钮
---

点击后会触发一个操作。


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline      | 是否设置为行内按钮  | boolean |   false  |
| loading 	   | 设置按钮载入状态	  | boolean	 | false |
| icon   | 可以是 [Icon](https://mobile.ant.design/components/icon) 组件里内置的某个 icon 的 type 值，也可以是任意合法的 TemplateRef (注意: `loading`设置后此项设置失效) | `string`/`TemplateRef` | -  |

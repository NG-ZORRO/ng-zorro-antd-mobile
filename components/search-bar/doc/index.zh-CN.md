---
category: Components
type: Data Entry
title: SearchBar
subtitle: 搜索栏
---

一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

### 规则

- 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：双11特卖。
- 在搜索栏下方，可提供有用的标签文案，帮助用户通过点击直接完成输入，比如：列出一些最近搜索的关键词。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| ngModel  | 当前值，可双向绑定 | String|<span> </span> |
| ngModelChange  | 值改变时回调 | (val: string): void |<span> </span> |
| defaultValue |    搜索框的默认值     | String | <span> </span> |
| value      |  搜索框的当前值  | String | <span> </span> |
| placeholder    |    placeholder     | String | <span> </span> |
| onSubmit    |  submit 事件 (点击键盘的 enter)  | (val: string): void | <span> </span> |
| onChange    |    change 事件的回调     | (val: string): void |<span> </span>  |
| onFocus    |    focus 事件的回调     | (): void | <span> </span> |
| onBlur    |    blur 事件的回调     | (): void | <span> </span> |
| onCancel  | 点击`取消`按钮触发 (不再自动清除输入框的文字) | (val: string): void | <span> </span> |
| showCancelButton    |    是否一直显示`取消`按钮     | bool |  `false`  |
| cancelText    |   定制`取消`按钮的文字     | String |  `取消`  |
| disabled    |  设置禁用   | bool |  `false`  |
| onClear  |    点击 clear 图标触发  | (val: string): void | <span> </span> |
| maxLength     |  最多允许输入的字符个数    | number | -  |


## SearchBar Instance methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| focus   | 使 SearchBar 聚焦  | (): void |  -  |

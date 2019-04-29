---
category: Components
type: Data Entry
title: Radio
subtitle: 单选框
---

单选框

## API

### Radio

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   无  |
| value    |  value  | String |   无  |
| checked    |   指定当前是否选中  | Boolean  | 无  |
| disabled      |  禁用  | Boolean |  false  |
| onChange    | change 事件触发的回调函数 | (name: string, value: string, checked: boolean) => void | 无  |

### RadioItemGroup

单选框组合，包裹一组RadioItems。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| ngModel    | 指定选中的RadioItem对应的value, 可双向绑定  | string / number |   无  |
| onChange    | RadioItem选中变化时的回调  | EventEmitter<Object: {name, value}> |   无  |

### RadioItem

基于`ListItem`对`Radio`进行封装,`ListItem`的`extra`属性固定传入`Radio`,其他属性和`ListItem`一致。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   无  |
| value    |  value  | String |   无  |
| disabled      |  禁用  | Boolean |  false  |
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  |

---
category: Components
type: Gesture
title: PullToRefresh
subtitle: 拉动刷新
---

通过触发，立刻重新加载内容。

### 规则
- 可以和 `ListView` 结合使用，也可以单独使用。
- 可考虑定期自动刷新, e.g. 登录 APP 后，自动刷新首页 List。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| direction  | 拉动方向，可以是 `up` 或 `down` | String | - |
| distanceToRefresh | 刷新距离 | number | 25 |
| refreshing | 是否显示刷新状态 | bool | false |
| onRefresh | 必选, 刷新回调函数 | () => void | - |
| ngModel | 刷新的状态 `{ currentState : deactivate , drag: false}` | Object | deactivate |
| headerIndicator  | 头部指示器配置 `{ activate: any, deactivate: any, release: any, finish: any }` | Object | - |
| footerIndicator  | 脚部指示器配置 `{ activate: any, deactivate: any, release: any, finish: any }` | Object | - |
| endReachedRefresh| 滚动到底自动刷新（direction=down） | bool | false | 

> **注：**  使用时，需要设置组件高度，否则展示不正确。


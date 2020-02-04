---
category: Components
type: Navigation
title: Tabs
subtitle: 标签页
---


用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。


## API

### Tabs

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[activeTab]` | 当前激活Tab索引 | `number` | `0` |
| `[tabBarPosition]`  | TabBar位置 | `'top' \| 'bottom' \| 'left'  \| 'right'` | `'top'` |
| `[page]` | Tab分页尺寸 | `number` | `5` |
| `[swipeable]` | 是否可以滑动内容切换 | `boolean` | `true` |
| `[useOnPan]` | 使用跟手滚动 | `boolean` |  `true` |
| `[animated]` | 是否开启切换动画 | `boolean` |  `true` |
| `[distanceToChangeTab]` | 滑动切换阈值(宽度比例) | `number` | `0.3` |
| `[prerenderingSiblingsNumber]` | 预加载两侧Tab数量, -1: 加载所有的Tab内容, 0: 仅加载当前tab内容, n: 预加载两侧n个Tab | `number` | `-1` |
| `[tabDirection]` | Tab方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `[tabBarUnderlineStyle]` | TabBar下划线样式 | `object` | - |
| `[tabBarBackgroundColor]` | TabBar背景色 | `string` | - |
| `[tabBarActiveTextColor]` | TabBar激活Tab文字颜色 | `string` | - |
| `[tabBarInactiveTextColor]` | TabBar非激活Tab文字颜色 | `string` | - |
| `[tabBarTextStyle]` | TabBar文字样式 | `object` | - |
| `[renderTabBar]` | 替换TabBar的Tab | `TemplateRef` | - |
| `(onChange)` | Tab变化时触发 | `EventEmitter<{index: number}>` | - |
| `(onTabClick)` | Tab 被点击的回调 | `EventEmitter<{index: number}>` | - |

### TabPane

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[title]` | tab面板的标题 | `string \| TemplateRef` | - |

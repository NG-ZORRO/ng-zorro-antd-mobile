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

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
activeTab | 当前激活Tab索引 | number | 0 | true
tabBarPosition  | TabBar位置 | 'top' \| 'bottom' \| 'left'  \| 'right' | top | false
page | Tab分页尺寸 | number | 5 | false
swipeable  | 是否可以滑动内容切换 | boolean |  true | false
useOnPan  | 使用跟手滚动 | boolean |  true | false
animated  | 是否开启切换动画 | boolean |  true | false
onChange  | tab变化时触发 | (index: number) => void | <span> </span> | false
onTabClick  | tab 被点击的回调 | (index: number) => void | <span> </span> | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number |  0.3 | false
tabDirection | Tab方向 | 'horizontal' \| 'vertical' |  horizontal | false
tabBarUnderlineStyle  | tabBar下划线样式 | object | <span> </span> | false
tabBarBackgroundColor  | tabBar背景色 | string | <span> </span> | false
tabBarActiveTextColor  | tabBar激活Tab文字颜色 | string | <span> </span> | false
tabBarInactiveTextColor  | tabBar非激活Tab文字颜色 | string | <span> </span> | false
tabBarTextStyle  | tabBar文字样式 | object | <span> </span> | false
renderTabBar | 替换TabBar的Tab | TemplateRef | null

### TabPane

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
title | tab面板的标题 | string \| TemplateRef | <span> </span> | true

---
category: Components
type: Navigation
title: Tabs
---


A `Tabs` is used to allow users to switch between different views.

### Rule

- Generally a `Tabs` should have 2-4 tab pane, the title of each tab pane should be concise，normally has 2-4 words..
- In the secondary page of iOS, it is not recommended to use left and right swipe to switch tab, which conflicts with back swipe gestrue in iOS. eg:  tabs in details page.


## API

### Tabs

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
activeTab | current tab | number | 0 | true
tabBarPosition | TabBar's position | 'top' \| 'bottom' \| 'left' \| 'right' |  top | false
page | the size for the tab of tabbar | number | 5 | false
swipeable | Whether to switch tabs with swipe gestrue in the content | boolean |  true | false
useOnPan | use hand scroll | boolean |  true | false
animated | Whether to change tabs with animation | boolean |  true | false
onChange | Callback when tab is switched | (index: number) => void | <span> </span> | false
onTabClick  | on tab click | (index: number) => void | <span> </span> | false
distanceToChangeTab | distance to change tab, width ratio | number |  0.3 | false
tabDirection | tab paging direction | 'horizontal' \| 'vertical' |  horizontal | false
tabBarUnderlineStyle | style of the default tab bar's underline | object | <span> </span> | false
tabBarBackgroundColor | color of the default tab bar's background | string | <span> </span> | false
tabBarActiveTextColor | color of the default tab bar's text when active | string | <span> </span> | false
tabBarInactiveTextColor | color of the default tab bar's text when inactive | string | <span> </span> | false
tabBarTextStyle | tional styles to the tab bar's text | object | <span> </span> | false
renderTabBar | render for replace the tab of tabbar | TemplateRef | null

### TabPane

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
title | tab pane's title | string \| TemplateRef | <span> </span> | true

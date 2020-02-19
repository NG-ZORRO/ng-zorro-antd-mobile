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

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[activeTab]` | Current tab index | `number` | `0` |
| `[tabBarPosition]` | TabBar's position | `'top' \| 'bottom' \| 'left'  \| 'right'` | `'top'` |
| `[page]` | The size for the tab of tabbar | `number` | `5` |
| `[swipeable]` | Whether to switch tabs with swipe gestrue in the content | `boolean` | `true` |
| `[useOnPan]` | Use hand scroll | `boolean` |  `true` |
| `[animated]` | Whether to change tabs with animation | `boolean` |  `true` |
| `[distanceToChangeTab]` | Distance to change tab, width ratio | `number` | `0.3` |
| `[prerenderingSiblingsNumber]` | Pre-render nearby sibling, -1: render all the siblings, 0: render current page, n: render n siblings | `number` | `-1` |
| `[tabDirection]` | Tab paging direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `[tabBarUnderlineStyle]` | Style of the default tab bar's underline | `object` | - |
| `[tabBarBackgroundColor]` | Color of the default tab bar's background | `string` | - |
| `[tabBarActiveTextColor]` | Color of the default tab bar's text when active | `string` | - |
| `[tabBarInactiveTextColor]` | Color of the default tab bar's text when inactive | `string` | - |
| `[tabBarTextStyle]` | Styles to the tab bar's text | `object` | - |
| `[renderTabBar]` | Render for replace the tab of tabbar | `TemplateRef` | - |
| `(onChange)` | Callback when tab is switched | `EventEmitter<{index: number}>` | - |
| `(onTabClick)` | On tab click | `EventEmitter<{index: number}>` | - |

### TabPane

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[title]` | Tab pane's title | `string \| TemplateRef` | - |

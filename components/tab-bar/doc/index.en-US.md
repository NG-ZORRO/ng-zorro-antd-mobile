---
category: Components
type: Navigation
title: TabBar
---

Located at the bottom of the APP, to facilitate users to quickly switch between different functional modules。

### Rule
- Used as a class of APP classification, the number of tab between 3-5 is better。
- Even if a Tab is not available, do not disable or remove the Tab。
- Use Badge make a hint，stay can also know that there is content update。

## API

### TabBar

Properties | Descrition | Type | Default
-----------|------------|------|--------
| activeTab | current tab | number | 0 |
| barTintColor        | tabbar's background color                     | String   | `white`            |
| tintColor         | selected's font color                               | String | `#108ee9`         |
| unselectedTintColor       | unselected's font color  | String | '#888'           |
| hidden       | whether it is hidden  | Boolean | false           |
| tabBarPosition | tabbar position | 'top'\|'bottom' | 'bottom' |
| prerenderingSiblingsNumber| pre-render nearby sibling, -1: render all the siblings, 0: render current page, n: render n siblings | number |   -1   |
| onPress  | on press the bar | (index: number, title: string, key: string) => void | false     |

### TabBarItem

Properties | Descrition | Type | Default
-----------|------------|------|--------
| badge  | badge number  | Number \ String           | 无     |
| dot | show red dot on right-top（invalid when set badge number）  | Boolean            |  false  |

| icon  | the default icon | ref demo | <span> </span> |
| selectedIcon  |  the icon of selected | ref demo |  <span> </span> |
| title  |  title | String |  <span> </span> |
| key  |  unique identification | String |   无   |

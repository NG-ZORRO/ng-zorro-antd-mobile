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
| `[activeTab]` | Current tab index | `number` | `0` |
| `[barTintColor]` | Tabbar's background color | `string` | `'white'` |
| `[tintColor]` | Selected's font color | `string` | `'#108ee9'` |
| `[unselectedTintColor]` | Unselected's font color | `string` | `'#888'` |
| `[hidden]` | Whether it is hidden | `boolean` | `false` |
| `[tabBarPosition]` | Tabbar position | `'top'\|'bottom'` | `'bottom'` |
| `[prerenderingSiblingsNumber]`| Pre-render nearby sibling, -1: render all the siblings, 0: render current page, n: render n siblings | `number` | `-1` |
| `(onPress)` | On press the bar | `EventEmitter<{index: number, title: string, key: string}>` | - |

### TabBarItem

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[badge]` | Badge number | `number \| string` | - |
| `[dot]` | Show red dot on right-top(invalid when set badge number) | `boolean` | `false` |
| `[icon]` | The default icon | `TemplateRef` | - |
| `[selectedIcon]` | The icon of selected | `TemplateRef` | - |
| `[title]` | Title | `string` | - |
| `[key]` | Unique identification | `string` | - |

---
category: Components
type: Gesture
title: PullToRefresh
---

Instantly reload the content by triggering.

### Rules
- Can be used in conjunction with `ListView` or alone.
- Can be considered regular automatic refresh, e.g. login APP, automatically refresh the first page List.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[direction]` | Pull direction | `'up' \| 'down'` | - |
| `[distanceToRefresh]` | Distance to refresh | `number` | `25` |
| `[refreshing]` | Whether the view should be indicating an active refresh | `boolean` | `false` |
| `[headerIndicator]` | Header indicator config `{ activate: any, deactivate: any, release: any, finish: any }` | `object` | - |
| `[footerIndicator]` | Footer indicator config `{ activate: any, deactivate: any, release: any, finish: any }` | `object` | - |
| `[endReachedRefresh]`| Refresh reached end（direction=down） | `boolean` | `false` | 
| `[(ngModel)]` | Refresh state `{ currentState : deactivate , drag: false}` | `object` | `{ currentState : deactivate , drag: false}` |
| `(onRefresh)` | Called when the view starts refreshing | `EventEmitter<void>` | - |

> **Notice：** OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it.
---
category: Components
type: Navigation
title: Drawer
---

Drawer is a panel that displays the app's navigation options on the left edge of the screen.

### Rules

- Recommaned way to show navigation options on Android, it is a common pattern found in Android APPs.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[sidebar]` | The sidebar content | `TemplateRef` | - |
| `[open]` | If the sidebar should be open | `boolean` | `false` |
| `[position]` | Position of `Drawer` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| `[sidebarStyle]` | - | `object` | `{}` |
| `[contentStyle]` | - | `object` | `{}` |
| `[overlayStyle]` | - | `object` | `{}` |
| `[dragHandleStyle]` | - | `object` | `{}` |
| `[touch]` | If touch gestures should be enabled | `boolean` | `true` |
| `[transitions]` | If transitions should be enabled | `boolean` | `true` |
| `[docked]` | If the sidebar should be docked in document | `boolean` | `false` |
| `[enableDragHandle]` | If dragHandle should be enabled | `boolean` | `false` |
| `[dragToggleDistance]` | Distance the sidebar has to be dragged before it will open/close after it is released | `number` | `30` |
| `(onOpenChange)` | Callback called when open state of `Drawer` changes | `EventEmitter<boolean>` | - |
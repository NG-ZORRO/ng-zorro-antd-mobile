---
category: Components
type: Navigation
title: Popover
---

After clicking on a control or an area, a Popover menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.


## API

### Popover

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[visible]` | Visible state | `boolean` | `false` |
| `[onVisibleChange]` | Visible state change callback | `EventEmitter<boolean>` | - |
| `[placement]` | The position of popover | `'left' \|'right' \|'top' \|'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` \| `'bottomRight'` |
| `[mask]` | Whether to display the mask background layer | `boolean` | `false` |
| `[overlay]` | Popup layer content | `TemplateRef` | - |
| `[onSelect]` | When an option is selected | `(node: any, index?: number) => void` | - |
| `[className]` | Custom popover class, e.g. "am-popover-${your className}" | `string` | `am-popover` | 
| `[autoClose]` | Set click popover item to close popvoer | `boolean` | `true` |

### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[disabled]` | If set disabled | `boolean` | `false` |
| `[style]` | Item style | `object` | - |
| `[icon]` | Icon | `TemplateRef` | - |

---
category: Components
type: Data Display
title: NoticeBar
---

Component to display a system message, event notice and etc. Which is under the navigation bar.

### Rules

- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.

## API

## NoticeBar
Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[option]` | NoticeBar params | `object` | `{ mode: '', icon: '', action: '', content: '', fontSize: '14px', scrolling: true, marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} } }` |

## option NoticeBar params
Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[mode]` | Type of NoticeBar | `'closable' \| 'link'` | - |
| `[icon]` | Set the icon at the start position | `TemplateRef` | - |
| `[action]` | Text which is used to replace icon | `TemplateRef` | - |
| `[content]` | Set notice content | `string`| |
| `[fontSize]`| Set NoticeBar fontSize | `string` | `14px` |
| `[scrolling]`| Set NoticeBar scorlling or not | `boolean` | `true` |
| `[marqueeProps]` | Marquee params | `object` | `{ loop: false, leading: 500, trailing: 800, fps: 40, style: {} }` |
| `(onClick)` | A callback function, can be executed when you close the notice or click on the operating area | `EventEmitter<void>` | - |

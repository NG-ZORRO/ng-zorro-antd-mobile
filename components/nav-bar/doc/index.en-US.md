---
category: Components
type: Navigation
title: NavBar
---

Located above the app content area, below the system status bar, and provides navigation capabilities in a series of pages.

### Rules

- You can display the title of the current view in the NavBar. If the title is very lengthy and can not be streamlined, you can be vacant.
- `SegmentedControl` component can be used to hierarchize content in the NavBar.
- Avoid using too many elements to fill the navigation bar. In general, a "return button", a "title", a "current view of the control" is enough; if you already have a SegmentedControl, generally only with a "return button" or "current view of the control."
- For icons and text controls, to provide greater click hotspots.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[mode]` | Style mode | `'dark' \| 'light'` | `'dark'`
| `[icon]` | Appears on the leftmost icon placeholder | `TemplateRef` | - |
| `[leftContent]` | Left content | `string \| TemplateRef` | - |
| `[rightContent]` | Right content | `string \| TemplateRef` | - |
| `(onLeftClick)` | Click the callback on the left | `EventEmitter<object>` | - |

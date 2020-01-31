---
category: Components
type: Data Display
title: Tag
---

Tag for categorizing or markuping, can be used to make classification or mark the attributes and dimensions of objects.

### Rules

- The content should be displayed completely.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[small]` | Whether to show a smaller size | `boolean` | `false` |
| `[disabled]` | Whether is disabled | `boolean` | `false` |
| `[closable]` | Whether can be closed(invalid in `small` or `disabled` mode) | `boolean` | `false` |
| `[selected]` | Whether is selected by default | `boolean` | `false` |
| `(onChange)` | The callback function that is triggered when the selected state changes | `EventEmitter<boolean>` | - |
| `(onClose)` | The callback function that is triggered when the tag is closed | `EventEmitter<void>` | - |
| `(afterClose)` | The callback function that is triggered after close | `EventEmitter<void>` | - |

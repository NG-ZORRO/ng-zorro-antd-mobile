---
category: Components
type: Feedback
title: Progress
---

Progress Bar to indicate your task's progress.

### Rules

- When you need a accurate progress，otherwise you should use ActivityIndicator.
- Hide the unfilled part when used with NavBar for better visual feeling.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[percent]` | Percent value of progress | `number` | `0`
| `[position]` | Position of progress bar | `'fixed' \| 'normal'` | `'fixed'`
| `[unfilled]` | Whether to fill unfinished part of progress | `boolean` | `true`
| `[barStyle]` | The style of bar(only when selector is nzm-progress) | `object` | `{}`

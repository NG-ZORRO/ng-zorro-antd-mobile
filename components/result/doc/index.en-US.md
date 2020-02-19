---
category: Components
type: Combination
title: Result
---

Result page contains feedback like illustrations, icons and text.

### Rules

- Use for significant feedback like payment success or network failure.
- Improve brand value with beautiful illustrations.
- Provide obvious operation point for error type result page, eg: reload page.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[imgUrl]` | Image url | `string` | - |
| `[img]` | Image node (could be `<img src="" />` or `<Icon type="" />`), which will override `imgUrl` | `TemplateRef` | - |
| `[title]` | Title of result page | `TemplateRef \| string` | - |
| `[message]` | Message text of result page | `TemplateRef \| string` | - |
| `[buttonText]` | Text of built-in button | `string` | - |
| `[buttonType]` | Type of built-in button | `string` | - |
| `(onButtonClick)` | Callback of clicking built-in button | `EventEmitter<object>` | - |

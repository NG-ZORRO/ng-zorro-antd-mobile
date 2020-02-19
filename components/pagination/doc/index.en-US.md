---
category: Components
type: Navigation
title: Pagination
---

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

### Rule

- When it will take a long time to load/render all items.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[mode]` | The mode of `Pagination` | `'button' \| 'number' \| 'pointer'` | `'button'` |
| `[current]` | Current page index | `number` | `1`  |
| `[total]` |  Total number of data | `number` | `0` |
| `[simple]` | Whether to hide number | `boolean` | `false` |
| `[disabled]` | Whether is disabled | `boolean` | `false` |
| `[locale]` | [i18n](/components/locale-provider/) setting, you can override the configuration of the global `LocaleProvider` | `{prevText: string \| TemplateRef, nextText: string \| TemplateRef}` | - |
| `[onChange]` | Invoked with the new index when the value changes | `EventEmitter<number>` | - |

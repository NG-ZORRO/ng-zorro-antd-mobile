---
category: Components
type: Data Entry
title: Button
---

To trigger an operation.


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[type]` | Button type | `'default' \| 'primary' \| 'ghost' \| 'warning'` | `'default'` |
| `[size]` | Button size | `'large' \| 'small'` | `large`|
| `[disabled]` | Set disabled | `boolean` | `false` |
| `[style]` | Custom style | `object` | - |
| `[inline]` | Whether set as an inline button | `boolean` | `false` |
| `[loading]` | Whether set loading state | `boolean` | `false` |
| `[icon]` | Can be set to one type value of the [Icon Component](https://mobile.ant.design/components/icon) or any valid TemplateRef. (Note: It will be overwritten by the `loading` setting) | `string \| TemplateRef` | - |
| `(onClick)` | Set the handler to handle `click` event | `EventEmitter<void>` | - |

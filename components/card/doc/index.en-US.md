---
category: Components
type: Data Display
title: Card
---

Card can be used to organize information and operations, usually also as an entry for detailed information.

### Rules
- The shape is rectangular.
- The content can consist of multiple elements of varying type, eg: images, texts, buttons, etc.

## API

### Card

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[full]` | Whether is full column | `boolean` | `false` |

### CardHeader

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[title]` | Title for `CardHeader` | `string \| TemplateRef` | - |
| `[thumb]` | Thumb to render in the left of  `CardHeader` | `string \| TemplateRef` | - |
| `[thumbStyle]` | Style of thumb | `object` | `{}` |
| `[extra]` | Extra content to render in the right of `CardHeader` | `string \| TemplateRef` | - |

### CardFooter

Properties | Descrition | Type | Default
-----------|------------|------|--------z
| `[content]` | Content of `CardFooter` | `string \| TemplateRef` | - |
| `[extra]` | Extra content of `CardFooter` | `string \| TemplateRef` | - |
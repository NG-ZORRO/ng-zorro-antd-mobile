---
category: Components
type: Data Display
title: Accordion
---

You can collapse / expand the content area.

### Rules
- Group and hide complex areas.
- Typically, only a single content area is allowed to expand at a time; in special cases, multiple content areas can be expanded at the same time.


## API

### Accordion

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[activeKey]` | Current active Panel key, The first panel key on accordion mode | `Array \| string` | - |
| `[defaultActiveKey]` | Default active key | `string` | - |
| `[accordion]` | Accordion mode | `boolean` | `false` |
| `(onChange)` | Called when collapse Panel is changed | `EventEmitter<string>` | - |

### AccordionPanel

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[key]` | Corresponding activeKey | `string` | - |
| `[header]` | Header content of Panel | `string \| TemplateRef` | - |

Note: Currently does not support nested use for NG.

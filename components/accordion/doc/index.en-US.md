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
| activeKey | current active Panel key | Array or String   | The first panel key on accordion mode|
| defaultActiveKey | default active key | String   | null |
| onChange    | called when collapse Panel is changed | (key: string): void |  noop  |
| accordion  | accordion mode | Boolean | false  |

### Accordion.Panel

Properties | Descrition | Type | Default
-----------|------------|------|--------
| key  | corresponding activeKey   | String   | -   |
| header | header content of Panel | TemplateRef or String or html(<div>header</div>) | -   |

Note: Currently does not support nested use for NG.

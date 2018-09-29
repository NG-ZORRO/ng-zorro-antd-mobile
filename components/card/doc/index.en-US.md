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
|   full  |  whether is full column | boolean | `false` |

### CardHeader

Properties | Descrition | Type | Default
-----------|------------|------|--------
|title| title for `CardHeader` | TemplateRef、String | <span> </span> |
|thumb| thumb to render in the left of  `CardHeader`  | String、TemplateRef | <span> </span> |
|thumbStyle| style of thumb | Object | {} |
|extra| extra content to render in the right of `CardHeader` | TemplateRef、String | <span> </span> |

### CardBody

Properties | Descrition | Type | Default
-----------|------------|------|--------

### CardFooter

Properties | Descrition | Type | Default
-----------|------------|------|--------
|content| content of `CardFooter` | TemplateRef、String |<span> </span>|
|extra| extra content of `CardFooter` | TemplateRef、String | <span> </span> |

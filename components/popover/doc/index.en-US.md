---
category: Components
type: Navigation
title: Popover
---

After clicking on a control or an area, a Popover menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.


## API

### Popover

Properties | Descrition | Type | Default
-----------|------------|------|--------
| onVisibleChange    | visible state change callback    | (visible: bool): void |  -   |
| placement    | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| mask    | Whether to display the mask background layer  | Boolean |  false  |
| overlay   | Popup layer content  | TemplateRef |  -   |
| onSelect   | when an option is selected    | (node: any, index?: number): void |  -   |

### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| disabled   | set disabled    | Boolean |  false   |
| style  | item style   | Object |  -   |
| icon   | icon   | TemplateRef |  -   |

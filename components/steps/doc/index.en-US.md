---
category: Components
type: Data Display
cols: 1
title: Steps
---

Steps is typically used for displaying the progress of a task, or guiding users through the steps of a complex flow.

### Rules

- Suitable for step-by-step and long-lasting task, e.g. the process of transfer accounts. If the task is continuous and short, such as opening a page, component `Progress` will fit better.
- When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier, e.g. register new account.


## API

```jsx
<Steps>
  <Step title="First" />
  <Step title="Second" />
  <Step title="Third" />
</Steps>
```

### Steps

The Steps container.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[current]` | To set the current step, counting from 0. You can overwrite this state by using `status` of `Step` | `number` | `0` |
| `[size]` | Size | `large \| 'small'` | - |
| `[status]` | Current step's states | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'` |
| `[direction]` | To specify the direction of the step bar | `'vertical' \| 'horizontal'` | `'vertical'`  |

### Step

A single step used as child component of the Step.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[status]` | To specify the status. It will be automatically set by `current` of `Steps` if not configured | `'wait' \| 'process' \| 'finish' \| 'error'` | `wait` |
| `[title]` | Title of the step | `string \| TemplateRef` | - |
| `[description]` | Detail of the step | `string \| TemplateRef` | - |
| `[icon]` | Icon of the step | `string \| TemplateRef` | - |

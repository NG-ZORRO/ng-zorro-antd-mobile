---
category: Components
type: Data Display
title: Badge
---

The red dot at corner for notification and getting user attention.

### When to use

- Use plain dot badge when user just need to know there is something new, eg: one-to-one new messages.
- Use numberic badge when user need to know specific number of notifications, eg: new messages from a group.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
`[size]` | Size of badge | `'large' \| 'small'` | `'small'`
`[text]` | Text or number inside badge | `string \| number` | -
`[corner]` | Whether is badge at corner position | `boolean` | `false`
`[dot]` | Show badge as a red dot | `boolean` | `false`
`[overflowCount]` | Max count to show | `number` | `99`
`[hot]` | Hot commercial style | `boolean` | `false`

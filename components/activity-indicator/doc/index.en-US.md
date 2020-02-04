---
category: Components
type: Feedback
title: ActivityIndicator
---

`ActivityIndicator` indicates that a task is currently in progress.

### Rules
- Don't stop activity indicator if the task is not completed.
- By providing meaningful texts under certain circumstances can help user understand which task is in progress. eg: uploading photos.
- If you know the user's waiting time, you can use `Progress` instead.


## API

```jsx
<ActivityIndicator />
<ActivityIndicator color="white" />
<ActivityIndicator size="large" />
<ActivityIndicator text="loading" />
<ActivityIndicator toast />
<ActivityIndicator toast text="loading" />
```

### ActivityIndicator

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[animating]` | Whether to show the indicator | `boolean`  | `true`  |
| `[size]` | Size of the indicator | `'small' \| 'large'` | `'small'`  |
| `[toast]` | Whether to use toast style | `boolean` | `false`  |
| `[text]` | Loading text behind the indicator | `string` | - |

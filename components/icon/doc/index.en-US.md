---
category: Components
type: Data Display
title: Icon
---

## Naming Conventions

Each icon has its own semantic naming，the naming rules are as follows:

- The solid and line icons have same name，we use `-o` to distinguish it. eg: `question-circle` (solid icon), `question-circle-o` (line icon)
- Sequence in naming: `[icon name]-[shape(optional)]-[`-o` or not]-[direction(optional)]`。

## How to Use (WEB)

```html
<Icon [type]="'check'"></Icon>
```

### Tips

Now, we only support the built-in 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up' , 'left', 'right', 'ellipsis', 'loading' these icon types, **no longer support other custom types of icon**. If you need to use your custom icon type, there are several ways:

2. Use your own iconfont file
3. Other methods, you can reuse the `.am-icon` style name we have provided

## API

| Properties | Description | Type | Default |
|------------|----------------|----------------|--------------|
| `[type]` | Icon type | `string` | - |
| `[size]` | Icon size | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `[color]` | Icon color | `string` | `'#000'` |

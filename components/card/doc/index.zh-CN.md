---
category: Components
type: Data Display
title: Card
subtitle: 卡片
---


用于组织信息和操作，通常也作为详细信息的入口。

### 规则
- 形状为矩形。
- 可包含多种类型的元素，eg：图片、文字、按钮等。

## API

### Card

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|   full  |  是否通栏  | boolean | `false` |

### CardHeader

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|title| 卡片标题 | TemplateRef、String | <span> </span> |
|thumb| 卡片标题图片 | String、TemplateRef | <span> </span> |
|thumbStyle| 标题图片样式 | Object | {} |
|extra| 卡片标题辅助内容 | TemplateRef、String | <span> </span> |

### CardBody

属性 | 说明 | 类型 | 默认值
----|-----|------|------

### CardFooter

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|content|尾部内容 | TemplateRef、String | <span> </span> |
|extra| 尾部辅助内容 | TemplateRef、String | <span> </span> |

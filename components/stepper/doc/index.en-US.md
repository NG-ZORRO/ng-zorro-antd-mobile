---
category: Components
type: Data Entry
title: Stepper
---

`Stepper` can be used to increase or decrease value step by step.

### Rule
- When you want to make small adjustments to the value, you can use `Stepper`. eg: Adjust the annual return from 4.00% to 4.05%.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| min     | Specifies the minimum value   | Number | -Infinity        |
| max     | Specifies the maximum value       | Number      | Infinity           |
| ngModel     | Specifies the value of the `Stepper`, dobule binding       | Number      | <span> </span> |
| ngModelChange     | Called when value of the `Stepper` changed      | (): void      |   <span> </span>     |
| value     | Specifies the value of the `Stepper`       | Number      | <span> </span> |
| step     | Specifies the legal number intervals  | Number or String      |  1      |
| defaultValue     | Specifies the defaultValue of the `Stepper`       | Number      |    <span> </span>   |
| onChange     | Called when value of the `Stepper` changed      | (): void      |   <span> </span>     |
| disabled     | Specifies the `Stepper` should be disabled      | Boolean      |      false      |
| readOnly     | Specifies the `Stepper` is read only       | Boolean      |      false      |
| showNumber   | Whether to display number value  | Boolean      |      false      |

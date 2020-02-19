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
| `[min]` | Specifies the minimum value | `number` | - |
| `[max]` | Specifies the maximum value | `number` | - |
| `[value]` | Specifies the value of the `Stepper` | `number` | - |
| `[step]` | Specifies the legal number intervals | `number \| string` | `1` |
| `[defaultValue]` | Specifies the defaultValue of the `Stepper` | `number` | - |
| `[disabled]` | Specifies the `Stepper` should be disabled | `boolean` | `false` |
| `[readOnly]` | Specifies the `Stepper` is read only | `boolean` | `false` |
| `[showNumber]` | Whether to display number value | `boolean` | `false` |
| `[(ngModel)]` | Specifies the value of the `Stepper` | `number` | - |
| `(ngModelChange)` | Called when value of the `Stepper` changed | `EventEmitter<void>` | - |
| `(onChange)` | Called when value of the `Stepper` changed | `EventEmitter<void>` | - |

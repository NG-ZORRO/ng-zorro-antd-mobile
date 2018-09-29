---
category: Components
type: Data Entry
title: SearchBar
---

Normally located below NavBar, the activation status is exited by the Cancel button.

### Rules

- Should fill some text in placeholder to remind the user to enter the relevant content, such as: "双11特卖".
- Below the SearchBar, you can provide useful labels copy to help users complete the input directly by clicking, such as: List some of the most recent search keywords.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultValue |  the uncontrolled default value    | String | <span> </span> |
| value      |  the controlled current value  | String | <span> </span> |
| placeholder    |    placeholder   | String | <span> </span> |
| onSubmit    |  submit event (click the enter on the keyboard) | (val: string): void | <span> </span> |
| onChange    |    change event callback     | (val: string): void | <span> </span> |
| onFocus    |    focus event callback     | (): void | <span> </span> |
| onBlur    |    blur event callback     | (): void | <span> </span> |
| onCancel  | Click the `Cancel` button to trigger (The text of the input box is no longer automatically cleared) | (val: string): void | <span> </span> |
| showCancelButton |  Whether the `Cancel` button is always displayed  | bool |  `false`  |
| cancelText  |  Customize the text of the `Cancel` button   | String |  `Cancel`  |
| disabled    |   Set disabled  | bool |  `false`  |
| onClear |  Click the clear icon to trigger   | (val: string): void | <span> </span> |
| maxLength     |  The maxlength attribute limits the number of characters that SearchBar can accept    | number | -  |

## SearchBar Instance methods

Property | Description | Type | Default
----|-----|------|------
| focus    | Force focus back onto the search input node  | (): void |  -  |

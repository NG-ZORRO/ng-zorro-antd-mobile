---
category: Components
type: Data Entry
title: Calendar
---

Used to select a date range.

### Rules
-

## API

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
enterDirection|enter direction |'horizontal' \| 'vertical'| vertical|false
locale|locale|Models.Locale|<span> </span>|false
onCancel|on cancel|() => void|<span> </span>|false
onConfirm|on confirm|(startDateTime?: Date, endDateTime?: Date) => void|<span> </span>|false
pickTime|pick time|boolean| false|false
prefixCls| prefix class|string| rmc-calendar|false
showShortcut|show shortcut|boolean| false|false
type|select type. one: one-day range: date range|'one' \| 'range'| range|false
visible|visiable|boolean| false|false
defaultDate|the default date for show|Date| today|false
getDateExtra|extra info|(date: Date) => Models.ExtraData|<span> </span>|false
initalMonths|inital months|number| 6|false
maxDate|max date|Date|<span> </span>|false
minDate|min date|Date|<span> </span>|false
onSelect | on select dates callback | (date: Date, state?: \[Date \| undefined, Date \| undefined\]) => \[Date, Date\] \| \[Date\] \| void |<span> </span> | false
onSelectHasDisableDate|on select has disable date|(date: Date[]) => void|<span> </span>|false
rowSize|row size|'normal' \| 'xl'|<span> </span>|false
defaultValue | default date select value | \[Date, Date\] \| \[Date\] |<span> </span> | false
defaultTimeValue|default time of timePicker|Date|<span> </span>|false

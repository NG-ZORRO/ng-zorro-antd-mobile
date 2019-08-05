import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import { CalendarShortcutPanelPropsType } from './PropsType';

@Component({
  selector: 'CalendarShortcutPanel, nzm-calendar-shortcut-panel',
  templateUrl: './shortcut-panel.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarShortcutPanelComponent {
  props = {} as CalendarShortcutPanelPropsType;

  @Input()
  set locale(value) {
    this.props.locale = value;
  }
  @Input()
  set onSelect(value) {
    this.props.onSelect = value;
  }

  @HostBinding('class.shortcut-panel') shortcutPanel: boolean = true;

  constructor() {}

  onClick = (type: string) => {
    const { onSelect } = this.props;
    const today = new Date();

    switch (type) {
      case 'today':
        onSelect(
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0),
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)
        );
        break;

      case 'yesterday':
        onSelect(
          new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0),
          new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12)
        );
        break;

      case 'lastweek':
        onSelect(
          new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0),
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)
        );
        break;

      case 'lastmonth':
        onSelect(
          new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0),
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)
        );
        break;
    }
  }
}

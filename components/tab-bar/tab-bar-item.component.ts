import {
  Component,
  Input,
  Output,
  ViewChild,
  TemplateRef,
  EventEmitter
} from '@angular/core';
import { TabPane } from '../tabs/tab-pane.component';

export interface OnPressEvent {
  title: string;
  key: string;
}

@Component({
  selector: 'TabBarItem, nzm-tab-bar-item',
  templateUrl: './tab-bar-item.component.html'
})
export class TabBarItem extends TabPane {
  prefixCls: string = 'am-tab-bar-tab';
  selected: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';

  @ViewChild('tabBarTab')
  tabBarTab: TemplateRef<void>;

  @Input()
  key: string = '';
  @Input()
  title: string = '';
  @Input()
  dot: boolean = false;
  @Input()
  badge: number | string = null;
  @Input()
  icon: string | TemplateRef<void> = null;
  @Input()
  selectedIcon: string | TemplateRef<void> = null;
  @Output()
  onPress: EventEmitter<OnPressEvent> = new EventEmitter<OnPressEvent>();

  constructor() {
    super();
  }

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }

}

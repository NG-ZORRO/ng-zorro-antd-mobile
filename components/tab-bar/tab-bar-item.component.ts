import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { TabPaneComponent } from '../tabs/tab-pane.component';

@Component({
  selector: 'TabBarItem, nzm-tab-bar-item',
  templateUrl: './tab-bar-item.component.html'
})
export class TabBarItemComponent extends TabPaneComponent {
  prefixCls: string = 'am-tab-bar-tab';
  selected: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';

  @ViewChild('tabBarTab', { static: true })
  tabBarTab: TemplateRef<void>;

  @Input()
  key: string = '';
  @Input()
  dot: boolean = false;
  @Input()
  badge: number | string = null;
  @Input()
  icon: string | TemplateRef<void> = null;
  @Input()
  selectedIcon: string | TemplateRef<void> = null;

  constructor() {
    super();
  }

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
}

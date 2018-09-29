import {
  Component,
  AfterContentInit,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  Optional
} from '@angular/core';
import { TabPane } from '../tabs/tab-pane.component';

export interface OnPressEvent {
  title: string;
  key: string;
}

@Component({
  selector: 'TabBarTab, nzm-tab-bar-tab',
  templateUrl: './tab-bar-tab.component.html'
})
export class TabBarTab implements AfterContentInit {
  prefixCls: string = 'am-tab-bar-tab';
  selected: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';

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

  @HostBinding('class.am-tab-bar-tab')
  tabBarTab: boolean = true;

  constructor(@Optional() public tabPane: TabPane) {}

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }

  ngAfterContentInit() {
    if (this.tabPane.active) {
      this.selected = true;
    } else {
      this.selected = false;
    }
    this.tintColor = this.tabPane.tintColor;
    this.unselectedTintColor = this.tabPane.unselectedTintColor;
  }
}

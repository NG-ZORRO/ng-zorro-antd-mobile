import { Component, AfterContentInit, Input, ContentChildren, QueryList, HostBinding } from '@angular/core';
import { TabPane } from '../tabs/tab-pane.component';
import { TabBarTab } from './tab-bar-tab.component';

export type TabBarPositionType = 'top' | 'bottom';

@Component({
  selector: 'TabBar, nzm-tab-bar',
  templateUrl: './tab-bar.component.html'
})
export class TabBar implements AfterContentInit {
  prefixCls: string = 'am-tab-bar';

  private _tintColor: string = '#108ee9';
  private _unselectedTintColor: string = '#888';

  @ContentChildren(TabPane, { descendants: true })
  tabPanes: QueryList<TabPane>;
  @ContentChildren(TabBarTab, { descendants: true })
  tabBarTabs: QueryList<TabBarTab>;

  @Input()
  hidden: boolean = false;
  @Input()
  activeTab: number = 0;
  @Input()
  barTintColor: string = 'white';
  @Input()
  tabBarPosition: TabBarPositionType = 'bottom';
  @Input()
  get tintColor(): string {
    return this._tintColor;
  }
  set tintColor(color: string) {
    this._tintColor = color;
    if (this.tabBarTabs && this.tabBarTabs.length > 0) {
      this.tabBarTabs.forEach((tabBarTab: TabBarTab) => {
        tabBarTab.tintColor = this._tintColor;
      });
    }
  }
  @Input()
  get unselectedTintColor(): string {
    return this._unselectedTintColor;
  }
  set unselectedTintColor(color: string) {
    this._unselectedTintColor = color;
    if (this.tabBarTabs && this.tabBarTabs.length > 0) {
      this.tabBarTabs.forEach((tabBarTab: TabBarTab) => {
        tabBarTab.unselectedTintColor = this._unselectedTintColor;
      });
    }
  }

  @HostBinding('class.am-tab-bar')
  tabBar: boolean = true;

  constructor() {}

  selectTabPane(index: number) {
    this.tabPanes.forEach((tabPane: TabPane, indexKey: number) => {
      if (index < indexKey) {
        tabPane.position = 'right-without-animation';
      } else if (index > indexKey) {
        tabPane.position = 'left-without-animation';
      } else {
        tabPane.position = 'center-without-animation';
      }
      if (index !== indexKey) {
        tabPane.active = false;
      } else {
        tabPane.active = true;
      }
    });
    if (this.tabBarTabs && this.tabBarTabs.length > 0) {
      this.tabBarTabs.forEach((tabBarTab: TabBarTab) => {
        tabBarTab.selected = false;
      });
      this.tabBarTabs.toArray()[index].selected = true;
      this.tabBarTabs.toArray()[index].onPress.emit({
        title: this.tabBarTabs.toArray()[index].title,
        key: this.tabBarTabs.toArray()[index].key
      });
    }
  }

  ngAfterContentInit() {
    this.selectTabPane(this.activeTab);
    this.tabPanes.forEach((tabPane: TabPane) => {
      tabPane.tintColor = this.tintColor;
      tabPane.unselectedTintColor = this.unselectedTintColor;
    });
  }
}

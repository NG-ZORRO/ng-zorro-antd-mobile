import { Component, AfterContentInit, Input, Output, ContentChildren, QueryList, HostBinding, EventEmitter } from '@angular/core';
import { TabBarItem } from './tab-bar-item.component';

export type TabBarTabPositionType = 'top' | 'bottom';
export interface OnPressEvent {
  index: number;
  title: string;
  key: string;
}

@Component({
  selector: 'TabBar, nzm-tab-bar',
  templateUrl: './tab-bar.component.html'
})
export class TabBar implements AfterContentInit {
  prefixCls: string = 'am-tab-bar';
  private _activeTab: number = 0;
  private _tintColor: string = '#108ee9';
  private _unselectedTintColor: string = '#888';

  @ContentChildren(TabBarItem, { descendants: true })
  tabBarItems: QueryList<TabBarItem>;

  @Input()
  hidden: boolean = false;
  @Input()
  get activeTab(): number {
    return this._activeTab;
  }
  set activeTab(tab: number) {
    this._activeTab = tab;
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.selectTabBarItem(tab);
    }
  }
  @Input()
  barTintColor: string = 'white';
  @Input()
  tabBarPosition: TabBarTabPositionType = 'bottom';
  @Input()
  get tintColor(): string {
    return this._tintColor;
  }
  set tintColor(color: string) {
    this._tintColor = color;
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem: TabBarItem) => {
        tabBarItem.tintColor = this._tintColor;
      });
    }
  }
  @Input()
  get unselectedTintColor(): string {
    return this._unselectedTintColor;
  }
  set unselectedTintColor(color: string) {
    this._unselectedTintColor = color;
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem: TabBarItem) => {
        tabBarItem.unselectedTintColor = this._unselectedTintColor;
      });
    }
  }
  @Output()
  onPress: EventEmitter<OnPressEvent> = new EventEmitter<OnPressEvent>();

  @HostBinding('class.am-tab-bar')
  tabBar: boolean = true;

  constructor() { }

  selectTabBarItem(index: number) {
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem: TabBarItem) => {
        tabBarItem.selected = false;
      });
      this.tabBarItems.toArray()[index].selected = true;
    }
  }

  tabBarTabOnPress(pressParam: OnPressEvent) {
    this.onPress.emit(pressParam);
  }

  ngAfterContentInit() {
    this.selectTabBarItem(this.activeTab);
  }

}

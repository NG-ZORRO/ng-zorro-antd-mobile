import {
  Component,
  AfterContentInit,
  Input,
  Output,
  ContentChildren,
  QueryList,
  HostBinding,
  EventEmitter
} from '@angular/core';
import { TabBarItemComponent } from './tab-bar-item.component';

export type TabBarTabPositionType = 'top' | 'bottom';
export interface TabBarOnPressEvent {
  index: number;
  title: string;
  key: string;
}

@Component({
  selector: 'TabBar, nzm-tab-bar',
  templateUrl: './tab-bar.component.html'
})
export class TabBarComponent implements AfterContentInit {
  prefixCls: string = 'am-tab-bar';
  private _activeTab: number = 0;
  private _tintColor: string = '#108ee9';
  private _unselectedTintColor: string = '#888';

  @ContentChildren(TabBarItemComponent, { descendants: true })
  tabBarItems: QueryList<TabBarItemComponent>;

  @Input()
  hidden: boolean = false;
  @Input()
  prerenderingSiblingsNumber: number = -1;
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
      this.tabBarItems.forEach((tabBarItem: TabBarItemComponent) => {
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
      this.tabBarItems.forEach((tabBarItem: TabBarItemComponent) => {
        tabBarItem.unselectedTintColor = this._unselectedTintColor;
      });
    }
  }
  @Output()
  onPress: EventEmitter<TabBarOnPressEvent> = new EventEmitter<TabBarOnPressEvent>();

  @HostBinding('class.am-tab-bar')
  tabBar: boolean = true;

  constructor() {}

  selectTabBarItem(index: number) {
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem: TabBarItemComponent) => {
        tabBarItem.selected = false;
      });
      this.tabBarItems.toArray()[index].selected = true;
    }
  }

  tabBarTabOnPress(pressParam: TabBarOnPressEvent) {
    this.onPress.emit(pressParam);
  }

  ngAfterContentInit() {
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem: TabBarItemComponent) => {
        tabBarItem.tintColor = this._tintColor;
        tabBarItem.unselectedTintColor = this._unselectedTintColor;
      });
    }
    this.selectTabBarItem(this.activeTab);
  }
}

import {
  Component,
  Input,
  Output,
  DoCheck,
  AfterContentInit,
  QueryList,
  ViewChild,
  ElementRef,
  HostBinding,
  TemplateRef,
  EventEmitter,
  ContentChildren,
  ViewEncapsulation
} from '@angular/core';
import { TabPaneComponent } from './tab-pane.component';
import { TabDirection, TabBarPositionType, TabsOnChangeEvent } from './PropsType';

@Component({
  selector: 'Tabs, nzm-tabs',
  templateUrl: './tabs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements DoCheck, AfterContentInit {
  prefixCls: string = 'am-tabs';
  selectedKey: number = 0;
  keyToSelect: number = 0;
  paneMoveStyle: string = 'translate3d(0, 0, 0)';

  private _startTime: number = 0;
  private _startPosition: number = 0;
  private _velocityThreshold: number = 0.3;
  private _tabDirection: TabDirection = 'horizontal';
  private _tabBarPosition: TabBarPositionType = 'top';

  @ContentChildren(TabPaneComponent, { descendants: false })
  tabPanes: QueryList<TabPaneComponent>;

  @ViewChild('TabContent', { static: true })
  tabContent: ElementRef;
  @ViewChild('DefaultTabBar')
  defaultTabBar: ElementRef;

  @Input()
  page: number = 5;
  @Input()
  swipeable: boolean = true;
  @Input()
  useOnPan: boolean = true;
  @Input()
  animated: boolean = true;
  @Input()
  tabBarUnderlineStyle: object;
  @Input()
  distanceToChangeTab: number = 0.3;
  @Input()
  tabTitleSize: number = 0;
  @Input()
  tabBarActiveTextColor: string = '';
  @Input()
  tabBarInactiveTextColor: string = '';
  @Input()
  renderTabBar: TemplateRef<void> = null;
  @Input()
  tabBarBackgroundColor: string = '#FFF';
  @Input()
  prerenderingSiblingsNumber: number = -1;
  @Input()
  tabBarTextStyle: object = {};
  /** should be removed when https://github.com/angular/angular/issues/20810 resolved **/
  @Input()
  tabPanesContent: QueryList<TabPaneComponent> = null;
  @Input()
  get activeTab(): number {
    return this.selectedKey;
  }
  set activeTab(value: number) {
    this.keyToSelect = value;
  }
  @Input()
  get tabBarPosition(): TabBarPositionType {
    return this._tabBarPosition;
  }
  set tabBarPosition(position: TabBarPositionType) {
    this._tabBarPosition = position;
    switch (position) {
      case 'top':
        this.amTabsTop = true;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        break;
      case 'left':
        this.amTabsTop = false;
        this.amTabsLeft = true;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        break;
      case 'bottom':
        this.amTabsTop = false;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = true;
        break;
      case 'right':
        this.amTabsTop = false;
        this.amTabsLeft = false;
        this.amTabsRight = true;
        this.amTabsBottom = false;
        break;
      default:
        break;
    }
  }
  @Input()
  get tabDirection() {
    return this._tabDirection;
  }
  set tabDirection(direction: TabDirection) {
    this._tabDirection = direction;
    switch (direction) {
      case 'horizontal':
        this.amTabsHorizontal = true;
        this.amTabsVertical = false;
        break;
      case 'vertical':
        this.amTabsHorizontal = false;
        this.amTabsVertical = true;
        break;
      default:
        break;
    }
  }
  @Output()
  onChange: EventEmitter<TabsOnChangeEvent> = new EventEmitter<TabsOnChangeEvent>();
  @Output()
  onTabClick: EventEmitter<TabsOnChangeEvent> = new EventEmitter<TabsOnChangeEvent>();

  @HostBinding('class.am-tabs')
  amTabs: boolean = true;
  @HostBinding('class.am-tabs-top')
  amTabsTop: boolean = true;
  @HostBinding('class.am-tabs-left')
  amTabsLeft: boolean = false;
  @HostBinding('class.am-tabs-right')
  amTabsRight: boolean = false;
  @HostBinding('class.am-tabs-bottom')
  amTabsBottom: boolean = false;
  @HostBinding('class.am-tabs-vertical')
  amTabsVertical: boolean = false;
  @HostBinding('class.am-tabs-horizontal')
  amTabsHorizontal: boolean = true;

  constructor() {}

  clickTab(index: number) {
    if (this.selectedKey !== index) {
      this.keyToSelect = index;
      this.onTabClick.emit({ index: this.keyToSelect });
    }
  }

  getCurrentTabPanes(): QueryList<TabPaneComponent> {
    return this.tabPanesContent || this.tabPanes;
  }

  onTouchStart(event) {
    this._startTime = event.timeStamp;
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      if ('horizontal' === this._tabDirection) {
        this._startPosition =
          event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
      } else if ('vertical' === this._tabDirection) {
        this._startPosition =
          event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
      }
    }
  }

  onTouchMove(event) {
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      if ('horizontal' === this._tabDirection) {
        const distance = event.changedTouches[0].clientX - this._startPosition;
        if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
          return;
        } else if (distance > 0 && this.activeTab === 0) {
          return;
        }
        // velocity 小于阈值才认为是pan操作
        if (
          this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
          this.useOnPan &&
          this.swipeable &&
          this.animated
        ) {
          this.paneMoveStyle = 'translate3d(calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px), 0, 0 )';
        }
      } else if ('vertical' === this._tabDirection) {
        const distance = event.changedTouches[0].clientY - this._startPosition;
        if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
          return;
        } else if (distance > 0 && this.activeTab === 0) {
          return;
        }
        if (
          this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
          this.useOnPan &&
          this.swipeable &&
          this.animated
        ) {
          this.paneMoveStyle = 'translate3d(0, calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px, 0 )';
        }
      }
    }
  }

  onTouchEnd(event) {
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      if ('horizontal' === this._tabDirection) {
        const distance = event.changedTouches[0].clientX - this._startPosition;
        const distanceToChangeTabPx = this.tabContent.nativeElement.offsetWidth * this.distanceToChangeTab;
        if (
          (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
            (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
          (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
            (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))
        ) {
          if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
            this.keyToSelect++;
          } else if (distance > 0 && this.activeTab > 0) {
            this.keyToSelect--;
          }
        }
        this.paneMoveStyle = 'translate3d(-' + this.selectedKey * 100 + '%, 0, 0 )';
      } else if ('vertical' === this._tabDirection) {
        const distance = event.changedTouches[0].clientY - this._startPosition;
        const distanceToChangeTabPx = this.tabContent.nativeElement.offsetHeight * this.distanceToChangeTab;
        if (
          (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
            (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
          (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
            (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))
        ) {
          if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
            this.keyToSelect++;
          } else if (distance > 0 && this.activeTab > 0) {
            this.keyToSelect--;
          }
        }
        this.paneMoveStyle = 'translate3d(0, -' + this.selectedKey * 100 + '%, 0 )';
      }
    }
  }

  ngAfterContentInit() {
    this.selectTabPane(this.keyToSelect);
    this.selectedKey = this.keyToSelect;
  }

  ngDoCheck() {
    if (this.keyToSelect !== this.selectedKey && this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      this.selectTabPane(this.keyToSelect);
      this.selectedKey = this.keyToSelect;
      this.onChange.emit({ index: this.selectedKey });
    }
  }

  private selectTabPane(index: number) {
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      const actualKeyToSelect = Math.min(this.getCurrentTabPanes().length - 1, Math.max(index || 0, 0));
      if ('horizontal' === this._tabDirection) {
        this.paneMoveStyle = 'translate3d(-' + actualKeyToSelect * 100 + '%, 0, 0 )';
      } else if ('vertical' === this._tabDirection) {
        this.paneMoveStyle = 'translate3d(0, -' + actualKeyToSelect * 100 + '%, 0 )';
      }
    }
  }

  private getVelocity(deltaDistance, deltaTime) {
    return Math.abs(deltaDistance / deltaTime);
  }
}

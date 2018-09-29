import {
  Component,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
  ElementRef,
  HostBinding,
  AfterViewInit,
  ContentChildren
} from '@angular/core';

export type TabBarPositionType = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'DefaultTabBar, nzm-default-tab-bar',
  templateUrl: './default-tab-bar.component.html'
})
export class DefaultTabBarComponent implements AfterViewInit {
  prefixCls: string = 'am-tabs-default-bar';
  inkBarStyle: object = {};
  tabsBarStyle: object = {};
  showPrev: boolean = false;
  showNext: boolean = false;
  selectedKey: number = 0;
  inkBarOffSet: number = 0;
  inkBarLength: number = 0;
  tabBarNavSwipedPosition: number = 0;
  tabBarNavSwipingPosition: number = 0;

  private _startPosition: number = 0;

  @ContentChildren('TabTitle')
  tabTitles: QueryList<ElementRef>;

  @ViewChild('TabsBarSwipe')
  tabsBarSwipe: ElementRef;

  @Input()
  page: number = 5;
  @Input()
  animated: boolean = true;
  @Input()
  tabBarUnderlineStyle: object;
  @Input()
  tabBarBackgroundColor: string = '#FFF';
  @Input()
  tabBarPosition: TabBarPositionType = 'top';
  @Input()
  get activeTab(): number {
    return this.selectedKey;
  }
  set activeTab(index: number) {
    if (index !== this.selectedKey) {
      this.selectedKey = index;
      if (this.tabTitles && this.tabTitles.length > 0) {
        this.setTabBarStyleCenter();
        this.setInkBarStatus(this.selectedKey);
      }
    }
  }

  @HostBinding('class.am-tabs-tab-bar-wrap')
  tabBarWrap = true;

  constructor(private _renderer: Renderer2) {}

  onTouchStart(event) {
    if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
      this._startPosition = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
    } else {
      this._startPosition = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
    }
  }

  onTouchMove(event) {
    event.preventDefault();
    event.stopPropagation();
    if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
      this.setTabBarNavSwipingPosition(
        event.changedTouches[0].clientX - this._startPosition,
        this.tabTitles.first.nativeElement.offsetWidth,
        this.tabsBarSwipe.nativeElement.offsetWidth
      );
      this.tabsBarStyle = {
        transition: '0ms',
        transform: 'translate3d(' + this.tabBarNavSwipingPosition + 'px, 0px, 0px)',
        webkitTransform: 'translate3d(' + this.tabBarNavSwipingPosition + 'px, 0px, 0px)'
      };
    } else {
      this.setTabBarNavSwipingPosition(
        event.changedTouches[0].clientY - this._startPosition,
        this.tabTitles.first.nativeElement.offsetHeight,
        this.tabsBarSwipe.nativeElement.offsetHeight
      );
      this.tabsBarStyle = {
        transition: '0ms',
        transform: 'translate3d(0, ' + this.tabBarNavSwipingPosition + 'px, 0px)',
        webkitTransform: 'translate3d(0, ' + this.tabBarNavSwipingPosition + 'px, 0px)'
      };
    }
  }

  onTouchEnd() {
    this.tabBarNavSwipedPosition = this.tabBarNavSwipingPosition;
  }

  onContentChange() {
    this.setTabsStyle();
    this.setInkBarStatus(this.activeTab);
  }

  ngAfterViewInit() {
    this.setTabsStyle();
    if (this.selectedKey > 0) {
      this.setTabBarStyleCenter();
    }
    this.setInkBarStatus(this.selectedKey);
  }

  private setTabsStyle() {
    if (this.tabTitles && this.tabTitles.length > 0) {
      if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
        this.tabTitles.forEach((tabTitle: any) => {
          this._renderer.setStyle(
            tabTitle.nativeElement,
            'width',
            this.getTabSize(this.page, this.tabTitles.length) + '%'
          );
        });
      } else {
        this.tabTitles.forEach((tabTitle: any) => {
          this._renderer.setStyle(
            tabTitle.nativeElement,
            'height',
            this.getTabSize(this.page, this.tabTitles.length) + '%'
          );
        });
      }
    }
  }

  private setTabBarStyleCenter() {
    if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
      this.setTabBarNavSwipedPosition(this.tabTitles.first.nativeElement.offsetWidth, this.tabsBarSwipe.nativeElement.offsetWidth);
      this.tabsBarStyle = {
        transform: 'translate3d(' + this.tabBarNavSwipedPosition + 'px, 0px, 0px)',
        webkitTransform: 'translate3d(' + this.tabBarNavSwipedPosition + ', 0px, 0px)'
      };
    } else {
      this.setTabBarNavSwipedPosition(this.tabTitles.first.nativeElement.offsetHeight, this.tabsBarSwipe.nativeElement.offsetHeight);
      this.tabsBarStyle = {
        transform: 'translate3d(0, ' + this.tabBarNavSwipedPosition + 'px, 0px)',
        webkitTransform: 'translate3d(0, ' + this.tabBarNavSwipedPosition + 'px, 0px)'
      };
    }
  }

  private setInkBarStatus(key: number) {
    if (this.tabTitles && this.tabTitles.length > 0) {
      if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
        this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetLeft;
        this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.offsetWidth;
        this.inkBarStyle = {
          width: this.inkBarLength + 'px',
          left: (this.selectedKey * 100) / this.page + '%'
        };
        Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
      } else {
        this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetTop;
        this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.offsetHeight;
        this.inkBarStyle = {
          height: this.inkBarLength + 'px',
          top: (this.selectedKey * 100) / this.page + '%'
        };
        Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
      }
    }
  }

  private setTabBarNavSwipingPosition(swipingDistance: number, swipingItemLength: number, viewportLength: number) {
    if (this.tabBarNavSwipedPosition + swipingDistance > 0) {
      this.tabBarNavSwipingPosition = 0;
    } else if (
      this.tabBarNavSwipedPosition + swipingDistance <
      viewportLength - swipingItemLength * this.tabTitles.length
    ) {
      this.tabBarNavSwipingPosition = viewportLength - swipingItemLength * this.tabTitles.length;
      this.showNext = false;
    } else {
      this.tabBarNavSwipingPosition = this.tabBarNavSwipedPosition + swipingDistance;
      this.showNext = true;
    }
    if (this.tabBarNavSwipingPosition < 0) {
      this.showPrev = true;
    } else {
      this.showPrev = false;
    }
  }

  private setTabBarNavSwipedPosition(swipingItemLength: number, viewportLength: number) {
    if (
      this.selectedKey >= Math.floor(this.page / 2) &&
      this.selectedKey <= this.tabTitles.length - 1 - Math.floor(this.page / 2)
    ) {
      this.tabBarNavSwipedPosition = viewportLength / 2 - swipingItemLength * (this.selectedKey + 1 / 2);
    } else if (this.selectedKey < Math.floor(this.page / 2)) {
      this.tabBarNavSwipedPosition = 0;
    } else {
      this.tabBarNavSwipedPosition = viewportLength - swipingItemLength * this.tabTitles.length;
    }
    if (this.tabBarNavSwipedPosition < 0) {
      this.showPrev = true;
    } else {
      this.showPrev = false;
    }
    if (this.tabBarNavSwipedPosition + swipingItemLength * this.tabTitles.length - viewportLength > 0) {
      this.showNext = true;
    } else {
      this.showNext = false;
    }
  }

  private getTabSize = (page: number, tabLength: number) => 100 / Math.min(page, tabLength);
}

import {
  Component,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
  ElementRef,
  HostBinding,
  AfterContentInit,
  ContentChildren,
  ChangeDetectorRef
} from '@angular/core';

import { TabBarPositionType } from './PropsType';

@Component({
  selector: 'DefaultTabBar, nzm-default-tab-bar',
  templateUrl: './default-tab-bar.component.html'
})
export class DefaultTabBarComponent implements AfterContentInit {
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

  @ViewChild('TabsBarSwipe', { static: true })
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
  tabTitleSize: number = 0;
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

  constructor(private _renderer: Renderer2, private _ref: ChangeDetectorRef) {}

  onTouchStart(event) {
    if (
      (this.tabTitleSize > 0 &&
        this.tabTitleSize * this.tabTitles.length >
          ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
            ? this.tabsBarSwipe.nativeElement.offsetWidth
            : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
      (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)
    ) {
      if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
        this._startPosition =
          event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
      } else {
        this._startPosition =
          event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
      }
    }
  }

  onTouchMove(event) {
    event.preventDefault();
    event.stopPropagation();
    if (
      (this.tabTitleSize > 0 &&
        this.tabTitleSize * this.tabTitles.length >
          ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
            ? this.tabsBarSwipe.nativeElement.offsetWidth
            : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
      (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)
    ) {
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
  }

  onTouchEnd() {
    if (
      (this.tabTitleSize > 0 &&
        this.tabTitleSize * this.tabTitles.length >
          ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
            ? this.tabsBarSwipe.nativeElement.offsetWidth
            : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
      (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)
    ) {
      this.tabBarNavSwipedPosition = this.tabBarNavSwipingPosition;
    }
  }

  onContentChange() {
    this.setTabsStyle();
    this.setInkBarStatus(this.selectedKey);
  }

  ngAfterContentInit() {
    this.setTabsStyle();
    this.setTabBarStyleCenter();
    this.setInkBarStatus(this.selectedKey);
  }

  private setTabsStyle() {
    if (this.tabTitles && this.tabTitles.length > 0) {
      if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
        this.tabTitles.forEach((tabTitle: any) => {
          this._renderer.setStyle(
            tabTitle.nativeElement,
            'width',
            this.tabTitleSize > 0 ? this.tabTitleSize + 'px' : this.getTabSize(this.page, this.tabTitles.length) + '%'
          );
        });
      } else {
        this.tabTitles.forEach((tabTitle: any) => {
          this._renderer.setStyle(
            tabTitle.nativeElement,
            'height',
            this.tabTitleSize > 0 ? this.tabTitleSize + 'px' : this.getTabSize(this.page, this.tabTitles.length) + '%'
          );
        });
      }
    }
  }

  private setTabBarStyleCenter() {
    if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
      this.setTabBarNavSwipedPosition(
        this.tabTitleSize > 0
          ? this.tabTitleSize
          : this.tabsBarSwipe.nativeElement.offsetWidth / Math.min(this.tabTitles.length, this.page),
        this.tabsBarSwipe.nativeElement.offsetWidth
      );
      this.tabsBarStyle = {
        transform: 'translate3d(' + this.tabBarNavSwipedPosition + 'px, 0px, 0px)',
        webkitTransform: 'translate3d(' + this.tabBarNavSwipedPosition + ', 0px, 0px)'
      };
    } else {
      this.setTabBarNavSwipedPosition(
        this.tabTitleSize > 0
          ? this.tabTitleSize
          : this.tabsBarSwipe.nativeElement.offsetHeight / Math.min(this.tabTitles.length, this.page),
        this.tabsBarSwipe.nativeElement.offsetHeight
      );
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
        this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.width;
        this.inkBarStyle = {
          width: this.inkBarLength,
          left:
            this.tabTitleSize > 0
              ? this.selectedKey * this.tabTitleSize + 'px'
              : (this.selectedKey * 100) / Math.min(this.tabTitles.length, this.page) + '%'
        };
        Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
      } else {
        this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetTop;
        this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.height;
        this.inkBarStyle = {
          height: this.inkBarLength,
          top:
            this.tabTitleSize > 0
              ? this.selectedKey * this.tabTitleSize + 'px'
              : (this.selectedKey * 100) / Math.min(this.tabTitles.length, this.page) + '%'
        };
        Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
      }
      this._ref.detectChanges();
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
    if (this.selectedKey * swipingItemLength + this.tabBarNavSwipedPosition <= 0) {
      if (0 === this.selectedKey) {
        this.tabBarNavSwipedPosition = 0;
      } else {
        this.tabBarNavSwipedPosition = (1 - this.selectedKey) * swipingItemLength;
      }
    } else if ((this.selectedKey + 1) * swipingItemLength >= viewportLength - this.tabBarNavSwipedPosition) {
      if (this.tabTitles.length - 1 === this.selectedKey) {
        this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 1) * swipingItemLength;
      } else {
        this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 2) * swipingItemLength;
      }
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

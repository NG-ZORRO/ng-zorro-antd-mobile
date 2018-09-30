import {
  ViewContainerRef,
  ViewChild,
  HostListener,
  Component,
  TemplateRef,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
export interface Indicator {
  activate?: any;
  deactivate?: any;
  release?: any;
  finish?: any;
}

@Component({
  selector: 'PullToRefresh, nzm-pull-to-refresh',
  templateUrl: './pull-to-refresh.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PullToRefreshComponent {
  transtionCls: any = {};
  style: object = {
    '-webkit-transform': 'translate3d( 0, 0, 0 )',
    transform: 'translate3d( 0, 0, 0 )'
  };
  startY: number;
  state: any = {
    currSt: 'deactivate',
    drag: false
  };

  private _indicator: Indicator = {
    activate: '松开立即刷新',
    deactivate: '下拉可以刷新',
    release: '刷新中。。。',
    finish: '完成刷新'
  };
  private _direction: string = 'down';
  private _clientHeight: number = 0;
  private _currentContentHeight: number = 0;
  private _footerHeight: number = 54;
  private _lastcontentOffset: number = 0;
  private _viewHeight: number = Math.max(window.innerHeight, window.innerWidth);

  @ViewChild('pullToRefresh', { read: ViewContainerRef })
  private _pullToRefresh: ViewContainerRef;

  @Input()
  scrollRefresh: boolean = false;
  @Input()
  distanceToRefresh: number = 25; //触发刷新距离
  @Input()
  damping: number = 100; // 下拉的最大距离
  @Input()
  get direction(): string {
    return this._direction;
  }
  set direction(value: string) {
    this._direction = value;
    this.refreshUp = this._direction === 'up';
    this.refreshDown = this._direction === 'down';
  }
  @Input()
  get indicator(): Indicator {
    return this._indicator;
  }
  set indicator(value: Indicator) {
    this._indicator.activate = value.activate ? value.activate : this._indicator.activate;
    this._indicator.deactivate = value.deactivate ? value.deactivate : this._indicator.deactivate;
    this._indicator.release = value.release ? value.release : this._indicator.release;
    this._indicator.finish = value.finish ? value.finish : this._indicator.finish;
  }
  @Output()
  footerRefresh: EventEmitter<any> = new EventEmitter();
  @Output()
  onRefresh: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-pull-to-refresh')
  refresh: boolean = true;
  @HostBinding('class.super-container')
  container: boolean = true;
  @HostBinding('class.am-pull-to-refresh-up')
  refreshUp: boolean = false;
  @HostBinding('class.am-pull-to-refresh-down')
  refreshDown: boolean = true;

  @HostListener('touchstart', ['$event'])
  touchstart(e) {
    if (this._direction === 'down') {
      if (document.getElementsByTagName('pulltorefresh')[0].scrollTop > 0) {
        this.startY = undefined;
        return;
      }
      this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
      this.state.drag = undefined;
    } else {
      this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
      this._clientHeight = this._pullToRefresh.element.nativeElement._clientHeight;
      this._currentContentHeight = document.getElementsByTagName('pulltorefresh')[0].clientHeight;
    }
    this.transtionCls = '';
  }
  @HostListener('touchmove', ['$event'])
  touchmove(e) {
    if (this._direction === 'down') {
      if (!this.startY) {
        return;
      }
      let distanceY = e.changedTouches[0].clientY - this.startY;
      if (distanceY < 0) {
        // 滚动
        this.state.drag = false;
      } else {
        // 下拉
        this.state.drag = true;
      }
      if (this.state.drag) {
        // 禁止滚动
        e.preventDefault();
      } else {
        return;
      }
      if (distanceY > this.damping) {
        //当超过设定阈值是，缓慢增加
        distanceY = (distanceY / (distanceY + this.damping)) * this.damping * 2;
      } else if (distanceY < 0) {
        distanceY = 0;
      }
      if (distanceY > this.distanceToRefresh) {
        this.state.currSt = 'activate';
      }
      this.style = {
        '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
        transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
      };
    } else {
      let distanceY = e.changedTouches[0].clientY - this.startY;
      //向上拉动的时候，如果当前窗口内容没有滚到最后，则不实现拖动的动作；向下滚动不实现拖动动作
      if (
        Math.abs(this._lastcontentOffset) <= this._clientHeight - this._currentContentHeight - this.distanceToRefresh ||
        distanceY > 0
      ) {
        // 滚动
        this.state.drag = false;
      } else {
        // 上拉
        this.state.drag = true;
      }
      if (this.state.drag) {
        // 禁止滚动
        e.preventDefault();
      } else {
        return;
      }
      //如果滑动到底部了，滑动距离随着拉动的距离增加缓慢增加
      distanceY = -(distanceY / (distanceY - this.damping)) * this.damping;
      if (Math.abs(distanceY) > this.distanceToRefresh) {
        this.state.currSt = 'activate';
      }
      this.style = {
        '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
        transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
      };
    }
  }
  @HostListener('touchend', ['$event'])
  touchend(e) {
    if (!this.startY || this.state.drag === false) {
      return;
    }
    const distanceY = e.changedTouches[0].clientY - this.startY;
    if (Math.abs(distanceY) >= this.distanceToRefresh) {
      this.state.currSt = 'release';
      if (this._direction === 'down') {
        this.translateY(this.distanceToRefresh + 1);
      } else {
        this.translateY(-this.distanceToRefresh - 1);
      }
      setTimeout(() => {
        this.state.currSt = 'finish';
        this.onRefresh.emit();
        setTimeout(() => {
          this.state.currSt = 'deactivate';
          this.translateY(0);
        }, 0);
      }, 500);
    } else {
      this.translateY(0);
    }
  }
  @HostListener('touchcancel', ['$event'])
  touchcancel(evt) {
    this.translateY(0);
  }
  @HostListener('scroll', ['$event'])
  scroll(evt) {
    const contentOffset = evt.target.scrollTop;
    const offset = contentOffset - this._lastcontentOffset;
    this._lastcontentOffset = contentOffset;
    if (!this.scrollRefresh) {
      return;
    }
    if (
      offset > 0 &&
      contentOffset > 0 &&
      evt.target.scrollTop + this._viewHeight > evt.target.scrollHeight - this._footerHeight / 2
    ) {
      setTimeout(() => {
        this.footerRefresh.emit('finished');
      }, 500);
    }
  }

  constructor() {}

  isTemplateRef(value) {
    if (value) {
      return value instanceof TemplateRef;
    }
  }

  translateY(distanceY) {
    this.transtionCls = 'am-pull-to-refresh-transition';
    this.style = {
      '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
      transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
    };
  }
}

import {
  Input,
  Output,
  Component,
  ViewChild,
  forwardRef,
  TemplateRef,
  HostBinding,
  EventEmitter,
  HostListener,
  ViewContainerRef,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export interface Indicator {
  activate?: any;
  deactivate?: any;
  release?: any;
  finish?: any;
}

@Component({
  selector: 'PullToRefresh, nzm-pull-to-refresh',
  templateUrl: './pull-to-refresh.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PullToRefreshComponent),
      multi: true
    }
  ]
})
export class PullToRefreshComponent implements ControlValueAccessor {
  transtionCls: any = {};
  style: object = {
    '-webkit-transform': 'translate3d( 0, 0, 0 )',
    transform: 'translate3d( 0, 0, 0 )'
  };
  startY: number;
  state: any = {
    currentState: 'deactivate',
    drag: false
  };

  private _headerIndicator: Indicator = {
    activate: '松开立即刷新',
    deactivate: '下拉可以刷新',
    release: '刷新中。。。',
    finish: '完成刷新'
  };

  private _footerIndicator: Indicator = {
    activate: '松开立即刷新',
    deactivate: '上拉可以刷新',
    release: '刷新中。。。',
    finish: '完成刷新'
  };

  private _startTime: number = 0;
  private _endTime: number = 0;
  private _endReach: boolean = false;
  private _direction: string = '';
  private _clientHeight: number = 0;
  private _currentContentHeight: number = 0;
  private _lastContentOffset: number = 0;
  private _ngModelOnChange: (value: object) => {};
  private _ngModelOnTouched: () => {};

  @ViewChild('pullToRefresh', { read: ViewContainerRef, static: true })
  private _pullToRefresh: ViewContainerRef;

  @Input()
  distanceToRefresh: number = 25; //触发刷新距离
  @Input()
  damping: number = 100; // 下拉的最大距离
  @Input()
  endReachedRefresh: boolean = false;
  @Input()
  refreshing: boolean = false;
  @Input()
  get direction(): string {
    return this._direction;
  }
  set direction(value: string) {
    this._direction = value;
    this.refreshUp = this._direction === 'up' || this._direction === '';
    this.refreshDown = this._direction === 'down' || this._direction === '';
  }
  @Input()
  get headerIndicator(): Indicator {
    return this._headerIndicator;
  }
  set headerIndicator(value: Indicator) {
    Object.assign(this._headerIndicator, value);
  }
  @Input()
  get footerIndicator(): Indicator {
    return this._footerIndicator;
  }
  set footerIndicator(value: Indicator) {
    Object.assign(this._footerIndicator, value);
  }
  @Output()
  onRefresh: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-pull-to-refresh')
  refresh: boolean = true;
  @HostBinding('class.super-container')
  container: boolean = true;
  @HostBinding('class.am-pull-to-refresh-up')
  refreshUp: boolean = this._direction === 'up' || this._direction === '';
  @HostBinding('class.am-pull-to-refresh-down')
  refreshDown: boolean = this._direction === 'down' || this._direction === '';

  @HostListener('touchstart', ['$event'])
  touchstart(e) {
    this._startTime = Date.now();
    if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
      if (this.ele.nativeElement.scrollTop > 0) {
        this.startY = undefined;
        return;
      }
      this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
      this.state.drag = undefined;
    } else {
      this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
      this._clientHeight = this._pullToRefresh.element.nativeElement.clientHeight;
      this._currentContentHeight = this.ele.nativeElement.clientHeight;
    }
    this.transtionCls = '';
  }
  @HostListener('touchmove', ['$event'])
  touchmove(e) {
    if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
      if (this.ele.nativeElement.scrollTop > 0) {
        return;
      }
      let distanceY = e.changedTouches[0].clientY - this.startY;
      this.state.drag = distanceY >= 0;
      if (this.state.drag) {
        // 禁止滚动
        if (e.cancelable) {
          e.preventDefault();
        }
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
        this.state.currentState = 'activate';
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
      }
      this.style = {
        '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
        transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
      };
    } else {
      let distanceY = e.changedTouches[0].clientY - this.startY;
      //向上拉动的时候，如果当前窗口内容没有滚到最后，则不实现拖动的动作；向下滚动不实现拖动动作
      if (
        Math.abs(this._lastContentOffset) < this._clientHeight - this._currentContentHeight - this.distanceToRefresh ||
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
        if (e.cancelable) {
          e.preventDefault();
        }
      } else {
        return;
      }
      //如果滑动到底部了，滑动距离随着拉动的距离增加缓慢增加
      distanceY = -(distanceY / (distanceY - this.damping)) * this.damping;
      if (Math.abs(distanceY) > this.distanceToRefresh) {
        this.state.currentState = 'activate';
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
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
      this.state.currentState = 'release';
      if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
        this.translateY(this.distanceToRefresh + 1);
      } else {
        this.translateY(-this.distanceToRefresh - 1);
      }
      if (this._ngModelOnChange) {
        this._ngModelOnChange(this.state);
      }
      setTimeout(() => {
        this.state.currentState = 'finish';
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
        if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
          this.onRefresh.emit('down');
        } else {
          this.translateY(-this.distanceToRefresh - 1);
          this.onRefresh.emit('up');
        }
        setTimeout(() => {
          this.state.currentState = 'deactivate';
          if (this._ngModelOnChange) {
            this._ngModelOnChange(this.state);
          }
          this.translateY(0);
        }, 0);
      }, 500);
    } else {
      this.translateY(0);
    }
  }
  @HostListener('touchcancel')
  touchcancel() {
    this.translateY(0);
  }
  @HostListener('scroll', ['$event'])
  scroll(evt) {
    this._endTime = Date.now();
    const contentOffset = evt.target.scrollTop;
    this._lastContentOffset = contentOffset;
    if (this._direction === '') {
      if (contentOffset > 0 && evt.target.scrollTop + this.ele.nativeElement.clientHeight === evt.target.scrollHeight) {
        setTimeout(() => {
          this._endReach = true;
        }, 100);
      } else {
        this._endReach = false;
      }
    }
    if (!this.endReachedRefresh || this._direction !== 'down') {
      return;
    }
    if (
      contentOffset > 0 &&
      evt.target.scrollTop + this.ele.nativeElement.clientHeight > evt.target.scrollHeight - this.distanceToRefresh &&
      this._endTime - this._startTime >= 100
    ) {
      this._startTime = this._endTime;
      if (this.refreshing) {
        this.state.currentState = 'release';
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
      }
      setTimeout(() => {
        if (this.endReachedRefresh) {
          this.onRefresh.emit('endReachedRefresh');
        }
        if (this.refreshing) {
          this.state.currentState = 'finish';
          if (this._ngModelOnChange) {
            this._ngModelOnChange(this.state);
          }
        }
      }, 500);
    } else {
      setTimeout(() => {
        if (this.refreshing) {
          this.state.currentState = 'finish';
          if (this._ngModelOnChange) {
            this._ngModelOnChange(this.state);
          }
        }
      }, 500);
    }
  }

  constructor(private ele: ElementRef) {}

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }

  translateY(distanceY) {
    this.transtionCls = 'am-pull-to-refresh-transition';
    this.style = {
      '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
      transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
    };
  }

  writeValue(value: object): void {
    if (value !== null) {
      this.state = value;
    }
  }

  registerOnChange(fn: (_: object) => {}): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._ngModelOnTouched = fn;
  }
}

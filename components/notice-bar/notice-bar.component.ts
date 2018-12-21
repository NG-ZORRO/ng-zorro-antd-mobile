import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IconHandler } from '../core/util/icon';

@Component({
  selector: 'NoticeBar, nzm-notice-bar',
  templateUrl: './notice-bar.component.html',
  providers: [IconHandler]
})
export class NoticeBarComponent implements OnInit, OnDestroy {
  actionDom: any;

  isShow = false;
  isStopScroll = false;
  styleDom: any;
  rate;
  marqueeScroll = 'scrolling';
  style = {};
  private _content;
  private _mode;
  private _icon;
  private _action;
  private _timer = null;
  private _width;

  @Input()
  set stopScrolling(value) {
    this.isStopScroll = value;
    if (value) {
      this.marqueeScroll = 'scrolling-stop';
      clearTimeout(this._timer);
      this._timer = setTimeout(function() {
        this.marqueeScroll = 'scrolling';
      }, 1000);
    }
  }
  @Input()
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  @Input()
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
  }
  @Input()
  get action() {
    return this._action;
  }
  set action(value) {
    this._action = value;
  }
  @Input()
  marqueeProps = { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} };
  @Input()
  noticeBarcontent = '';
  }
    this.dataProcess();
  }
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor(private _iconHandler: IconHandler) {
    this._iconHandler.load();
  }

  click() {
    this.onClick.emit(this._mode);
    if (this._mode === 'closable') {
      this.isShow = false;
    }
  }

  dataProcess() {
    this.isShow = true;
    this.style = {
      width: '200%'
    };
    if (window.innerWidth < this._width) {
      const count = this.marqueeProps.loop ? 'infinite' : 1;
      this.style = {
        width: this._width * 2 + 'px',
        'animation-name': `noticebarmarquee_${this._width}`,
        'animation-delay': `${this.marqueeProps.leading}ms`,
        'animation-duration': `${(1 / this.marqueeProps.fps) * this._width / window.innerWidth * 1000}s`,
        'animation-iteration-count': `${count}`
      };
      this.marqueeScroll = 'scrolling';
      scroll.call(this);
    } else {
      this.marqueeScroll = 'scrolling-stop';
    }
  }

  ngOnInit() {
    document.addEventListener('touchstart', () => {
      this.marqueeScroll = 'scrolling-stop';
    });

    document.addEventListener('touchend', () => {
      this.marqueeScroll = 'scrolling';
    });
  }

  ngOnDestroy() {
    const styleDom = document.getElementsByClassName('notice_bar_animation_cls');
    while (styleDom.length > 0) {
      styleDom[0].remove();
    }
  }
}

function scroll() {
  let styleDom = document.createElement('style');
  styleDom.setAttribute('class', 'notice_bar_animation_cls');
  styleDom.innerHTML = `@-webkit-keyframes noticebarmarquee_${this._width}{ 0% { left: 0px; } 100% { left: -${this._width}px; }}`;
  document.body.appendChild(styleDom);
}

function getRectWidth(text) {
  const _dom = document.createElement('div');
  _dom.innerHTML = text;
  _dom.style.position = 'absolute';
  _dom.style.left = '-9999';
  _dom.style.whiteSpace = 'nowrap';
  _dom.style.fontSize = getComputedStyle(window.document.documentElement)['font-size'];
  document.body.appendChild(_dom);
  const _w = _dom.clientWidth;
  document.body.removeChild(_dom);
  return _w;
}

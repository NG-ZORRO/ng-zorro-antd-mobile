import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IconHandler } from '../core/util/icon';
import * as util from './util';
@Component({
  selector: 'NoticeBar, nzm-notice-bar',
  templateUrl: './notice-bar.component.html',
  providers: [IconHandler]
})
export class NoticeBarComponent implements OnInit, OnDestroy {
  visiable = false;
  marqueeScroll = 'scrolling';
  style = {};
  private _width;
  private _option = {
    mode: '',
    icon: '',
    action: '',
    content: '',
    fontSize: '14px',
    scrolling: true,
    marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} }
  };
  @Input()
  get option() {
    return this._option;
  }
  set option(value) {
    Object.assign(this._option, value);
    this.dataProcess();
    if (this._option.scrolling) {
      this.marqueeScroll = 'scrolling';
    } else {
      this.marqueeScroll = 'scrolling-stop';
    }
  }
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor(private _iconHandler: IconHandler) {
    this._iconHandler.load();
  }

  click() {
    this.onClick.emit(this._option.mode);
    if (this._option.mode === 'closable') {
      this.visiable = false;
    }
  }

  dataProcess() {
    this.visiable = true;
    this.style = {
      width: '200%'
    };
    this._width = util.getTextWidth(this._option.content, this._option.fontSize);
    if (util.getWidthHeight().width < this._width) {
      const count = this._option.marqueeProps.loop ? 'infinite' : 1;
      let animationName = `noticebarmarquee_${this._width}`;
      this.style = {
        width: this._width * 2 + 'px',
        'animation-name': animationName,
        'animation-delay': `${this._option.marqueeProps.leading}ms`,
        'animation-duration': `${(((1 / this._option.marqueeProps.fps) * this._width) / util.getWidthHeight().width) *
          1000}s`,
        'animation-iteration-count': `${count}`
      };
      this.marqueeScroll = 'scrolling';
      this.insetKeyframe(animationName);
    } else {
      this.marqueeScroll = 'scrolling-stop';
    }
  }

  insetKeyframe(animationName) {
    util.insertKeyFrame(
      `@keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`,
      'notice_bar_animation_cls'
    );
    util.insertKeyFrame(
      `@-webkit-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`,
      'notice_bar_animation_cls'
    );
    util.insertKeyFrame(
      `@-moz-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`,
      'notice_bar_animation_cls'
    );
    util.insertKeyFrame(
      `@-o-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`,
      'notice_bar_animation_cls'
    );
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
    util.deleteKeyFrame('notice_bar_animation_cls');
  }
}

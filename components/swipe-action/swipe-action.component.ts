import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'SwipeAction, nzm-swipe-action',
  templateUrl: './swipe-action.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SwipeActionComponent implements OnInit, AfterViewInit, OnDestroy {
  prefixCls: string = 'am-swipe';
  wrapCls: object = {};

  private _swiping: boolean = false;
  private _openedLeft: boolean = false;
  private _openedRight: boolean = false;
  private _btnsLeftWidth: number;
  private _btnsRightWidth: number;
  private _needShowLeft: boolean;
  private _needShowRight: boolean;
  private _startX: number;

  @ViewChild('leftBtnRef')
  leftBtnRef;
  @ViewChild('rightBtnRef')
  rightBtnRef;
  @ViewChild('contentRef')
  content;
  @ViewChild('coverRef')
  cover;

  @Input()
  left: Array<object> = [];
  @Input()
  right: Array<object> = [];
  @Input()
  autoClose: boolean = false;
  @Input()
  disabled: boolean = false;
  @Output()
  onOpen: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  setClassMap() {
    this.wrapCls = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-swiping`]: this._swiping
    };
  }

  onCloseSwipe = ev => {
    if (!(this._openedLeft || this._openedRight)) {
      return;
    }
    const pNode = ev.target.closest(`.${this.prefixCls}-actions`);
    if (!pNode) {
      this.close();
    }
  }

  close() {
    if (this._openedLeft || this._openedRight) {
      this.onClose.emit();
    }
    this.setBtnStyle(0);
    this._openedLeft = false;
    this._openedRight = false;
  }

  setBtnStyle(value) {
    if (this._btnsLeftWidth === 0 || this._btnsRightWidth === 0) {
      this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
      this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
    }
    const limit = value > 0 ? this._btnsLeftWidth : -this._btnsRightWidth;
    const contentLeft = this.getContentEasing(value, limit);
    this.content.nativeElement.style.left = `${contentLeft}px`;
    this.cover.nativeElement.style.display = Math.abs(value) > 0 ? 'block' : 'none';
    this.cover.nativeElement.style.left = `${contentLeft}px`;
  }

  getContentEasing(value, limit) {
    return Math.abs(value) - Math.abs(limit) > 0 ? limit : value;
  }

  onTouchStart(e) {
    this._startX = e.changedTouches[0].clientX;
    this._swiping = true;
  }

  onTouchMove(e) {
    const deltaX = e.changedTouches[0].clientX - this._startX;
    this._needShowRight = deltaX < -5 && this.right.length > 0;
    this._needShowLeft = deltaX > 5 && this.left.length > 0;
    if (this.leftBtnRef) {
      this.leftBtnRef.nativeElement.style.visibility = this._needShowRight ? 'hidden' : 'visible';
    }
    if (this.rightBtnRef) {
      this.rightBtnRef.nativeElement.style.visibility = this._needShowLeft ? 'hidden' : 'visible';
    }
    this.setBtnStyle(deltaX);
  }

  onTouchEnd(e) {
    const deltaX = e.changedTouches[0].clientX - this._startX;

    const needOpenRight = this._needShowRight && Math.abs(deltaX) > this._btnsRightWidth / 2;
    const needOpenLeft = this._needShowLeft && Math.abs(deltaX) > this._btnsLeftWidth / 2;

    if (needOpenRight) {
      this.doOpenRight();
    } else if (needOpenLeft) {
      this.doOpenLeft();
    } else {
      this.close();
    }
    this._swiping = false;
    this._needShowLeft = false;
    this._needShowRight = false;
  }

  doOpenLeft() {
    this.open(this._btnsLeftWidth, true, false);
  }

  doOpenRight() {
    this.open(-this._btnsRightWidth, false, true);
  }

  onBtnClick(ev, btn) {
    const onPress = btn.onPress;
    if (onPress) {
      onPress(ev);
    }
    if (this.autoClose) {
      this.close();
    }
  }

  open(value, openedLeft, openedRight) {
    this.onOpen.emit();
    this._openedLeft = openedLeft;
    this._openedRight = openedRight;
    this.setBtnStyle(value);
  }

  ngOnInit() {
    this.setClassMap();
  }

  ngAfterViewInit(): void {
    this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
    this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
    document.body.addEventListener('touchstart', this.onCloseSwipe, true);
  }

  ngOnDestroy(): void {
    document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
  }
}

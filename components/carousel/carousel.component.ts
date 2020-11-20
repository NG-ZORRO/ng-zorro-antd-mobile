import {
  Component,
  ContentChildren,
  HostBinding,
  Input,
  Output,
  HostListener,
  QueryList,
  EventEmitter,
  OnDestroy,
  ElementRef,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import * as touchEvent from '../core/util/touch-event';

@Component({
  selector: 'Carousel, nzm-carousel',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  slideHeight: number;
  touchObject;
  style = {
    height: 'auto',
    width: '100%',
    transform: 'translate3d(0px, 0px, 0px)',
    margin: ''
  };
  lastIndex: number = 0;
  currentSelectedIndex: number = 0;

  private _timer: any;
  private _resizeTimer: any;
  private _nodeArr: Array<any> = [];
  private _isMouseDown: boolean = false;
  private _rationWidth: number = 0;
  private _currentSlideWidth: number = 0;
  private _currentSlideHeight: number = 0;
  private _transition: string = '';
  private _spaceWidth: number = 0;
  private _observer: MutationObserver;
  private _dragging: boolean = true;
  private _selectedIndex: number = 0;

  @ContentChildren(CarouselSlideComponent)
  items: QueryList<CarouselSlideComponent>;

  @Input()
  speed: number = 500;
  @Input()
  dots: boolean = true;
  @Input()
  vertical: boolean = false;
  @Input()
  autoplay: boolean = false;
  @Input()
  autoplayInterval: any = 3000;
  @Input()
  infinite: boolean = false;
  @Input()
  dotStyle: object = {};
  @Input()
  dotActiveStyle: object = {};
  @Input()
  frameOverflow: string = 'hidden';
  @Input()
  cellSpacing: number = 0;
  @Input()
  slideWidth: number = 1;
  @Input()
  swipeSpeed: number = 12;
  @Input()
  dragging: boolean = true;
  @Input()
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    if (typeof value === 'undefined') {
      value = 0;
    }
    this._selectedIndex = Math.abs(value);
    if (this._nodeArr.length > 0) {
      this.carousel(1);
    }
  }
  @Output()
  afterChange: EventEmitter<any> = new EventEmitter();
  @Output()
  beforeChange: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-carousel')
  carouselWrapper: boolean = true;
  @HostBinding('class.carousel')
  carouselwrap: boolean = true;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  panstart(event) {
    event.stopPropagation();
    if (!this._dragging) {
      return;
    }
    this.stopTimer();
    this._isMouseDown = true;
    this.touchObject = {
      startX: touchEvent.getEventTarget(event).pageX,
      startY: touchEvent.getEventTarget(event).pageY,
      direction: this.touchObject.direction
    };
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  panmove(event) {
    event.stopPropagation();
    if (!this._dragging || !this._isMouseDown) {
      return;
    }
    const { direction } = this.swipeDirection(
      this.touchObject.startX,
      touchEvent.getEventTarget(event).pageX,
      this.touchObject.startY,
      touchEvent.getEventTarget(event).pageY
    );
    if (direction === 0) {
      return;
    }
    const length = this.vertical
      ? Math.abs(touchEvent.getEventTarget(event).pageY - this.touchObject.startY)
      : Math.abs(touchEvent.getEventTarget(event).pageX - this.touchObject.startX);
    const offset = -this.touchObject.direction * length - this.currentSelectedIndex * this._rationWidth;
    this.touchObject = {
      startX: this.touchObject.startX,
      startY: this.touchObject.startY,
      endX: touchEvent.getEventTarget(event).pageX,
      endY: touchEvent.getEventTarget(event).pageY,
      length,
      direction,
      offset
    };
    if (direction !== 0) {
      this.setSlideStyles(this.currentSelectedIndex, this.touchObject.direction);
    }

    this.getListStyles(offset);
  }

  @HostListener('mouseleave', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  panend(event) {
    event.stopPropagation();
    if (!this._dragging || !this._isMouseDown || !this.touchObject.length || this.touchObject.length === undefined) {
      this._isMouseDown = false;
      return;
    }
    this._isMouseDown = false;
    if (this.touchObject.length > this.swipeSpeed) {
      this.carousel(this.touchObject.direction);
    } else {
      this.getListStyles(this.touchObject.direction * this.touchObject.length + this.touchObject.offset);
      this.style['transition'] = this._transition;
    }
    setTimeout(() => {
      this.startTimer();
    }, this.speed);
  }

  @HostListener('touchcancel')
  cancel() {
    setTimeout(() => {
      this.startTimer();
    }, this.speed);
  }

  @HostListener('window:resize')
  resize() {
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer);
    }
    this._resizeTimer = setTimeout(() => {
      this.ngAfterViewInit();
      clearTimeout(this._resizeTimer);
    }, 200);
  }

  constructor(private _ele: ElementRef) {}

  initCarouselSize() {
    const nativeElement = this._ele.nativeElement;
    this.slideHeight = nativeElement.querySelector('carouselslide').clientHeight;
    this._currentSlideHeight = this.slideHeight * this.slideWidth;
    this._currentSlideWidth = nativeElement.clientWidth;
    this._rationWidth = this.vertical ? this._currentSlideHeight : this._currentSlideWidth * this.slideWidth;
    this._spaceWidth = ((this.vertical ? this.slideHeight : this._currentSlideWidth) - this._rationWidth) / 2;
  }

  carouselInit(items) {
    this.infinite = this.infinite || true;
    this._nodeArr = items['_results'];
    const shouldDragging = this._nodeArr.length > 1;
    this._dragging = this.dragging && shouldDragging ? true : false;
    if (this._nodeArr.length > 1) {
      this.lastIndex = this._nodeArr.length - 1;
      setTimeout(() => {
        this._nodeArr.forEach((v, index) => {
          v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
          v.left = this.vertical ? 0 : index === this.lastIndex ? -this._rationWidth : index * this._rationWidth;
          v.top = this.vertical ? (index === this.lastIndex ? -this._rationWidth : index * this._rationWidth) : 0;
          v.margin = this.vertical ? `${this.cellSpacing / 2}px auto` : `auto ${this.cellSpacing / 2}px`;
        });
        this.startTimer();
      }, 0);
    } else if (this._nodeArr.length === 1) {
      setTimeout(() => {
        this._nodeArr.forEach(v => {
          v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
          v.left = 0;
          v.top = 0;
          v.margin = `auto ${this.cellSpacing / 2}px`;
        });
      }, 0);
    }
  }

  startTimer() {
    if (!this.autoplay) {
      return;
    }
    this.stopTimer();
    this._timer = this.autoplayInterval
      ? setInterval(() => {
          if (document.getElementsByTagName('carousel').length === 0) {
            return;
          }
          this.carousel(1);
        }, this.autoplayInterval)
      : 0;
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  carousel(moveDirection) {
    if (this.vertical) {
      if (moveDirection === 1) {
        this.moveUp();
      } else if (moveDirection === -1) {
        this.moveDown();
      }
    } else {
      if (moveDirection === 1) {
        this.moveLeft();
      } else if (moveDirection === -1) {
        this.moveRight();
      }
    }
    this.style['transition'] = this._transition;
  }

  moveUp() {
    this.gotoCarousel(this.getAfterNode(false));
  }

  moveDown() {
    this.gotoCarousel(this.getAfterNode(true));
  }

  moveLeft() {
    this.gotoCarousel(this.getAfterNode(false));
  }

  moveRight() {
    this.gotoCarousel(this.getAfterNode(true));
  }

  getAfterNode(pre) {
    let nextIndex;
    if (pre) {
      if (this.currentSelectedIndex <= 0) {
        this.getListStyles(this._rationWidth);
        setTimeout(() => {
          this._nodeArr.forEach((v, tempIndex) => {
            if (tempIndex === 0) {
              v.left = this.vertical ? 0 : this._nodeArr.length * this._rationWidth;
              v.top = this.vertical ? this._nodeArr.length * this._rationWidth : 0;
            } else {
              v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
              v.top = this.vertical ? tempIndex * this._rationWidth : 0;
            }
          });
          this.getListStyles(-this._rationWidth * (this.items.length - 1));
        }, this.speed);
        nextIndex = !this.infinite ? null : this.lastIndex;
        this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
        return nextIndex;
      }
      nextIndex = this.currentSelectedIndex - 1;
      this.getListStyles(nextIndex * this._rationWidth * this.touchObject.direction);
      this._nodeArr.forEach((v, tempIndex) => {
        if (0 === tempIndex && nextIndex === this._nodeArr.length - 2) {
          v.left = 0;
          v.top = 0;
        }
      });
      this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
      return nextIndex;
    } else {
      if (this.currentSelectedIndex >= this.lastIndex) {
        this.setSlideStyles(this.currentSelectedIndex, 1);
        this.getListStyles(-(this.lastIndex + 1) * this._rationWidth);
        nextIndex = !this.infinite ? null : 0;
        this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
        return nextIndex;
      }
      nextIndex = this.currentSelectedIndex + 1;
      this.setSlideStyles(this.currentSelectedIndex, 1);
      this.getListStyles(-nextIndex * this._rationWidth);
      this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
      return nextIndex;
    }
  }

  caculateDirectionLeftCurrentIndex() {
    const previousIndex = this.currentSelectedIndex;
    this.currentSelectedIndex = (previousIndex + 1) % this.items.length;
  }

  caculateDirectionRightCurrentIndex() {
    if (this.currentSelectedIndex === 0) {
      this.currentSelectedIndex = this.items.length;
    }
    const previousIndex = this.currentSelectedIndex;
    this.currentSelectedIndex = (previousIndex - 1) % this.items.length;
  }

  gotoCarousel(afterIndex) {
    if (afterIndex === null) {
      return;
    }
    this.getCurrentIndex();

    if (afterIndex === 0) {
      setTimeout(() => {
        this._nodeArr.forEach((v, index) => {
          if (index === this._nodeArr.length - 1) {
            v.left = this.vertical ? 0 : -this._rationWidth;
            v.top = this.vertical ? -this._rationWidth : 0;
          } else {
            v.left = this.vertical ? 0 : index * this._rationWidth;
            v.top = this.vertical ? index * this._rationWidth : 0;
          }
        });
        this.startTimer();
        this.getListStyles(0);
      }, this.speed);
    }
    this.currentSelectedIndex = afterIndex;
    this.afterChange.emit(this.currentSelectedIndex);
  }

  getCurrentIndex() {
    if (this.touchObject.direction === 1) {
      this.caculateDirectionLeftCurrentIndex();
    } else {
      this.caculateDirectionRightCurrentIndex();
    }
  }

  setSlideStyles(index, direction, xDist: number = 0) {
    if (direction === 1) {
      this._nodeArr.forEach((v, tempIndex) => {
        if (index < this._nodeArr.length && index - 1 === tempIndex) {
          if (xDist === 0 || xDist > this._spaceWidth) {
            v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
            v.top = this.vertical ? (this._nodeArr.length + tempIndex) * this._rationWidth : 0;
          }
        } else if (this._nodeArr.length - 1 === tempIndex && index !== 2) {
          if (xDist === 0 || xDist > this._spaceWidth) {
            v.left = this.vertical ? 0 : (this._nodeArr.length - 1) * this._rationWidth;
            v.top = this.vertical ? (this._nodeArr.length - 1) * this._rationWidth : 0;
          }
        } else if (index === this._nodeArr.length - 1 && tempIndex === 1 && this.autoplay) {
          v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
          v.top = this.vertical ? tempIndex * this._rationWidth : 0;
        } else if (index === this._nodeArr.length - 1 && tempIndex === 0 && !this.autoplay) {
          v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
          v.top = this.vertical ? tempIndex * this._rationWidth : 0;
        }
      });
    } else if (direction === -1) {
      this._nodeArr.forEach((v, tempIndex) => {
        if (index === 0 && this._nodeArr.length - 1 === tempIndex) {
          v.left = this.vertical ? 0 : direction * this._rationWidth;
          v.top = this.vertical ? direction * this._rationWidth : 0;
        } else if (index === this._nodeArr.length - 2 && index + 1 === tempIndex) {
          v.left = this.vertical ? 0 : direction * this._rationWidth;
          v.top = this.vertical ? direction * this._rationWidth : 0;
        } else if (index === 1 && 0 === tempIndex) {
          v.left = this.vertical ? 0 : direction * this._rationWidth * tempIndex;
          v.top = this.vertical ? direction * this._rationWidth : 0;
        } else if (index > 1) {
          v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
          v.top = this.vertical ? tempIndex * this._rationWidth : 0;
        }
      });
    }
  }

  getListStyles(offset: number = 0) {
    const positionOffset =
      offset +
      (this.vertical
        ? (this.slideHeight - this._currentSlideHeight) / 2
        : (this._currentSlideWidth - this._rationWidth) / 2) -
      this.cellSpacing;
    this.style = {
      height: this._currentSlideHeight + 'px',
      width: '100%',
      transform: this.vertical
        ? `translate3d(0px, ${positionOffset}px, 0px)`
        : `translate3d(${positionOffset}px, 0px, 0px)`,
      margin: this.vertical ? `${(this.cellSpacing / 2) * -1}px 0px` : `0px ${(this.cellSpacing / 2) * -1}px`
    };
  }

  swipeDirection(x1, x2, y1, y2) {
    const xDist = x1 - x2;
    const yDist = y1 - y2;

    const r = Math.atan2(yDist, xDist);
    let swipeAngle = Math.round((r * 180) / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return {
        direction: 1,
        xDist: xDist
      };
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return {
        direction: 1,
        xDist: xDist
      };
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return {
        direction: -1,
        xDist: xDist
      };
    }
    if (this.vertical === true) {
      if (swipeAngle >= 35 + 33 && swipeAngle <= 135) {
        return {
          direction: 1,
          xDist: xDist
        };
      } else {
        return {
          direction: -1,
          xDist: xDist
        };
      }
    }
    return {
      direction: 0,
      xDist: xDist
    };
  }

  get page() {
    return this.dots ? this.currentSelectedIndex : 0;
  }

  get pageCount() {
    return this.dots ? this.items.length : 0;
  }

  get dotindicatorStatus() {
    return this.dots ? this.items.length > 1 : this.dots;
  }

  ngAfterViewInit() {
    this.touchObject = { direction: 1 };
    this._transition = `transform ${this.speed / 1000}s`;
    this.items.changes.subscribe(items => {
      this.carouselInit(items);
    });
    this.initCarouselSize();
    if (!this._resizeTimer) {
      this.selectedIndex = this.items.length - 1 < this.selectedIndex ? 0 : this.selectedIndex;
      setTimeout(() => {
        this.currentSelectedIndex = this.selectedIndex;
      }, 0);
    }
    const selectedIndex = this._resizeTimer ? this.currentSelectedIndex : this.selectedIndex;
    const index = this.items.length > 1 ? (this.items.length - 1 === selectedIndex ? -1 : selectedIndex) : 0;
    this.getListStyles(-index * this._rationWidth);
    this.carouselInit(this.items);
    const nativeElement = this._ele.nativeElement;
    const targetNode = nativeElement.querySelector('carouselslide');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type == 'attributes') {
          if (this.slideHeight !== nativeElement.querySelector('carouselslide').clientHeight) {
            this.initCarouselSize();
            this.getListStyles(-index * this._rationWidth);
            this.carouselInit(this.items);
          }
        }
      }
    };
    if (this._observer) {
      this._observer.disconnect();
    }
    this._observer = new MutationObserver(callback);
    this._observer.observe(targetNode, config);
  }

  ngOnDestroy() {
    this._observer.disconnect();
    this._observer = null;
    this.stopTimer();
  }
}

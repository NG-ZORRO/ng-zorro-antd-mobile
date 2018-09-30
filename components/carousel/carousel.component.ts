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
  slideHeight;
  touchObject;
  style = {
    height: 'auto',
    width: '100%',
    transform: 'translate3d(0px, 0px, 0px)',
    margin: ''
  };

  private _timer: any;
  private _nodeArr: Array<any> = [];
  private _lastIndex: number = 0;
  private _isMouseDown: boolean = false;
  private _rationWidth: number = 0;
  private _currentSlideWidth: number = 0;
  private _currentSlideHeight: number = 0;
  private _transition: string = '';
  private _spaceWidth: number = 0;
  private observer: MutationObserver;

  @ContentChildren(CarouselSlideComponent)
  items: QueryList<CarouselSlideComponent>;

  @Input()
  speed: number = 500;
  @Input()
  selectedIndex: number = 0;
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
    if (!this.dragging) {
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
    if (!this.dragging && !this._isMouseDown) {
      return;
    }
    const { direction, xDist } = this.swipeDirection(
      this.touchObject.startX,
      touchEvent.getEventTarget(event).pageX,
      this.touchObject.startY,
      touchEvent.getEventTarget(event).pageY
    );

    if (direction !== 0) {
      event.preventDefault();
    }

    const length = this.vertical
      ? Math.abs(touchEvent.getEventTarget(event).pageY - this.touchObject.startY)
      : Math.abs(touchEvent.getEventTarget(event).pageX - this.touchObject.startX);
    const offset = -this.touchObject.direction * length - this.selectedIndex * this._rationWidth;
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
      this.setSlideStyles(this.selectedIndex, this.touchObject.direction);
    }

    this.getListStyles(offset);
  }
  @HostListener('mouseleave', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  panend() {
    if (!this.dragging && !this._isMouseDown) {
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
  @HostListener('touchcancel', ['$event'])
  cancel() {
    setTimeout(() => {
      this.startTimer();
    }, this.speed);
  }

  constructor(private _ele: ElementRef) {}

  carouselInit(items) {
    this.infinite = this.infinite === undefined ? true : this.infinite;
    this._nodeArr = items['_results'];
    this.dragging = this._nodeArr.length > 1 && this.dragging ? this.dragging : false;
    this.dragging = this.dragging ? this.dragging : false;
    if (this._nodeArr.length > 1) {
      this._lastIndex = this._nodeArr.length - 1;
      setTimeout(() => {
        this._nodeArr.forEach((v, index) => {
          v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
          v.left = this.vertical ? 0 : index === this._lastIndex ? -this._rationWidth : index * this._rationWidth;
          v.top = this.vertical ? (index === this._lastIndex ? -this._rationWidth : index * this._rationWidth) : 0;
          v.margin = this.vertical ? `${this.cellSpacing / 2}px auto` : `auto ${this.cellSpacing / 2}px`;
        });
        this.startTimer();
      }, 0);
    } else if (this._nodeArr.length === 1) {
      setTimeout(() => {
        this._nodeArr.forEach((v, index) => {
          v.width = this._rationWidth - this.cellSpacing;
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
      if (this.selectedIndex <= 0) {
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
        nextIndex = !this.infinite ? null : this._lastIndex;
        this.beforeChange.emit({ from: this.selectedIndex, to: nextIndex });
        return nextIndex;
      }
      nextIndex = this.selectedIndex - 1;
      this.getListStyles(nextIndex * this._rationWidth * this.touchObject.direction);
      this._nodeArr.forEach((v, tempIndex) => {
        if (0 === tempIndex && nextIndex === this._nodeArr.length - 2) {
          v.left = 0;
          v.top = 0;
        }
      });
      this.beforeChange.emit({ from: this.selectedIndex, to: nextIndex });
      return nextIndex;
    } else {
      if (this.selectedIndex >= this._lastIndex) {
        this.setSlideStyles(this.selectedIndex, 1);
        this.getListStyles(-(this._lastIndex + 1) * this._rationWidth);
        nextIndex = !this.infinite ? null : 0;
        this.beforeChange.emit({ from: this.selectedIndex, to: nextIndex });
        return nextIndex;
      }
      nextIndex = this.selectedIndex + 1;
      this.setSlideStyles(this.selectedIndex, 1);
      this.getListStyles(-nextIndex * this._rationWidth);
      this.beforeChange.emit({ from: this.selectedIndex, to: nextIndex });
      return nextIndex;
    }
  }

  caculateDirectionLeftCurrentIndex() {
    const previousIndex = this.selectedIndex;
    this.selectedIndex = (previousIndex + 1) % this.items.length;
  }

  caculateDirectionRightCurrentIndex() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.items.length;
    }
    const previousIndex = this.selectedIndex;
    this.selectedIndex = (previousIndex - 1) % this.items.length;
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
    this.selectedIndex = afterIndex;
    this.afterChange.emit(this.selectedIndex);
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
        } else if (index === this._nodeArr.length - 2 && 0 === tempIndex) {
          v.left = 0;
          v.top = this.vertical ? this._nodeArr.length * this._rationWidth : 0;
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
      width: this.items.length * this._rationWidth + 'px',
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
    return this.dots ? this.selectedIndex : 0;
  }
  get pageCount() {
    return this.dots ? this.items.length : 0;
  }

  get dotindicatorStatus() {
    return this.dots ? (this.items.length > 1 ? true : false) : this.dots;
  }

  ngAfterViewInit() {
    this.touchObject = { direction: 1 };
    this._transition = `transform ${this.speed / 1000}s`;
    this.items.changes.subscribe(items => {
      this.carouselInit(items);
    });
    this.getListStyles();
    this.carouselInit(this.items);
    const nativeElement = this._ele.nativeElement;
    const targetNode = nativeElement.querySelector('carouselslide');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type == 'attributes') {
          if (this.slideHeight !== nativeElement.querySelector('carouselslide').clientHeight) {
            this.slideHeight = nativeElement.querySelector('carouselslide').clientHeight;
            this._currentSlideHeight = this.slideHeight * this.slideWidth;
            this._currentSlideWidth = nativeElement.clientWidth;
            this._rationWidth = this.vertical ? this._currentSlideHeight : this._currentSlideWidth * this.slideWidth;
            this._spaceWidth = ((this.vertical ? this.slideHeight : this._currentSlideWidth) - this._rationWidth) / 2;
            this.getListStyles();
          }
          }
      }
    };

    this.observer = new MutationObserver(callback);
    this.observer.observe(targetNode, config);
  }

  ngOnDestroy() {
    this.observer.disconnect();
    this.observer = null;
    this.stopTimer();
  }
}

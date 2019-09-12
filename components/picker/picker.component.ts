import {
  OnInit,
  OnDestroy,
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { PickerOptions } from './picker-options.provider';
import * as velocity from '../core/util/velocity';
import * as touchEvent from '../core/util/touch-event';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { PickerRef } from './picker-ref.class';

@Component({
  selector: 'Picker',
  templateUrl: './picker.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PickerComponent<T = any, R = any> extends PickerRef<T, R> implements OnInit, AfterViewInit, OnDestroy {
  transitionName: string = 'am-slide-up-enter am-slide-up-enter-active';
  maskTransitionName: string = 'am-fade-enter am-fade-enter-active';
  startY: number = 0;
  differY: number = 0;
  currentY: number = 0;
  len: number = 0;
  dom: any = null;
  index: number = 0;
  maxY: number = 0;
  lineHeight: number = 34;
  dataForRender: any[] = [];
  selectedTarget: any[] = [];
  isMouseDown: boolean = false;
  Velocity = velocity.getVelocity();
  currentPicker: any;

  private _unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('picker', { read: ViewContainerRef, static: true })
  private _picker: ViewContainerRef;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  panstart(event) {
    if (!event.target.classList.contains('am-picker-col-mask') || this.options.disabled) {
      return;
    }
    this.isMouseDown = true;
    event.preventDefault();
    this.dom = touchEvent.getEventTarget(event).target.parentElement.children[2];
    this.len = this.dom.children.length;
    this.maxY = -(this.len - 1);

    if (this.dom.style.transform === 'translateY(0px)') {
      this.currentY = 0;
      this.maxY = -(this.len - 1);
    } else if (this.selectedTarget.length > 0) {
      this.selectedTarget.forEach(item => {
        if (item.targetId === event.target.id) {
          this.currentY = item.currentY;
        }
      });
    }
    this.startY = touchEvent.getEventTarget(event).clientY;
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  panmove(event) {
    if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
      return;
    }
    event.preventDefault();
    const ev = touchEvent.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    this.Velocity.record(this.differY);
    this.dom.style.transition = 'transform 0s';
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  @HostListener('touchend', ['$event'])
  panend(event) {
    if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
      return;
    }
    this.isMouseDown = false;
    event.preventDefault();
    const ev = touchEvent.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    let time = 0.3;
    const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
    if (velocity) {
      this.differY = velocityTemp * 40 + this.differY;
      time = Math.abs(velocityTemp) * 0.1;
    }
    this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's';
    if (this.differY <= -this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY <= this.maxY) {
        this.currentY = this.maxY;
      }
    } else if (this.differY >= this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY >= 0) {
        this.currentY = 0;
      }
    }
    if (this.selectedTarget.length > 0) {
      let hasKey = false;
      this.selectedTarget.forEach(item => {
        if (item.targetId === event.target.id) {
          hasKey = true;
          item.targetId = event.target.id;
          item.currentY = this.currentY;
        } else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && this.options.cascade) {
          item.currentY = 0;
        }
      });
      if (!hasKey) {
        this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
      }
    } else {
      this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
    }
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
    this.index = Math.floor(Math.abs(this.currentY / 1));
    this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
    if (this.options.value !== this.combineReslut()) {
      this.options.onPickerChange.emit(this.combineReslut());
      this.onChange(this.combineReslut());
    }
  }

  constructor(
    public elementRef: ElementRef,
    public options: PickerOptions,
    private _localeProviderService: LocaleProviderService
  ) {
    super();
  }

  onChange = (_: any[]) => {};

  init() {
    if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
      this.dataForRender.push(this.generateArrayData(this.options.data));
    }
    if (this.options.value.length > 0) {
      this.getInitValueIndex(this.dataForRender);
    } else {
      this.checkArrayDeep(this.options.data[0]);
      for (let index = 0; index < this.dataForRender.length; index++) {
        this.selectedTarget.push({ targetId: `${index}`, currentY: 0 });
      }
    }
  }

  getInitValueIndex(dataTemp) {
    const self = this;
    self.selectedTarget = [];
    self.options.value.forEach((element, i) => {
      dataTemp.forEach((item, j) => {
        item.forEach((item1, k) => {
          if ((element === item1.label || element === item1.value || element === item1) && i === j) {
            self.checkArrayDeep(self.dataForRender[i][k], false);
            self.selectedTarget.push({ targetId: `${i}`, currentY: -k });
          }
        });
      });
    });
  }

  reloadPicker() {
    if (!this._picker || this._picker === undefined) {
      return;
    }
    this.currentPicker = this._picker.element.nativeElement;
    if (this.currentPicker && this.currentPicker.children.length > 0) {
      const self = this;
      setTimeout(() => {
        self.selectedTarget.forEach((item, i) => {
          self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
          const index = parseInt(item.currentY, 0);
          self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
        });
      }, 0);
    }
  }

  generateArrayData(targetArr) {
    const tempArr = [];
    if (targetArr instanceof Array) {
      targetArr.forEach((item, i) => {
        if (item instanceof Array) {
          const keys = Object.keys(item);
          const element = {};
          keys.forEach(key => {
            element[key] = targetArr[i][key] || targetArr[i];
          });
          tempArr.push(element);
        } else {
          tempArr.push(item);
        }
      });
      return tempArr;
    }
    return [];
  }

  checkArrayDeep(parent, init: boolean = true) {
    if (parent instanceof Object && parent.children && parent.children.length > 0) {
      if (this.generateArrayData(parent.children).length > 0 && this.dataForRender.length < this.options.cols) {
        let hasValue = false;
        this.dataForRender.filter((item, index) => {
          if (JSON.stringify(item) === JSON.stringify(parent.children)) {
            hasValue = true;
          }
        });
        if (!hasValue) {
          this.dataForRender.push(this.generateArrayData(parent.children));
        }
        if (init) {
          this.checkArrayDeep(parent.children[0]);
        }
      }
    }
  }

  ok() {
    if (this.options.updateNgModel) {
      this.options.updateNgModel(this.combineReslut());
    }
    if (this.options.confirm) {
      this.options.confirm(this.combineReslut());
    }
    this.setTransitionName();
  }

  combineReslut() {
    const result = [];
    const self = this;
    self.selectedTarget.forEach(item => {
      if (self.dataForRender.length > 0 && self.dataForRender.length >= parseInt(item.targetId, 0) + 1) {
        const curItem = self.dataForRender[parseInt(item.targetId, 0)][-item.currentY];
        if (curItem !== undefined) {
          result.push(curItem);
        }
      }
    });
    return result;
  }

  cancel() {
    this.setTransitionName();
    this.options.onDismiss.emit();
    if (this.options.cancel) {
      this.options.cancel();
    }
  }

  setTransitionName() {
    this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
    this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
    setTimeout(() => {
      this.options.hidePicker();
    }, 200);
  }

  setCurrentSelected(target, index) {
    if (!this.options.cascade) {
      return;
    }
    const a = this.dataForRender.slice(0, target + 1);
    this.dataForRender = a;
    this.checkArrayDeep(this.dataForRender[target][index]);
    if (this.selectedTarget.length > 0 && this.selectedTarget.length < this.dataForRender.length) {
      for (let i = 0; i < this.dataForRender.length; i++) {
        if (i > target) {
          if (i < this.selectedTarget.length) {
            this.selectedTarget[i] = { targetId: `${i}`, currentY: 0 };
          } else {
            this.selectedTarget.push({ targetId: `${i}`, currentY: 0 });
          }
        }
      }
    }
    setTimeout(() => {
      this.dataForRender.forEach((item, i) => {
        if (target !== `${i}` && i > target) {
          this._picker.element.nativeElement.children[i].children[2].style.transition = 'transform .3s';
          this._picker.element.nativeElement.children[i].children[2].style.transform = 'translateY(0px)';
        }
      });
    }, 0);
  }

  getInstance(): PickerComponent {
    return this;
  }

  getElement(): HTMLElement {
    return this.elementRef && this.elementRef.nativeElement;
  }

  close(): void {
    if (this.options.hidePicker) {
      this.options.hidePicker();
    }
  }

  destroy(): void {
    this.close();
  }

  ngOnInit() {
    this.init();
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
      const locale: any = this._localeProviderService.getLocaleSubObj('Picker');
      this.options.okText = this.options.okText === '确定' ? locale.okText : this.options.okText;
      this.options.dismissText = this.options.dismissText === '取消' ? locale.dismissText : this.options.dismissText;
    });
  }

  ngAfterViewInit() {
    this.reloadPicker();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}

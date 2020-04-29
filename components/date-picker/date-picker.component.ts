import {
  Component,
  OnInit,
  ElementRef,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { DatePickerOptions } from './date-picker-options.provider';
import { ToastService } from '../toast/toast.service';
import * as velocity from '../core/util/velocity';
export type DateMode = 'date' | 'time' | 'datetime' | 'year' | 'month';

@Component({
  selector: 'DatePicker, nzm-date-picker',
  templateUrl: './date-picker.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit, OnDestroy, AfterViewInit {
  transitionName: string = 'am-slide-up-enter am-slide-up-enter-active';
  maskTransitionName: string = 'am-fade-enter am-fade-enter-active';
  modeSwitch: number[] = [1, 1, 1, 1, 1, 1];
  localMinDate: any[] = [];
  localMaxDate: any[] = [];
  currentTime: any[] = [];
  indexArray: any = [];
  min_date: number[] = [];
  max_date: number[] = [];
  current_time: any[] = [
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate(),
    new Date().getHours(),
    new Date().getMinutes()
  ];
  clos: number = 0;
  resultArr: any = [];
  resultDate: Date;
  data: any[] = [];
  dataWithStr: any[] = [];
  startY: number = 0;
  differY: number = 0;
  currentY: number = 0;
  len: number = 0;
  dom: any = null;
  index: number = 0;
  maxY: number = 0;
  lineHeight: number = 34;
  selectedTarget: any[] = [];
  isMouseDown: boolean = false;
  currentPicker: any;
  localeNew: any = {};
  unsubscribe$ = new Subject<void>();
  Velocity = velocity.getVelocity();
  errorMessage = '';
  curTLessThanMin = false;
  curTMoreThanMax = false;
  ngModelOnChange: (value: Date) => {};
  ngModelOnTouched: () => {};

  @ViewChild('picker', { read: ViewContainerRef })
  picker: ViewContainerRef;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  panstart(event) {
    if (!event.target.classList.contains('am-picker-col-mask')) {
      return;
    }
    this.isMouseDown = true;
    event.preventDefault();
    this.dom = event.target.parentElement.children[2];
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
    const ev = this.getEventTarget(event);
    this.startY = ev.clientY;
  }
  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  panmove(event) {
    if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
      return;
    }
    event.preventDefault();
    const ev = this.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    this.Velocity.record(this.differY);
    this.dom.style.transition = 'transform 0s';
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
  }
  @HostListener('mouseleave', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  panend(event) {
    if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
      return;
    }
    this.isMouseDown = false;
    event.preventDefault();
    const ev = this.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    let time = 0.3;
    const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
    if (velocityTemp) {
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
        }
      });
      if (!hasKey) {
        this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
      }
    } else {
      this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
    }
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
    this.index = Math.floor(Math.abs(this.currentY / 1)); // 记录当前位移在数组中的索引,必须取整，否则会出现浮点数
    this.current_time[this.indexArray[parseInt(event.target.id, 0)]] = this.resultArr[
      this.indexArray[parseInt(event.target.id, 0)]
    ] = this.data[parseInt(event.target.id, 0)][this.index];
    if (this.judgeTime(this.current_time, this.max_date)) {
      this.currentTime = this.current_time =
        this.max_date.slice(0, this.options.mode === 'time' ? this.modeSwitch.length : this.indexArray.length);
      this.resultArr = this.current_time;
      this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
      if (this.options.updateNgModel) {
        this.options.updateNgModel(this.handleReslut());
      }
      if (this.ngModelOnChange) {
        this.ngModelOnChange(this.handleReslut());
      }
      this.init();
    } else if (this.judgeTime(this.min_date, this.current_time)) {
      this.currentTime = this.current_time =
        this.min_date.slice(0, this.options.mode === 'time' ? this.modeSwitch.length : this.indexArray.length);
      this.resultArr = this.currentTime;
      this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
      if (this.options.updateNgModel) {
        this.options.updateNgModel(this.handleReslut());
      }
      if (this.ngModelOnChange) {
        this.ngModelOnChange(this.handleReslut());
      }
      this.init();
    } else {
      this.setCurrentSelected(0, this.differY < 0, this.index);
      this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
      if (this.options.updateNgModel) {
        this.options.updateNgModel(this.handleReslut());
      }
      if (this.ngModelOnChange) {
        this.ngModelOnChange(this.handleReslut());
      }
    }
  }

  constructor(
    public elementRef: ElementRef,
    public options: DatePickerOptions,
    public toast: ToastService,
    public localeProviderService: LocaleProviderService
  ) {}

  init() {
    if (!this.checkTime() && this.options.showErrorToast) {
      setTimeout(() => {
        this.toast.fail(this.errorMessage, this.options.showErrorToastInterval);
      }, 0);
    }
    this.initResult();
    this.initReady();
    this.getInitValueIndex();
  }

  reloadPicker() {
    if (!this.picker || this.picker === undefined) {
      return;
    }
    this.currentPicker = this.picker.element.nativeElement;
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

  localeProvider() {
    const self = this;
    if (self.options.locale || self.options.locale !== undefined) {
      self.localeProviderService.setLocale(self.options.locale);
    }
    self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
      self.options.locale = self.localeProviderService.getLocale();
      self.localeNew = self.localeProviderService.getLocaleSubObj('DatePicker');
      self.options.okText = self.localeNew.okText;
      self.options.dismissText = self.localeNew.dismissText;
      self.init();
    });
  }

  transformDateFormat(date: Date): any {
    if (!date) {
      return '';
    } else {
      return 'yyyy-mm-dd-HH-MM'
        .replace('yyyy', date.getFullYear() + '')
        .replace('mm', date.getMonth() + 1 + '')
        .replace('dd', date.getDate() + '')
        .replace('HH', date.getHours() + '')
        .replace('MM', date.getMinutes() + '');
    }
  }

  preZero(val: number): string {
    return val < 10 ? '0' + val : val + '';
  }

  getInitValueIndex() {
    this.selectedTarget = [];
    this.indexArray.map((index, i) => {
      this.data.forEach((item, j) => {
        item.forEach((item1, k) => {
          if (this.currentTime[index] === item1 && i === j) {
            this.selectedTarget.push({ targetId: `${i}`, currentY: -k });
          }
        });
      });
    });
    this.reloadPicker();
  }

  checkMode(mode) {
    this.modeSwitch = [1, 1, 1, 1, 1, 1];
    switch (mode) {
      case 'date':
        this.modeSwitch = [1, 1, 1, 0, 0, 0];
        break;
      case 'time':
        if (this.options.use12Hours) {
          this.modeSwitch = [0, 0, 0, 1, 1, 1];
        } else {
          this.modeSwitch = [0, 0, 0, 1, 1, 0];
        }
        break;
      case 'datetime':
        if (this.options.use12Hours) {
          this.modeSwitch = [1, 1, 1, 1, 1, 1];
        } else {
          this.modeSwitch = [1, 1, 1, 1, 1, 0];
        }
        break;
      case 'year':
        this.modeSwitch = [1, 0, 0, 0, 0];
        break;
      case 'month':
        this.modeSwitch = [1, 1, 0, 0, 0];
        break;
      default:
        break;
    }
    const tempIndexArray = [];
    for (let i = 0; i < this.modeSwitch.length; i++) {
      if (this.modeSwitch[i] > 0) {
        tempIndexArray.push(i);
      }
    }
    this.clos = tempIndexArray[tempIndexArray.length - 1] - tempIndexArray[0] + 1;
    this.indexArray = tempIndexArray;
  }

  initResult() {
    this.resultArr = [];
    for (let i = 0; i < this.clos; i++) {
      const res = this.currentTime[i];
      if (this.options.mode === 'time') {
        this.resultArr = this.currentTime;
      } else {
        this.resultArr.push(res);
      }
    }
  }

  checkTime() {
    const min_Date = this.transformDateFormat(this.options.minDate).split('-');
    if (min_Date.length > 0) {
      this.min_date = min_Date.map(item => {
        return parseInt(item, 0);
      });
    }
    const max_Date = this.transformDateFormat(this.options.maxDate).split('-');
    if (max_Date.length > 0) {
      this.max_date = max_Date.map(item => {
        return parseInt(item, 0);
      });
    }
    const min_date = this.min_date;
    const max_date = this.max_date;
    const current_time = this.currentTime;
    this.localMinDate = [];
    if (this.localMinDate.length === 0) {
      for (let index = 0; index < this.indexArray.length; index++) {
        this.localMinDate.push(min_date[this.indexArray[index]]);
      }
    }
    this.localMaxDate = [];
    if (this.localMaxDate.length === 0) {
      for (let index = 0; index < this.indexArray.length; index++) {
        this.localMaxDate.push(max_date[this.indexArray[index]]);
      }
    }
    if (this.indexArray.length === this.localMinDate.length && this.localMinDate.length === this.localMaxDate.length) {
      const minT = new Date(min_date[0], min_date[1], min_date[2], min_date[3], min_date[4]).getTime();
      const maxT = new Date(max_date[0], max_date[1], max_date[2], max_date[3], max_date[4]).getTime();
      const curT = new Date(
        current_time[0],
        current_time[1],
        current_time[2],
        current_time[3] || 0,
        current_time[4] || 0
      ).getTime();
      this.curTLessThanMin = false;
      this.curTMoreThanMax = false;
      if (curT < minT) {
        this.curTLessThanMin = true;
        this.currentTime = this.min_date;
        this.errorMessage = this.localeNew.curTLessthanMin;
      }
      if (curT > maxT) {
        this.curTMoreThanMax = true;
        this.currentTime = this.max_date;
        this.errorMessage = this.localeNew.curTMorethanMax;
      }
      let _indexArrayIndex = 0;
      let timeModeIndex = this.options.mode === 'time' ? 3 : 0;
      for (let i = 0; i < this.modeSwitch.length; i++) {
        if (this.modeSwitch[i] === 0) {
          switch (i) {
            case 0:
              min_date[i] = new Date().getFullYear();
              max_date[i] = new Date().getFullYear();
              break;
            case 1:
              min_date[i] = new Date().getMonth() + 1;
              max_date[i] = new Date().getMonth() + 1;
              break;
            case 2:
              min_date[i] = new Date().getDate();
              max_date[i] = new Date().getDate();
              break;
            case 3:
              min_date[i] = new Date().getHours();
              max_date[i] = new Date().getHours();
              break;
            case 4:
              min_date[i] = new Date().getMinutes();
              max_date[i] = new Date().getMinutes();
              break;
            case 5:
              min_date[i] = 0;
              max_date[i] = 1;
              break;
          }
        } else {
          switch (i) {
            case 0:
              this.localMinDate[_indexArrayIndex] = min_date[i] =
                this.localMinDate[_indexArrayIndex] >= 1900
                  ? this.localMinDate[_indexArrayIndex]
                  : new Date().getFullYear();
              this.localMaxDate[_indexArrayIndex] = max_date[i] =
                this.localMaxDate[_indexArrayIndex] >= 1900
                  ? this.localMaxDate[_indexArrayIndex]
                  : new Date().getFullYear() + 1;
              break;
            case 1:
              this.localMinDate[_indexArrayIndex] = min_date[i] =
                this.localMinDate[_indexArrayIndex] > 0 && this.localMinDate[_indexArrayIndex] <= 12
                  ? this.localMinDate[_indexArrayIndex]
                  : 1;
              this.localMaxDate[_indexArrayIndex] = max_date[i] =
                this.localMaxDate[_indexArrayIndex] > 0 && this.localMaxDate[_indexArrayIndex] <= 12
                  ? this.localMaxDate[_indexArrayIndex]
                  : 12;
              break;
            case 2:
              this.localMinDate[_indexArrayIndex] = min_date[i] =
                this.localMinDate[_indexArrayIndex] > 0 &&
                this.localMinDate[_indexArrayIndex] <= new Date(min_date[0], min_date[1], 0).getDate()
                  ? this.localMinDate[_indexArrayIndex]
                  : 1;
              this.localMaxDate[_indexArrayIndex] = max_date[i] =
                this.localMaxDate[_indexArrayIndex] > 0 &&
                this.localMaxDate[_indexArrayIndex] <= new Date(max_date[0], max_date[1], 0).getDate()
                  ? this.localMaxDate[_indexArrayIndex]
                  : new Date(max_date[0], max_date[1], 0).getDate();
              break;
            case 3:
              this.localMinDate[_indexArrayIndex] = min_date[i] =
                this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 23
                  ? this.localMinDate[_indexArrayIndex - timeModeIndex]
                  : 0;
              if (this.options.use12Hours) {
                this.localMaxDate[_indexArrayIndex] = max_date[i] =
                  this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 11
                    ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                    : 11;
              } else {
                this.localMaxDate[_indexArrayIndex] = max_date[i] =
                  this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 23
                    ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                    : 23;
              }
              break;
            case 4:
              this.localMinDate[_indexArrayIndex] = min_date[i] =
                this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 59
                  ? this.localMinDate[_indexArrayIndex - timeModeIndex]
                  : 0;
              this.localMaxDate[_indexArrayIndex] = max_date[i] =
                this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 59
                  ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                  : 59;
              break;
          }
        }
        _indexArrayIndex++;
      }
      return minT <= curT && curT <= maxT;
    } else {
      this.errorMessage = this.localeNew.errorMessage;
      return false;
    }
  }

  judgeTime(arr1: number[], arr2: number[]): boolean {
    let date1;
    let date2;
    date1 = arr1.slice(0, 3).join('-') + ' ' + arr1.slice(3, 5).join(':');
    date2 = arr2.slice(0, 3).join('-') + ' ' + arr2.slice(3, 5).join(':');
    return new Date(date1).getTime() > new Date(date2).getTime();
  }

  judgeEqualArray(arr1, arr2, length) {
    let status = true;
    for (let i = 0; i < length; i++) {
      if (arr1[i] != arr2[i]) {
        status = false;
      }
    }
    return status;
  }

  initReady() {
    let realIdx = 0;
    for (let i = 0; i < this.clos; i++) {
      realIdx = this.indexArray[i];
      let min = 0;
      let max = 0;
      const tempArray = [];
      switch (realIdx) {
        case 0:
          this.initData(tempArray, this.localMinDate[i], this.localMaxDate[i], this.localeNew.year, i);
          break;
        case 1:
          min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[i] : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[i] : 12;
          this.initData(tempArray, min, max, this.localeNew.month, i);
          break;
        case 2:
          min = this.judgeEqualArray(this.min_date, this.current_time, 2)
            ? this.localMinDate[i]
            : this.curTLessThanMin
            ? this.localMinDate[i]
            : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 2)
            ? this.localMaxDate[i]
            : new Date(this.current_time[0], this.current_time[1], 0).getDate();
          this.initData(tempArray, min, max, this.localeNew.day, i);
          break;
        case 3:
          min = this.judgeEqualArray(this.min_date, this.current_time, 3)
            ? this.localMinDate[i]
            : this.curTLessThanMin
            ? this.localMinDate[i]
            : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 3)
            ? this.localMaxDate[i]
            : this.curTMoreThanMax
            ? this.localMaxDate[i]
            : 23;
          this.initData(tempArray, min, max, this.localeNew.hour, i);
          break;
        case 4:
          min = this.judgeEqualArray(this.min_date, this.current_time, 4)
            ? this.localMinDate[i]
            : this.curTLessThanMin
            ? this.localMinDate[i]
            : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 4)
            ? this.localMaxDate[i]
            : this.curTMoreThanMax
            ? this.localMaxDate[i]
            : 59;
          this.initData(tempArray, min, max, this.localeNew.minute, i);
          break;
        case 5:
          min = 0;
          max = 1;
          this.initData(tempArray, min, max, 'use12Hours', i);
          break;
      }
    }
  }

  initData(tempArr, min, max, str, idx) {
    const dataWithStr = [];
    const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
    for (min; min < max + 1; min += increaseValue) {
      tempArr.push(min);
      dataWithStr.push(min + str);
    }
    if (this.data.length > this.indexArray.length) {
      this.data = [];
      this.dataWithStr = [];
    }
    if (this.data.length > idx && this.data[idx].toString() !== tempArr.toString()) {
      this.data[idx] = tempArr;
    } else if (this.data.length > idx && this.data[idx].toString() === tempArr.toString()) {
      this.data[idx] = tempArr;
    } else {
      this.data.push(tempArr);
    }
    if (this.options.locale === undefined || this.options.locale.locale === 'zh_CN') {
      if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() !== dataWithStr.toString()) {
        this.dataWithStr[idx] = dataWithStr;
      } else if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() === dataWithStr.toString()) {
        this.dataWithStr[idx] = dataWithStr;
      } else {
        this.dataWithStr.push(dataWithStr);
      }
    } else {
      this.dataWithStr = this.data;
    }
  }

  ok() {
    this.options.onOk.emit(this.handleReslut());
    this.setTransitionName();
  }

  handleReslut() {
    let result = '';
    if (this.options.mode === 'datetime' || this.options.mode === 'time') {
      const temp = this.resultArr;
      result = temp.slice(0, 3).join('-') + ' ' + temp.slice(3, 5).join(':');
    } else {
      if (this.resultArr.length < 3) {
        this.resultArr.push('1');
      }
      result = this.resultArr
        .slice(0, 3)
        .map(v => {
          return this.preZero(parseInt(v, 0));
        })
        .join('-');
    }
    this.resultDate = new Date(result.replace(/-/g, '/'));
    if (this.options.minDate.getTime() > this.resultDate.getTime()) {
      if (this.resultArr.length > 0) {
        for (let index = 0; index < this.resultArr.length; index++) {
          this.resultArr = [...this.min_date];
          this.currentTime = this.resultArr;
          this.current_time = this.currentTime;
        }
      }
      this.resultDate = this.options.minDate;
    }
    return this.resultDate;
  }

  cancel() {
    this.options.onDismiss.emit();
    this.setTransitionName();
  }

  setTransitionName() {
    this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
    this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
    setTimeout(() => {
      this.options.hidePicker();
    }, 200);
  }

  setCurrentSelected(checkIdx, sta, indexT) {
    if (checkIdx >= this.clos - 1) {
      return;
    }
    let status = null;
    if (sta) {
      status = this.judgeEqualArray(this.min_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
    } else {
      status = this.judgeEqualArray(this.max_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
    }
    if (!status) {
      let min = 0;
      let max = 0;
      let str = '';
      const realIdx = this.indexArray[checkIdx];
      switch (realIdx) {
        case 0:
          min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[checkIdx + 1] : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[checkIdx + 1] : 12;
          str = '月';
          break;
        case 1:
          min = this.judgeEqualArray(this.min_date, this.current_time, 2)
            ? this.localMinDate[checkIdx + 1]
            : this.curTLessThanMin
            ? this.localMinDate[checkIdx + 1]
            : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 2)
            ? this.localMaxDate[checkIdx + 1]
            : new Date(this.current_time[0], this.current_time[1], 0).getDate();
          str = '日';
          break;
        case 2:
          min = this.judgeEqualArray(this.min_date, this.current_time, 3)
            ? this.localMinDate[checkIdx + 1]
            : this.curTLessThanMin
            ? this.localMinDate[checkIdx + 1]
            : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 3)
            ? this.localMaxDate[checkIdx + 1]
            : this.curTMoreThanMax
            ? this.localMaxDate[checkIdx + 1]
            : 23;
          str = '时';
          break;
        case 3:
          min = this.judgeEqualArray(this.min_date, this.current_time, 4)
            ? this.localMinDate[checkIdx + 1]
            : this.curTLessThanMin
            ? this.localMinDate[checkIdx + 1]
            : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 4)
            ? this.localMaxDate[checkIdx + 1]
            : this.curTMoreThanMax
            ? this.localMaxDate[checkIdx + 1]
            : 59;
          str = '分';
          break;
      }

      this.initRangeArr(min, max, indexT, checkIdx + 1, str);
    }
    this.setCurrentSelected(checkIdx + 1, sta, indexT);
  }

  initRangeArr(min, max, indexT, checkIdx, str) {
    const realIdx = this.indexArray[checkIdx];
    const arr = [];
    let targetLong = 0;
    const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;

    for (let index = min; index < max + 1; index += increaseValue) {
      arr.push(index);
    }

    if (arr.indexOf(this.resultArr[realIdx]) == -1) {
      if (-this.selectedTarget[checkIdx].currentY > max - min) {
        indexT = max - min;
        this.selectedTarget[checkIdx].currentY = -indexT;
      }
      targetLong = -arr.length * this.lineHeight;
    } else {
      targetLong = -arr.indexOf(this.resultArr[realIdx]) * this.lineHeight;
      this.selectedTarget[checkIdx].currentY = -arr.indexOf(this.resultArr[realIdx]);
    }
    if (this.data[checkIdx].toString() !== arr.toString()) {
      if (checkIdx >= 3) {
        this.current_time[realIdx] = -targetLong / this.lineHeight;
        this.resultArr[realIdx] = -targetLong / this.lineHeight;
      } else {
        const delta = this.judgeEqualArray(this.current_time, this.min_date, realIdx) ? this.min_date[realIdx] : 1;
        this.current_time[realIdx] = -targetLong / this.lineHeight + delta;
        this.resultArr[realIdx] = -targetLong / this.lineHeight + delta;
      }

      this.data[checkIdx] = arr;
      this.dataWithStr[checkIdx] =
        this.options.locale.locale === 'zh_CN'
          ? arr.map(item => {
              return item + str;
            })
          : arr;
      setTimeout(() => {
        this.selectedTarget.forEach((item, i) => {
          if (i >= checkIdx) {
            this.currentPicker.children[i].children[2].style.transition = '';
            const index = parseInt(item.currentY, 0);
            this.currentPicker.children[i].children[2].style.transform = `translateY(${index * this.lineHeight}px)`;
          }
        });
      }, 0);
    }
  }

  getEventTarget(event) {
    if (
      event.type === 'mousedown' ||
      event.type === 'mousemove' ||
      event.type === 'mouseup' ||
      event.type === 'mouseleave'
    ) {
      return event;
    } else {
      if (event && event.changedTouches && event.changedTouches[0]) {
        return event.changedTouches[0];
      }
      return null;
    }
  }

  ngOnInit() {
    this.checkMode(this.options.mode);
    const value = this.transformDateFormat(this.options.value).split('-');
    if (value.length > 1) {
      this.current_time = this.currentTime = value.map(item => {
        return parseInt(item, 0);
      });
    } else {
      this.currentTime = this.current_time;
    }
    this.localeProvider();
  }

  ngAfterViewInit() {
    this.reloadPicker();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

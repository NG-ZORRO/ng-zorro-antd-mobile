import { Component, HostBinding, OnInit, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
import { Models } from '../date/DataTypes';
import DatePicker from './datepicker.base.component';

@Component({
  selector: 'CalendarDatePicker, nzm-calendar-date-picker',
  templateUrl: './datepicker.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarDatePickerComponent extends DatePicker implements OnInit {
  constructor() {
    super();
  }

  transform: string = '';
  private _panel: any;
  private _initDelta: number = 0;
  private _lastY: number = 0;
  private _delta: number = this._initDelta;

  @ViewChild('layout')
  layoutDom: ElementRef;
  @ViewChild('panel')
  panelDom: ElementRef;

  @Input()
  set onCellClick(value) {
    this.props.onCellClick = value;
  }
  @Input()
  set endDate(value) {
    const oldProps = Object.assign({}, this.props);
    this.props.endDate = value;
    this.receiveProps(oldProps, this.props);
  }
  @Input()
  set startDate(value) {
    const oldProps = Object.assign({}, this.props);
    this.props.startDate = value;
    this.receiveProps(oldProps, this.props);
  }
  @Input()
  set propsData(value) {
    this.props = {
      ...this.props,
      ...value
    };
  }
  @Input()
  set onSelectHasDisableDate(value) {
    this.props.onSelectHasDisableDate = value;
  }
  @Input()
  set onLayout(value) {
    this.props.onLayout = value;
  }

  @HostBinding('class.am-calendar') amCalendar: boolean = true;
  @HostBinding('class.date-picker') datePicker: boolean = true;

  genMonthComponent = (data?: Models.MonthData) => {
    if (!data) return;
    return {
      monthData: data,
      locale: this.props.locale,
      rowSize: this.props.rowSize,
      onCellClick: this.baseOnCellClick,
      getDateExtra: this.props.getDateExtra,
      ref: dom => {
        data.componentRef = dom || data.componentRef || undefined;
        data.updateLayout = () => {
          this.computeHeight(data, dom);
        };
        data.updateLayout();
      }
    };
  }

  computeHeight = (data: Models.MonthData, singleMonth) => {
    if (singleMonth && singleMonth.wrapperDivDOM) {
      if (!data.height && !singleMonth.wrapperDivDOM.clientHeight) {
        setTimeout(() => this.computeHeight(data, singleMonth), 500);
        return;
      }
      data.height = singleMonth.wrapperDivDOM.clientHeight || data.height || 0;
      data.y = singleMonth.wrapperDivDOM.offsetTop || data.y || 0;
    }
  }

  setLayout = (dom: HTMLDivElement) => {
    if (dom) {
      const { onLayout } = this.props;
      onLayout && onLayout(dom.clientHeight);

      const scrollHandler = this.createOnScroll();
      dom.onscroll = evt => {
        scrollHandler({
          client: dom.clientHeight,
          full: (evt.currentTarget as HTMLDivElement).clientHeight,
          top: (evt.currentTarget as HTMLDivElement).scrollTop
        });
      };
    }
  }

  setPanel = (dom: HTMLDivElement) => {
    this._panel = dom;
  }

  onTouchStart(event) {
    this._lastY = event.touches[0].screenY;
    this._delta = this._initDelta;
  }

  onTouchMove(event) {
    const ele = event.currentTarget;
    const isReachTop = ele.scrollTop === 0;

    if (isReachTop) {
      this._delta = event.touches[0].screenY - this._lastY;
      if (this._delta > 0) {
        event.preventDefault();
        if (this._delta > 80) {
          this._delta = 80;
        }
      } else {
        this._delta = 0;
      }
      this.setTransform(this._panel.style, `translate3d(0,${this._delta}px,0)`);
    }
  }

  onTouchEnd(event) {
    this.onFinish();
  }

  onFinish() {
    if (this._delta > 40 && this.canLoadPrev()) {
      this.genMonthData(this.state.months[0].firstDate, -1);

      this.visibleMonth = this.state.months.slice(0, this.props.initalMonths);

      this.state.months.forEach(m => {
        m.updateLayout && m.updateLayout();
      });
    }
    this.setTransform(this._panel.style, `translate3d(0,0,0)`);
    this.setTransition(this._panel.style, '.3s');
    setTimeout(() => {
      this._panel && this.setTransition(this._panel.style, '');
    }, 300);
  }

  setTransform(nodeStyle: CSSStyleDeclaration, value: any) {
    this.transform = value;
    nodeStyle.transform = value;
    nodeStyle.webkitTransform = value;
  }

  setTransition(nodeStyle: CSSStyleDeclaration, value: any) {
    nodeStyle.transition = value;
    nodeStyle.webkitTransition = value;
  }

  ngOnInit() {
    this.init();
    this.setLayout(this.layoutDom.nativeElement);
    this.setPanel(this.panelDom.nativeElement);
  }
}

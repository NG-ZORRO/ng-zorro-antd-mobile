import { Component, OnInit, ViewEncapsulation, HostBinding, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Models } from '../date/DataTypes';
import { CalendarSingleMonthPropsType } from './PropsType';

@Component({
  selector: 'CalendarSingleMonth, nzm-single-month',
  templateUrl: './single-month.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarSingleMonthComponent implements OnInit, AfterViewInit {
  props = {
    rowSize: 'normal'
  } as CalendarSingleMonthPropsType;

  state = {
    weekComponents: []
  };
  ref: (dom) => void;
  wrapperDivDOM: HTMLDivElement | null;

  @Input()
  set data(value) {
    this.props = {
      ...this.props,
      ...value
    };
  }

  @HostBinding('class.single-month') singleMonth: boolean = true;

  constructor(private _elementRef: ElementRef) { }

  genWeek = (weeksData: Models.CellData[], index: number) => {
    const { getDateExtra, monthData, onCellClick, locale, rowSize } = this.props;
    let rowCls = 'row';
    let weeksDataList = [];
    if (rowSize === 'xl') {
      rowCls += ' row-xl';
    }

    weeksData.forEach((day, dayOfWeek) => {
      const extra = (getDateExtra && getDateExtra(new Date(day.tick))) || {};
      let info = extra.info;
      const disable = extra.disable || day.outOfDate;

      let cls = 'date';
      let lCls = 'left';
      let rCls = 'right';
      let infoCls = 'info';

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        cls += ' grey';
      }

      if (disable) {
        cls += ' disable';
      } else if (info) {
        cls += ' important';
      }

      if (day.selected) {
        cls += ' date-selected';
        let styleType = day.selected;
        switch (styleType) {
          case Models.SelectType.Only:
            info = locale.begin;
            infoCls += ' date-selected';
            break;
          case Models.SelectType.All:
            info = locale.begin_over;
            infoCls += ' date-selected';
            break;

          case Models.SelectType.Start:
            info = locale.begin;
            infoCls += ' date-selected';
            if (dayOfWeek === 6 || day.isLastOfMonth) {
              styleType = Models.SelectType.All;
            }
            break;
          case Models.SelectType.Middle:
            if (dayOfWeek === 0 || day.isFirstOfMonth) {
              if (day.isLastOfMonth || dayOfWeek === 6) {
                styleType = Models.SelectType.All;
              } else {
                styleType = Models.SelectType.Start;
              }
            } else if (dayOfWeek === 6 || day.isLastOfMonth) {
              styleType = Models.SelectType.End;
            }
            break;
          case Models.SelectType.End:
            info = locale.over;
            infoCls += ' date-selected';
            if (dayOfWeek === 0 || day.isFirstOfMonth) {
              styleType = Models.SelectType.All;
            }
            break;
        }

        switch (styleType) {
          case Models.SelectType.Single:
          case Models.SelectType.Only:
          case Models.SelectType.All:
            cls += ' selected-single';
            break;
          case Models.SelectType.Start:
            cls += ' selected-start';
            rCls += ' date-selected';
            break;
          case Models.SelectType.Middle:
            cls += ' selected-middle';
            lCls += ' date-selected';
            rCls += ' date-selected';
            break;
          case Models.SelectType.End:
            cls += ' selected-end';
            lCls += ' date-selected';
            break;
        }
      }

      weeksDataList[dayOfWeek] = {
        lCls,
        cls,
        day,
        rCls,
        infoCls,
        info,
        extra,
        disable,
        onCellClick: onCellClick,
        monthData
      };
    });

    this.state.weekComponents[index] = {
      index: index,
      rowCls,
      weeksDataList
    };
  }

  updateWeeks = (monthData?: Models.MonthData) => {
    (monthData || this.props.monthData).weeks.forEach((week, index) => {
      this.genWeek(week, index);
    });
  }

  setWarpper = (dom: HTMLDivElement) => {
    this.wrapperDivDOM = dom;
  }

  onClickCell(item) {
    !item.disable && item.onCellClick && item.onCellClick(item.day, item.monthData);
  }

  ngOnInit() {
    this.setWarpper(this._elementRef.nativeElement);
    this.props.monthData.weeks.forEach((week, index) => {
      this.genWeek(week, index);
    });
  }

  ngAfterViewInit() {
    this.ref = this.props.ref;
    this.ref(this);
  }
}

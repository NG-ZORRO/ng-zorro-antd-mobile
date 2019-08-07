import { DateModels } from '../date/DataTypes';
import { DatepickerPropsType } from './datepicker.props.component';
import { formatDate } from '../util';
import defaultLocale from '../locale/zh_CN';

export interface DatepickerStateType {
  months: DateModels.MonthData[];
}

export class CalendarDatePickerBaseComponent {
  props = {
    prefixCls: 'rmc-calendar',
    infinite: false,
    infiniteOpt: false,
    defaultDate: new Date(),
    initalMonths: 6,
    locale: defaultLocale
  } as DatepickerPropsType;

  state: any = {
    months: []
  };

  visibleMonth: DateModels.MonthData[] = [];
  genMonthComponent: (data) => {};

  constructor() {}

  init() {
    const { initalMonths = 6, defaultDate } = this.props;
    for (let i = 0; i < initalMonths; i++) {
      if (this.canLoadNext()) {
        this.genMonthData(defaultDate, i);
      }
    }
    this.visibleMonth = [...this.state.months];
  }

  receiveProps(oldValue: DatepickerPropsType, newValue: DatepickerPropsType) {
    if (oldValue && newValue) {
      if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate) {
        if (oldValue.startDate) {
          this.selectDateRange(oldValue.startDate, oldValue.endDate, true);
        }
        if (newValue.startDate) {
          this.selectDateRange(newValue.startDate, newValue.endDate);
        }
      }
    }
  }

  getMonthDate(date = new Date(), addMonth = 0) {
    const y = date.getFullYear(),
      m = date.getMonth();
    return {
      firstDate: new Date(y, m + addMonth, 1),
      lastDate: new Date(y, m + 1 + addMonth, 0)
    };
  }

  canLoadPrev() {
    const { minDate } = this.props;
    return (
      !minDate ||
      this.state.months.length <= 0 ||
      +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate
    );
  }

  canLoadNext() {
    const { maxDate } = this.props;
    return (
      !maxDate ||
      this.state.months.length <= 0 ||
      +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate
    );
  }

  getDateWithoutTime = (date?: Date) => {
    if (!date) {
      return 0;
    }
    return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  genWeekData = (firstDate: Date) => {
    const minDateTime = this.getDateWithoutTime(this.props.minDate);
    const maxDateTime = this.getDateWithoutTime(this.props.maxDate) || Number.POSITIVE_INFINITY;

    const weeks: DateModels.CellData[][] = [];
    const nextMonth = this.getMonthDate(firstDate, 1).firstDate;
    let currentDay = firstDate;
    let currentWeek: DateModels.CellData[] = [];
    weeks.push(currentWeek);

    let startWeekday = currentDay.getDay();
    if (startWeekday > 0) {
      for (let i = 0; i < startWeekday; i++) {
        currentWeek.push({} as DateModels.CellData);
      }
    }
    while (currentDay < nextMonth) {
      if (currentWeek.length === 7) {
        currentWeek = [];
        weeks.push(currentWeek);
      }
      const dayOfMonth = currentDay.getDate();
      const tick = +currentDay;
      currentWeek.push({
        tick,
        dayOfMonth,
        selected: DateModels.SelectType.None,
        isFirstOfMonth: dayOfMonth === 1,
        isLastOfMonth: false,
        outOfDate: tick < minDateTime || tick > maxDateTime
      });
      currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000);
    }
    currentWeek[currentWeek.length - 1].isLastOfMonth = true;
    return weeks;
  }

  genMonthData(date?: Date, addMonth: number = 0) {
    if (!date) {
      date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
    }
    if (!date) {
      date = new Date();
    }
    const { locale } = this.props;
    const { firstDate, lastDate } = this.getMonthDate(date, addMonth);
    const weeks = this.genWeekData(firstDate);
    const title = formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale);
    const data = {
      title,
      firstDate,
      lastDate,
      weeks
    } as DateModels.MonthData;
    data.component = this.genMonthComponent(data);
    if (addMonth >= 0) {
      this.state.months.push(data);
    } else {
      this.state.months.unshift(data);
    }
    const { startDate, endDate } = this.props;
    if (startDate) {
      this.selectDateRange(startDate, endDate);
    }
    return data;
  }

  inDate(date: number, tick: number) {
    return date <= tick && tick < date + 24 * 3600000;
  }

  selectDateRange = (startDate: Date, endDate?: Date, clear = false) => {
    const { getDateExtra, type, onSelectHasDisableDate } = this.props;
    if (type === 'one') {
      endDate = undefined;
    }
    const time1 = this.getDateWithoutTime(startDate),
      time2 = this.getDateWithoutTime(endDate);
    const startDateTick = !time2 || time1 < time2 ? time1 : time2;
    const endDateTick = time2 && time1 > time2 ? time1 : time2;

    const startMonthDate = this.getMonthDate(new Date(startDateTick)).firstDate;
    const endMonthDate = endDateTick ? new Date(endDateTick) : this.getMonthDate(new Date(startDateTick)).lastDate;

    let unuseable: number[] = [],
      needUpdate = false;
    this.state.months
      .filter(m => {
        return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
      })
      .forEach(m => {
        m.weeks.forEach(w =>
          w
            .filter(d => {
              if (!endDateTick) {
                return d.tick && this.inDate(startDateTick, d.tick);
              } else {
                return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
              }
            })
            .forEach(d => {
              const oldValue = d.selected;
              if (clear) {
                d.selected = DateModels.SelectType.None;
              } else {
                const info = (getDateExtra && getDateExtra(new Date(d.tick))) || {};
                if (d.outOfDate || info.disable) {
                  unuseable.push(d.tick);
                }
                if (this.inDate(startDateTick, d.tick)) {
                  if (type === 'one') {
                    d.selected = DateModels.SelectType.Single;
                  } else if (!endDateTick) {
                    d.selected = DateModels.SelectType.Only;
                  } else if (startDateTick !== endDateTick) {
                    d.selected = DateModels.SelectType.Start;
                  } else {
                    d.selected = DateModels.SelectType.All;
                  }
                } else if (this.inDate(endDateTick, d.tick)) {
                  d.selected = DateModels.SelectType.End;
                } else {
                  d.selected = DateModels.SelectType.Middle;
                }
              }
              needUpdate = needUpdate || d.selected !== oldValue;
            })
        );
        if (needUpdate && m.componentRef) {
          m.componentRef.updateWeeks();
        }
      });
    if (unuseable.length > 0) {
      if (onSelectHasDisableDate) {
        onSelectHasDisableDate(unuseable.map(tick => new Date(tick)));
      } else {
        console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable);
      }
    }
  }

  computeVisible = (clientHeight: number, scrollTop: number) => {
    let needUpdate = false;
    const MAX_VIEW_PORT = clientHeight * 2;
    const MIN_VIEW_PORT = clientHeight;

    // 大缓冲区外过滤规则
    const filterFunc = (vm: DateModels.MonthData) =>
      vm.y &&
      vm.height &&
      (vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT);

    if (this.props.infiniteOpt && this.visibleMonth.length > 12) {
      this.visibleMonth = this.visibleMonth.filter(filterFunc).sort((a, b) => +a.firstDate - +b.firstDate);
    }

    // 当小缓冲区不满时填充
    if (this.visibleMonth.length > 0) {
      const last = this.visibleMonth[this.visibleMonth.length - 1];
      if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
        const lastIndex = this.state.months.indexOf(last);
        for (let i = 1; i <= 2; i++) {
          const index = lastIndex + i;
          if (index < this.state.months.length && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
            this.visibleMonth.push(this.state.months[index]);
          } else {
            if (this.canLoadNext()) {
              this.genMonthData(undefined, 1);
            }
          }
        }
        needUpdate = true;
      }

      const first = this.visibleMonth[0];
      if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
        const firstIndex = this.state.months.indexOf(first);
        for (let i = 1; i <= 2; i++) {
          const index = firstIndex - i;
          if (index >= 0 && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
            this.visibleMonth.unshift(this.state.months[index]);
            needUpdate = true;
          }
        }
      }
    } else if (this.state.months.length > 0) {
      this.visibleMonth = this.state.months.filter(filterFunc);
      needUpdate = true;
    }

    return needUpdate;
  }

  createOnScroll = () => {
    // let timer: any;
    let clientHeight = 0,
      scrollTop = 0;

    return (data: { full: number; client: number; top: number }) => {
      const { client, top } = data;
      clientHeight = client;
      scrollTop = top;

      this.computeVisible(clientHeight, scrollTop);

      // 以上方法目前无问题，如果后续有性能问题，改用如下方法，但以下方法会导致刷新稍微延迟现象

      // if (timer) {
      //   return;
      // }
      //
      // timer = setTimeout(() => {
      //   timer = undefined;
      //
      //   if (this.computeVisible(clientHeight, scrollTop)) {
      //     console.log('update dom');
      //   }
      // }, 50);
    };
  }

  baseOnCellClick = (day: DateModels.CellData) => {
    if (!day.tick) {
      return;
    }
    if (this.props.onCellClick) {
      this.props.onCellClick(new Date(day.tick));
    }
  }
}

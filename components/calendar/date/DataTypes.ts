export namespace DateModels {
  export enum SelectType {
    None,
    Single,
    All,
    Only,
    Start,
    Middle,
    End
  }

  export interface Locale {
    title: string;
    today: string;
    month: string;
    year: string;
    am: string;
    pm: string;
    dateFormat: string;
    dateTimeFormat: string;
    noChoose: string;
    week: string[];
    clear: string;
    selectTime: string;
    selectStartTime: string;
    selectEndTime: string;
    start: string;
    end: string;
    begin: string;
    over: string;
    begin_over: string;
    confirm: string;
    monthTitle: string;
    loadPrevMonth: string;
    yesterday: string;
    lastWeek: string;
    lastMonth: string;
  }

  export interface CellData {
    tick: number;
    dayOfMonth: number;
    selected: SelectType;
    isFirstOfMonth: boolean;
    isLastOfMonth: boolean;
    outOfDate: boolean;
  }

  export interface ExtraData {
    info?: string;
    disable?: boolean;
    cellCls?: any;
    cellRender?: any;
  }

  export interface MonthData {
    title: string;
    firstDate: Date;
    lastDate: Date;
    weeks: DateModels.CellData[][];
    component?: any;
    height?: number;
    y?: number;
    updateLayout?: Function;
    componentRef?: any;
  }
}

import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, HostBinding } from '@angular/core';

@Component({
  selector: 'Grid, nzm-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {
  wrapCls = {};
  itemCls = {};
  carouselProps = {
    dots: false,
    dragging: false
  };
  defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid',
    square: true,
    itemStyle: {}
  };
  carouselData = [];
  carouselDataTmp = [];
  gridData = [];

  private _data = [];

  @Input()
  get columnNum(): number {
    return this.defaultProps.columnNum;
  }
  set columnNum(value: number) {
    if (typeof value === 'number') {
      this.defaultProps.columnNum = value;
      this.init();
    }
  }
  @Input()
  get carouselMaxRow(): number {
    return this.defaultProps.carouselMaxRow;
  }
  set carouselMaxRow(value: number) {
    if (typeof value === 'number') {
      this.defaultProps.carouselMaxRow = value;
      this.init();
    }
  }
  @Input()
  itemStyle: object = {};
  @Input()
  square: boolean = true;
  @Input()
  hasLine: boolean = true;
  @Input()
  get isCarousel(): boolean {
    return this.defaultProps.isCarousel;
  }
  set isCarousel(value: boolean) {
    this.defaultProps.isCarousel = value;
    this.init();
  }
  @Input()
  activeStyle: boolean = true;
  @Input()
  set data(value: Array<any>) {
    this._data = value;
    this.init();
  }
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-grid')
  amGrid: boolean = true;
  @HostBinding('class.am-grid-square')
  get amGridSquare(): boolean {
    return true === this.square;
  }
  @HostBinding('class.am-grid-line')
  get amGridLine(): boolean {
    return true === this.hasLine;
  }
  @HostBinding('class.am-grid-carousel')
  get amGridCarousel(): boolean {
    return true === this.isCarousel;
  }

  constructor() {}

  getContentType(value: any): string {
    if ((value.indexOf('http') >= 0 || value.indexOf('assets') >= 0) && value.indexOf('<') < 0) {
      return 'url';
    } else if (value.indexOf('<') >= 0) {
      return 'innerHTML';
    } else if (value instanceof TemplateRef) {
      return 'TemplateRef';
    } else {
      return 'icon';
    }
  }

  init() {
    const dataLength = (this._data && this._data.length) || 0;
    let rowCount = Math.ceil(dataLength / this.columnNum);
    let rowsArr;
    if (this.defaultProps.isCarousel) {
      if (rowCount % this.carouselMaxRow !== 0) {
        rowCount = rowCount + this.carouselMaxRow - (rowCount % this.carouselMaxRow);
      }
      const pageCount = Math.ceil(rowCount / this.carouselMaxRow);
      rowsArr = this.getRows(rowCount, dataLength);
      if (pageCount <= 1) {
        this.carouselProps = {
          dots: false,
          dragging: false
        };
      } else {
        this.carouselProps = {
          dots: true,
          dragging: true
        };
      }
      this.carouselDataTmp = this.getCarouselData(rowsArr, pageCount, rowCount);
    } else {
      this.gridData = this.getRows(rowCount, dataLength);
    }
  }

  getCarouselData(rowsArr: any[], pageCount: number, rowCount: number) {
    const pagesArr: any[] = [];
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      const pageRows: any[] = [];
      for (let ii = 0; ii < this.carouselMaxRow; ii++) {
        const rowIndex = pageIndex * this.carouselMaxRow + ii;
        if (rowIndex < rowCount) {
          pageRows.push(rowsArr[rowIndex]);
        } else {
          // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
          pageRows.push(null);
        }
      }
      pagesArr.push(pageRows);
    }
    return pagesArr;
  }

  getRows(rowCount: number, dataLength: number) {
    const columnNum = this.columnNum;
    const rowArr = new Array();
    for (let i = 0; i < rowCount; i++) {
      rowArr[i] = new Array();
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          rowArr[i][j] = this._data[dataIndex];
        } else {
          rowArr[i][j] = null;
        }
      }
    }
    return rowArr;
  }

  click(data, index) {
    const outputData = {
      data: data,
      index: index
    };
    this.onClick.emit(outputData);
  }

  ngOnInit() {
    this.itemCls = {
      [`${this.defaultProps.prefixCls}-item`]: true,
      [`${this.defaultProps.prefixCls}-active-item`]: false
    };
  }
}

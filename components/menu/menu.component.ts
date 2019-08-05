import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';

interface LocaleValue {
  okText: string;
  cancelText: string;
}

@Component({
  selector: 'Menu, nzm-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, OnDestroy {
  prefixCls: string = 'am-menu';
  subMenuPrefixCls: string = 'am-sub-menu';
  radioPrefixCls: string = 'am-radio';
  multiSelectMenuBtnsCls: string = 'am-multi-select-btns';
  menuSelectContanerPrefixCls: string = 'am-menu-select-container';
  firstLevelSelectValue: number | string;
  heightStyle: object;
  subMenuData: Array<any>;
  showSelect: boolean;
  subSelInitItem: object;
  locale: LocaleValue = {
    okText: '',
    cancelText: ''
  };

  private _data: Array<any> = [];
  private _unsubscribe$: Subject<void> = new Subject<void>();

  @Input()
  get data() {
    return this._data;
  }
  set data(v) {
    this._data = v;
    this.initData();
  }
  @Input()
  level: number = 2;
  @Input()
  value: Array<any> = [];
  @Input()
  height: number = document.documentElement.clientHeight / 2;
  @Input()
  multiSelect: boolean = false;
  @Output()
  onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onOk: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onCancel: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _localeProviderService: LocaleProviderService) {}

  onMenuOk() {
    this.onOk.emit(this.value);
  }

  onMenuCancel() {
    this.onCancel.emit();
  }

  getNewFsv() {
    let firstValue = '';
    if (this.value && this.value.length) {
      firstValue = this.value[0] as string;
    } else if (this._data && this._data.length && !this._data[0].isLeaf) {
      firstValue = this._data[0].value;
    }
    return firstValue;
  }

  onClickFirstLevelItem(dataItem) {
    this.firstLevelSelectValue = dataItem.value;
    if (dataItem.isLeaf && this.onChange) {
      this.onChange.emit([dataItem.value]);
    }
    this.initData();
  }

  onClickSubMenuItem(dataItem) {
    this.value = this.getSelectValue(dataItem);
    this.initData();
    setTimeout(() => {
      this.onChange.emit(this.value);
    }, 300);
  }

  getSelectValue(dataItem) {
    if (this.multiSelect) {
      if (this.value && this.value.length > 0) {
        if (this.level === 2 && this.value[0] !== this.firstLevelSelectValue) {
          return [this.firstLevelSelectValue, [dataItem.value]];
        } else {
          if (this.level == 1) {
            const chosenValues = Array.from(this.value);
            const existIndex = chosenValues.indexOf(dataItem.value);
            if (existIndex === -1) {
              chosenValues.push(dataItem.value);
            } else {
              chosenValues.splice(existIndex, 1);
            }
            return chosenValues;
          } else {
            const chosenValues = Array.from(this.value[1]);
            const existIndex = chosenValues.indexOf(dataItem.value);
            if (existIndex === -1) {
              chosenValues.push(dataItem.value);
            } else {
              chosenValues.splice(existIndex, 1);
            }
            return [this.firstLevelSelectValue, chosenValues];
          }
        }
      } else {
        return this.level === 2 ? [this.firstLevelSelectValue, [dataItem.value]] : [dataItem.value];
      }
    }
    return this.level === 2 ? [this.firstLevelSelectValue, dataItem.value] : [dataItem.value];
  }

  initData() {
    this.subMenuData = this._data;
    if (this.level === 2) {
      let parent = this._data;
      if (this.firstLevelSelectValue && this.firstLevelSelectValue !== '') {
        parent = this._data.filter(dataItem => dataItem.value === this.firstLevelSelectValue);
      }
      if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
        this.subMenuData = parent[0].children;
      } else {
        this.subMenuData = [];
      }
    }

    let subValue = (this.value && this.value.length > 0 && [...this.value]) || [];
    if (this.level === 2 && subValue.length > 1) {
      subValue.shift();
      if (this.multiSelect) {
        subValue = subValue[0] as string[];
      }
    }

    this.subSelInitItem = this.subMenuData
      .filter(dataItem => subValue.indexOf(dataItem.value) !== -1)
      .map(item => {
        return item.value;
      });

    const parentValue = this.value && this.value.length > 1 && this.level === 2 ? this.value[0] : null;

    this.showSelect = true;
    if (this.level === 2 && parentValue !== this.firstLevelSelectValue) {
      this.showSelect = false;
    }
  }

  getClass(dataItem) {
    return this.dataItemSelected(dataItem) ? this.prefixCls + '-selected' : '';
  }

  dataItemSelected(dataItem) {
    return dataItem.value === this.firstLevelSelectValue;
  }

  ngOnInit() {
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
      this.locale = <LocaleValue>this._localeProviderService.getLocaleSubObj('Menu');
    });

    this.firstLevelSelectValue = this.getNewFsv();

    this.heightStyle = {
      height: this.height + 'px'
    };
    this.initData();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}

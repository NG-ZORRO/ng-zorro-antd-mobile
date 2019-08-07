import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'SubMenu, nzm-sub-menu',
  templateUrl: './sub-menu.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubMenuComponent implements OnChanges {
  prefixCls = 'am-sub-menu';

  private _subMenuPrefixCls: string;
  private _subMenuData;
  private _multiSelect?: boolean;

  @Output()
  onSel: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  radioPrefixCls: string;
  @Input()
  showSelect: boolean;
  @Input()
  selItem;
  @Input()
  get subMenuPrefixCls(): string {
    return this._subMenuPrefixCls;
  }
  set subMenuPrefixCls(v: string) {
    this._subMenuPrefixCls = v;
  }
  @Input()
  get subMenuData(): any {
    return this._subMenuData;
  }
  set subMenuData(v: any) {
    this._subMenuData = v;
  }
  @Input()
  get multiSelect(): boolean {
    return this._multiSelect;
  }
  set multiSelect(v: boolean) {
    this._multiSelect = v;
  }

  constructor() {}

  onClick(dataItem) {
    this.onSel.emit(dataItem);
  }

  selected(dataItem) {
    return this.showSelect && (this.selItem.length > 0 && this.selItem.indexOf(dataItem.value) !== -1);
  }

  getClass(dataItem) {
    let name = this.radioPrefixCls + '-item ';
    name += this.selected(dataItem) ? this._subMenuPrefixCls + '-item-selected' : '';
    name += dataItem.disabled ? this._subMenuPrefixCls + '-item-disabled' : '';
    return name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._subMenuData.map(item => {
      item.checked = this.selected(item);
    });
  }
}

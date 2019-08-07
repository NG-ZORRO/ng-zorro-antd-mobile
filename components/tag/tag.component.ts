import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Tag, nzm-tag',
  templateUrl: './tag.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TagComponent implements OnInit {
  prefixCls: string = 'am-tag';
  closed: boolean = false;
  wrapCls: any = {};

  private _small: boolean = false;
  private _closable: boolean = false;
  private _selected: boolean = false;
  private _disabled: boolean = false;

  @Input()
  get small() {
    return this._small;
  }
  set small(v) {
    this._small = v;
    this.setClassMap();
  }
  @Input()
  get closable() {
    return this._closable;
  }
  set closable(v) {
    this._closable = v;
    this.setClassMap();
  }
  @Input()
  set selected(v) {
    this._selected = v;
    this.setClassMap();
  }
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    this.setClassMap();
  }
  @Output()
  onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  afterClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onClick() {
    if (this._disabled) {
      return;
    }
    this._selected = !this._selected;
    this.onChange.emit(this._selected);
    this.setClassMap();
  }

  onTagClose() {
    this.onClose.emit();
    this.closed = true;
    this.afterClose.emit();
  }

  setClassMap() {
    this.wrapCls = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-normal`]: !this._disabled && (!this._selected || this._small || this._closable),
      [`${this.prefixCls}-small`]: this._small,
      [`${this.prefixCls}-active`]: this._selected && !this._disabled && !this._small && !this._closable,
      [`${this.prefixCls}-disabled`]: this._disabled,
      [`${this.prefixCls}-closable`]: this._closable
    };
  }

  ngOnInit() {
    this.setClassMap();
  }
}

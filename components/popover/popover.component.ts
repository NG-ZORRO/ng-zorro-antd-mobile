import { Component, AfterViewInit, ViewEncapsulation, OnInit } from '@angular/core';
import { PopoverComponentOptions } from './popover-component-options.provider';

@Component({
  selector: 'Popover',
  templateUrl: './popover.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PopoverComponent implements OnInit, AfterViewInit {
  defaultProps: any = {
    prefixCls: 'am-popover'
  };
  maskCls: any = {};
  popoverCls: any = {};

  constructor(public options: PopoverComponentOptions) {}

  setClassMap() {
    this.maskCls = {
      [`${this.defaultProps.prefixCls}-mask`]: this.options.mask,
      [`${this.defaultProps.prefixCls}-mask-hidden`]: !this.options.mask
    };
    this.popoverCls = {
      [`${this.defaultProps.prefixCls}`]: true,
      [`${this.defaultProps.prefixCls}-placement-${this.options.placement}`]: true,
      [`${this.defaultProps.prefixCls}-${this.options.className}`]: true
    };
  }

  ngOnInit() {
    this.setClassMap();
  }
  ngAfterViewInit(): void {
    this.options.onAfterViewInit();
  }
}

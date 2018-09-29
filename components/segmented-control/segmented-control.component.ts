import { Component, Input, Output, HostBinding, EventEmitter } from '@angular/core';

export interface OnChangeEvent {
  selectedIndex: number;
  value: string;
}

@Component({
  selector: 'SegmentedControl, nz-segmented-control',
  templateUrl: './segmented-control.component.html'
})
export class SegmentedControlComponent {
  prefixCls: string = 'am-segment';

  @Input()
  tintColor: string = '#2DB7F5';
  @Input()
  disabled: boolean = false;
  @Input()
  selectedIndex: number = 0;
  @Input()
  values: Array<string>[];
  @Output()
  onChange: EventEmitter<OnChangeEvent> = new EventEmitter<OnChangeEvent>();

  @HostBinding('attr.role')
  role = 'tablist';
  @HostBinding('class.am-segment')
  amSegment: boolean = true;
  @HostBinding('class.am-segment-disabled')
  get amDisabled(): boolean {
    return this.disabled;
  }

  constructor() {}

  onClick(index: number, value: string) {
    if (!this.disabled && index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.onChange.emit({ selectedIndex: index, value: value });
    }
  }
}

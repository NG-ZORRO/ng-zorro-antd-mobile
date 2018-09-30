import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';

@Component({
  selector: 'PickerView, nzm-picker-view',
  templateUrl: './picker-view.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PickerViewComponent extends PickerComponent implements OnInit, AfterViewInit {
  options;
  @Input()
  data: Array<any> = [];
  @Input()
  value: Array<any> = [];
  @Input()
  cols: number = 3;
  @Input()
  cascade: boolean;
  @Input()
  indicatorStyle: object = {};
  @Input()
  itemStyle: object = {};
  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  pickerViewInit() {
    this.options.data = this.data;
    this.options.value = this.value;
    this.options.cols = this.cols;
    this.options.cascade = this.cascade;
    this.init();
  }

  ngOnInit() {
    this.pickerViewInit();
  }

  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }
}

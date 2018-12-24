import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'PickerView, nzm-picker-view',
  templateUrl: './picker-view.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PickerViewComponent),
      multi: true
    }
  ]
})
export class PickerViewComponent extends PickerComponent implements OnInit, AfterViewInit, ControlValueAccessor {
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

  writeValue(value: any[]): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: (_: any[]) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any[]): void { }

  ngOnInit() {
    this.pickerViewInit();
  }

  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }
}

import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
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
export class PickerViewComponent extends PickerComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
  options;
  @Input()
  data: Array<any> = [];
  @Input()
  cols: number = 3;
  @Input()
  cascade: boolean;
  @Input()
  indicatorStyle: object = {};
  @Input()
  itemStyle: object = {};

  pickerViewInit() {
    this.options.data = this.data;
    this.options.cols = this.cols;
    this.options.cascade = this.cascade;
    this.init();
  }

  init() {
    this.selectedTarget = [];
    if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
      this.dataForRender.push(this.generateArrayData(this.options.data));
    }
    if (this.options.value.length > 0) {
      this.getInitValueIndex(this.dataForRender);
    } else {
      for (let index = 0; index < this.dataForRender.length; index++) {
        this.selectedTarget.push({ targetId: `${index}`, currentY: 0 });
      }
    }
    setTimeout(() => {
      this.reloadPicker();
    });
  }

  writeValue(value: any[]): void {
    if (value) {
      this.options.value = value;
      this.init();
    }
  }

  registerOnChange(fn: (_: any[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any[]): void {}

  ngOnInit() {
    this.pickerViewInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cols) {
      this.dataForRender = [];
    }
    if (changes.data || changes.cols) {
      this.pickerViewInit();
    }
  }

  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }
}

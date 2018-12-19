import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  Component,
  AfterContentInit,
  OnDestroy,
  QueryList,
  forwardRef,
  ContentChildren,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { RadioItem } from './radio-item.component';

import { merge, Subject, Subscription } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

export interface RadioStatus {
  name: string;
  value: string;
}

export const RADIO_ITEM_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioItemGroup),
  multi: true
};

@Component({
  selector: 'RadioItemGroup, nzm-radio-item-group',
  templateUrl: './radio-item-group.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR]
})
export class RadioItemGroup implements AfterContentInit, OnDestroy, ControlValueAccessor {
  private selectedStatus: RadioStatus;
  private destroy$ = new Subject();
  private selectSubscription: Subscription;

  private _ngModelOnChange: (value: RadioStatus) => {};
  private _ngModelOnTouched: () => {};

  @ContentChildren(forwardRef(() => RadioItem)) radioItems: QueryList<RadioItem>;

  constructor() {}

  updateChildrenStatus() {
    if (this.radioItems && this.selectedStatus) {
      this.radioItems.forEach(radioItem => {
        radioItem.checked = radioItem.value === this.selectedStatus.value;
      });
    }
  }

  notifyValueChange(): void {
    if (this._ngModelOnChange) {
      this._ngModelOnChange(this.selectedStatus);
    }
  }

  ngAfterContentInit() {
    this.radioItems.changes
      .pipe(
        startWith(null),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateChildrenStatus();
        if (this.selectSubscription) {
          this.selectSubscription.unsubscribe();
        }
        this.selectSubscription = merge(...this.radioItems.map(radioItem => radioItem.select$))
          .pipe(takeUntil(this.destroy$))
          .subscribe(radioItem => {
            if (this.selectedStatus && this.selectedStatus.value !== radioItem.value) {
              this.selectedStatus.name = radioItem.name;
              this.selectedStatus.value = radioItem.value;
              this.updateChildrenStatus();
              this.notifyValueChange();
            }
          });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(value: RadioStatus): void {
    if (value) {
      this.selectedStatus = value;
      this.updateChildrenStatus();
    }
  }

  registerOnChange(fn: any): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._ngModelOnTouched = fn;
  }
}

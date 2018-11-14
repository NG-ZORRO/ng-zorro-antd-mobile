import { Injectable, Injector } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerCallBack, PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/core.module';
@Injectable()
export class Picker extends PopupService {
  static defaultOptions: PickerOptions = new PickerOptions();

  static showPicker(
    config: PickerOptions = Picker.defaultOptions,
    confirmCallback?: PickerCallBack,
    cancelCallback?: PickerCallBack
  ): void {
    const options = new PickerOptions();
    Object.assign(options, config, {
      hidePicker: (event): void => {
        this.hidePicker();
      },
      confirm: (event): void => {
        if (confirmCallback) {
          confirmCallback(event);
        }
      },
      cancel: (): void => {
        if (cancelCallback) {
          cancelCallback();
        }
      }
    });

    const optionalParams: Array<any> = [
      'data',
      'value',
      'cols',
      'mask',
      'title',
      'okText',
      'dismissText',
      'disabled',
      'cascade',
      'onOk',
      'onPickerChange',
      'indicatorStyle'
    ];
    optionalParams.forEach(param => {
      if (typeof this[param] !== 'undefined') {
        (options as any)[param] = this[param];
      }
    });
    const childInjector = Injector.create([
      {
        provide: PickerOptions,
        useValue: options
      }
    ]);
    Picker.showPopup(PickerComponent, childInjector);
  }

  static hidePicker(): void {
    Picker.hidePopup();
  }
}

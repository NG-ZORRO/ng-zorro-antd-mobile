import { Injectable, Injector } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerCallBack, PickerOptions } from './picker-options.provider';
import { PopupService } from '../core';
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

    const childInjector = Injector.create([
      {
        provide: PickerOptions,
        useValue: options
      }
    ]);
    Picker.showPopup('PickerComponent', PickerComponent, childInjector);
  }

  static hidePicker(): void {
    Picker.hidePopup('PickerComponent');
  }
}

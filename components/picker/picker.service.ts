import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PickerComponent } from './picker.component';
import { PickerCallBack, PickerOptions } from './picker-options.provider';

@Injectable()
export class Picker {
  static defaultOptions: PickerOptions;
  static viewContainerRef: ViewContainerRef = null;
  static overlay: Overlay = null;
  static overlayRef: OverlayRef = null;

  constructor(
    private _defaultOptions: PickerOptions,
    private _overlay: Overlay,
    public _viewContainerRef: ViewContainerRef
  ) {
    Picker.defaultOptions = this._defaultOptions;
    Picker.viewContainerRef = this._viewContainerRef;
    Picker.overlay = this._overlay;
  }

  static showPicker(
    config: PickerOptions = Picker.defaultOptions,
    confirmCallback?: PickerCallBack,
    cancelCallback?: PickerCallBack
  ): void {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;
    Picker.overlayRef = Picker.overlay.create(overlayConfig);
    Picker.overlayRef.backdropClick().subscribe(() => {
      Picker.overlayRef.dispose();
    });

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
    Picker.overlayRef.attach(new ComponentPortal(PickerComponent, Picker.viewContainerRef, childInjector));
  }

  static hidePicker(): void {
    if (Picker.overlayRef) {
      Picker.overlayRef.dispose();
    }
  }
}

import { Injectable, ComponentRef, ComponentFactory, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { CustomKeyboardComponent } from '../custom-keyboard/custom-keyboard.component';

@Injectable()
export class CustomInputService {
  static compRef: ComponentRef<any> = null;
  static appRef: ApplicationRef = null;
  static isShow = false;
  static clickValue = null;
  static _inputCompFactory: ComponentFactory<CustomKeyboardComponent> = null;
  static _keyboardPrefixCls = 'am-number-keyboard';

  constructor(private _appRef: ApplicationRef, private _cfr: ComponentFactoryResolver) {
    CustomInputService.appRef = this._appRef;
    CustomInputService._inputCompFactory = this._cfr.resolveComponentFactory(CustomKeyboardComponent);
  }

  static getShowStatus() {
    return CustomInputService.isShow;
  }

  static showKeyboard() {
    if (!this.isShow) {
      if (this.compRef) {
        this.compRef.instance.wrapperCls = {
          [`am-number-keyboard-wrapper`]: true
        };
      } else {
        let container = document.querySelector(`#${this._keyboardPrefixCls}-container`);
        if (!container) {
          container = document.createElement('div');
          container.setAttribute('id', `${this._keyboardPrefixCls}-container`);
          document.body.appendChild(container);
          container.appendChild(document.createElement(CustomInputService._inputCompFactory.selector));
          this.compRef = this.appRef.bootstrap(CustomInputService._inputCompFactory);
          this.compRef.instance.onClick.subscribe(e => {
            this.clickValue = e;
          });
        }
      }
      this.isShow = true;
    }
  }

  static hideKeyboard() {
    if (this.compRef && this.isShow) {
      this.isShow = false;
      this.compRef.instance.wrapperCls = {
        [`am-number-keyboard-wrapper`]: true,
        [`am-number-keyboard-wrapper-hide`]: true
      };
    }
  }
}

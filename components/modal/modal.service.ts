import { Injectable, Injector, ComponentRef, TemplateRef } from '@angular/core';

import { ModalServiceComponent } from './modal.component';
import { ModalBaseOptions, ModalOptions, ModalServiceCustomOptions, Action } from './modal-options.provider';
import { PopupService } from 'ng-zorro-antd-mobile/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ModalService extends PopupService {
  modalRef: ComponentRef<ModalServiceComponent> = null;

  _open(props: ModalBaseOptions): any {
    const childInjector = Injector.create({
      providers: [{ provide: ModalOptions, useValue: props }]
    });

    this.modalRef = this.showPopup(ModalServiceComponent, childInjector);
    return this.modalRef && this.modalRef.instance;
  }

  closeWithAnimation() {
    const options: ModalBaseOptions = new ModalBaseOptions();
    this.modalRef.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
    this.modalRef.instance.maskTransitionName = `${options.maskTransitionName}-leave ${options.maskTransitionName}-leave-active`;
    setTimeout(() => {
      this.close();
    }, 200);
  }

  alert(
    title?: string | TemplateRef<any>,
    message?: string | TemplateRef<any>,
    actions?: Array<any>,
    platform?: string
  ): any {
    const options: ModalOptions = new ModalOptions();
    const footer = getFooter.call(this, actions);
    const defaultOptions = {
      visible: true,
      transparent: true,
      closable: false,
      maskClosable: false,
      platform: platform || 'ios',
      title: title || '',
      message: message || '',
      footer,
      actions: footer,
      close: () => {
        this.closeWithAnimation();
      },
      closeWithAnimation: () => {
        this.closeWithAnimation();
      }
    };

    const props = {
      ...options,
      ...defaultOptions
    };

    return this._open(props);
  }

  prompt(
    title?: string | TemplateRef<any>,
    message?: string | TemplateRef<any>,
    callbackOrActions?: any,
    type?: string,
    defaultValue?: Array<string>,
    placeholders?: Array<any>,
    platform?: string
  ): any {
    const options: ModalOptions = new ModalOptions();

    function getArgs(self: any, func: any) {
      let text: any, password: any;
      if (self.modalRef) {
        text = self.modalRef.instance.data.text || options.defaultValue[0];
        password = self.modalRef.instance.data.password || options.defaultValue[1];
      } else {
        text = options.defaultValue[0];
        password = options.defaultValue[1];
      }

      if (type === 'login-password') {
        return func(text, password);
      } else if (type === 'secure-text') {
        return func(password);
      }
      return func(text);
    }

    const actions =
      typeof callbackOrActions === 'function'
        ? [
            { text: 'Cancel' },
            {
              text: 'OK',
              onPress: () => {
                getArgs(this, callbackOrActions);
              }
            }
          ]
        : callbackOrActions.map(item => {
            return {
              text: item.text,
              onPress: () => {
                if (item.onPress) {
                  return getArgs(this, item.onPress);
                }
              }
            };
          });

    const footer = getFooter.call(this, actions);
    const defaultOptions = {
      visible: true,
      transparent: true,
      closable: false,
      maskClosable: false,
      operation: true,
      className: 'm-modal-alert-content',
      defaultValue: defaultValue || ['', ''],
      placeholders: placeholders || [],
      type: type || 'default',
      title: title || '',
      message: message || '',
      footer,
      actions: footer,
      platform: platform ? platform : 'ios',
      close: () => {
        this.closeWithAnimation();
      },
      closeWithAnimation: () => {
        this.closeWithAnimation();
      }
    };

    const props = {
      ...options,
      ...defaultOptions
    };

    return this._open(props);
  }

  operation(actions?: any, platform?: string, customOptions?: ModalServiceCustomOptions): any {
    const options: ModalOptions = new ModalOptions();
    const footer = getFooter.call(this, actions);
    const defaultOptions = {
      visible: true,
      transparent: true,
      closable: false,
      maskClosable: false,
      operation: true,
      className: 'am-modal-operation',
      footer,
      platform: platform ? platform : 'ios',
      close: () => {
        this.closeWithAnimation();
      },
      closeWithAnimation: () => {
        this.closeWithAnimation();
      }
    };

    const props = {
      ...options,
      ...defaultOptions,
      ...customOptions
    };

    return this._open(props);
  }

  close() {
    this.hidePopup();
  }
}

function getFooter(actions) {
  let _actions = actions ? actions : [{ text: 'OK', onPress: () => {} }];

  return _actions.map((button: Action) => {
    const originPress = button.onPress || function() {};
    button.onPress = () => {
      const res = originPress();
      if (res && res.then) {
        res.then(() => {
          this.closeWithAnimation();
        });
      } else {
        this.closeWithAnimation();
      }
    };
    return button;
  });
}

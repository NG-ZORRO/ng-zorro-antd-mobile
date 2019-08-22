import { Injectable, Injector, ComponentRef, TemplateRef } from '@angular/core';
import { ModalServiceComponent } from './modal.component';
import { ModalBaseOptions, ModalOptions, AlertOptions, Action } from './modal-options.provider';
import { PopupService } from '../core/services/popup.service';
import { ModalRef } from './modal-ref.class';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ModalService extends PopupService {
  modalRef: ComponentRef<ModalServiceComponent> = null;
  _initConfig(config: ModalBaseOptions, options: any): ModalBaseOptions {
    const props: ModalBaseOptions = new ModalBaseOptions();
    const optionalParams: string[] = [
      'visible',
      'focus',
      'prefixCls',
      'animated',
      'closable',
      'maskClosable',
      'onClose',
      'transparent',
      'popup',
      'animationType',
      'title',
      'footer',
      'platform',
      'className',
      'wrapClassName',
      'message',
      'actions',
      'callbackOrActions',
      'type',
      'defaultValue',
      'placeholders',
      'operation',
      'transitionName',
      'maskTransitionName',
      'close',
      'closeWithAnimation'
    ];
    const self = this;
    config = Object.assign(
      options,
      config,
      {
        close: (): void => {
          if (config.maskClosable || config.closable) {
            self.closeWithAnimation();
          }
        }
      },
      {
        closeWithAnimation: (): void => {
          self.closeWithAnimation();
        }
      }
    );
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        props[key] = config[key];
      }
    });
    return props;
  }

  _open(props: ModalBaseOptions): any {
    const childInjector = Injector.create([
      {
        provide: ModalOptions,
        useValue: props
      }
    ]);
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
    const options: AlertOptions = new AlertOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.platform = 'ios';

    const footer = getFooter.call(this, actions);

    const config = Object.assign({
      title: title,
      message: message,
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });

    const props = this._initConfig(config, options);
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
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.className = 'am-modal-alert-content';
    options.defaultValue = defaultValue || ['', ''];
    options.placeholders = placeholders;
    (options.type = type ? type : 'default'), (options.platform = platform ? platform : 'ios');

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

    let actions;
    if (typeof callbackOrActions === 'function') {
      actions = [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: () => {
            getArgs(this, callbackOrActions);
          }
        }
      ];
    } else {
      actions = callbackOrActions.map(item => {
        return {
          text: item.text,
          onPress: () => {
            if (item.onPress) {
              return getArgs(this, item.onPress);
            }
          }
        };
      });
    }

    const footer = getFooter.call(this, actions);
    const config = Object.assign({
      title: title,
      message: message,
      type: type ? type : 'default',
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });
    const props = this._initConfig(config, options);
    return this._open(props);
  }

  operation(actions?: any, platform?: string): any {
    const options: ModalOptions = new ModalOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.operation = true;
    options.className = 'am-modal-operation';
    const footer = getFooter.call(this, actions);

    const config = Object.assign({
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });
    const props = this._initConfig(config, options);
    return this._open(props);
  }

  close() {
    this.hidePopup();
  }
}

function getFooter(actions) {
  let action = actions ? actions : [{ text: 'OK', onPress: () => {} }];
  return action.map((button: Action) => {
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      const res = orginPress();
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

import {
  Injectable,
  Injector,
  ComponentRef,
  TemplateRef,
} from '@angular/core';
import { ModalServiceComponent } from './modal.component';
import { BaseOptions, ModalOptions, AlertOptions, Action } from './modal-options.provider';
import { PopupService } from '../core/core.module';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class Modal extends PopupService {
  static modalRef: ComponentRef<ModalServiceComponent> = null;
  static _initConfig(config: BaseOptions, options: any): BaseOptions {
    const props: BaseOptions = new BaseOptions();
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
      'content',
      'actions',
      'callbackOrActions',
      'type',
      'defaultValue',
      'placeholders',
      'operation',
      'transitionName',
      'maskTransitionName',
      'close'
    ];
    config = Object.assign(options, config, {
      close: (): void => {
        if (config.maskClosable || config.closable) {
          Modal.closeWithAnimation();
        }
      }
    });
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        props[key] = config[key];
      }
    });
    return props;
  }

  static _open(props: BaseOptions): any {
    const childInjector = Injector.create([
      {
        provide: ModalOptions,
        useValue: props
      }
    ]);
    setTimeout(() => {
      Modal.modalRef =  Modal.showPopup(ModalServiceComponent, childInjector);
    }, 0);
  }

  static closeWithAnimation() {
    const options: BaseOptions = new BaseOptions();
    Modal.modalRef.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
    Modal.modalRef.instance.maskTransitionName = `${options.maskTransitionName}-leave ${
      options.maskTransitionName
    }-leave-active`;
    setTimeout(() => {
      Modal.close();
    }, 200);
  }

  static alert(
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

    const footer = getFooter(actions);

    const config = Object.assign({
      title: title,
      message: message,
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });

    const props = Modal._initConfig(config, options);
    return Modal._open(props);
  }

  static prompt(
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

    function getArgs(self, func) {
      const text = Modal.modalRef.instance.data.text || options.defaultValue[0];
      const password = Modal.modalRef.instance.data.password || options.defaultValue[1];
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

    const footer = getFooter(actions);
    const config = Object.assign({
      title: title,
      message: message,
      type: type ? type : 'default',
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });
    const props = Modal._initConfig(config, options);
    return Modal._open(props);
  }

  static operation(actions?: any, platform?: string): any {
    const options: ModalOptions = new ModalOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.operation = true;
    options.className = 'am-modal-operation';
    const footer = getFooter(actions);

    const config = Object.assign({
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });
    const props = Modal._initConfig(config, options);
    return Modal._open(props);
  }

  static close() {
    Modal.hidePopup('ModalServiceComponent');
  }
}

function getFooter(actions) {
  let action = actions ? actions :  [{ text: 'OK', onPress: () => {}}];
  return action.map((button: Action) => {
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      const res = orginPress();
      if (res && res.then) {
        res.then(() => {
          Modal.closeWithAnimation();
        });
      } else {
        Modal.closeWithAnimation();
      }
    };
    return button;
  });
}

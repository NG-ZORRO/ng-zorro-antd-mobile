import {
  Injectable,
  ComponentRef,
  ComponentFactory,
  ApplicationRef,
  Compiler,
  TemplateRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { BaseOptions, ModalOptions, AlertOptions, Action } from './modal-options.provider';

@Injectable()
export class Modal {
  static compRef: ComponentRef<any> = null;
  static _modalCompFactory: ComponentFactory<ModalComponent> = null;
  static appRef: ApplicationRef = null;
  static instance = null;
  constructor(private _appRef: ApplicationRef, private _compiler: Compiler, private _cfr: ComponentFactoryResolver) {
    Modal.appRef = this._appRef;
    Modal._modalCompFactory = this._cfr.resolveComponentFactory(ModalComponent);
  }

  static _initConfig(config: BaseOptions, options: any): BaseOptions {
    const props: BaseOptions = new BaseOptions();
    const optionalParams: string[] = [
      'visible',
      'focus',
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
      'close'
    ];
    options.transitionName = `${options.transitionName}-enter ${options.transitionName}-enter-active`;
    options.maskTransitionName = `${options.maskTransitionName}-enter ${options.maskTransitionName}-enter-active`;
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

  static _open(props: BaseOptions, factory: ComponentFactory<any>): any {
    document.body.insertBefore(document.createElement(factory.selector), document.body.firstChild);
    let subject: any;
    Modal.compRef = Modal.appRef.bootstrap(factory);
    Modal.instance = Modal.compRef.instance;
    subject = Modal.instance.subject;
    Object.assign(Modal.instance, props);
    return subject;
  }

  static closeWithAnimation() {
    const options: BaseOptions = new BaseOptions();
    Modal.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
    Modal.instance.maskTransitionName = `${options.maskTransitionName}-leave ${
      options.maskTransitionName
    }-leave-active`;
    setTimeout(() => {
      Modal.close();
    }, 200);
  }

  static open(config: BaseOptions): any {
    const options: ModalOptions = new ModalOptions();
    const props = Modal._initConfig(config, options);
    return Modal._open(props, Modal._modalCompFactory);
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
      actions: footer ? footer : [{ text: '确定' }],
      platform: platform ? platform : 'ios'
    });

    const props = Modal._initConfig(config, options);
    return Modal._open(props, this._modalCompFactory);
  }

  static prompt(
    title?: string | TemplateRef<any>,
    message?: string | TemplateRef<any>,
    callbackOrActions?: any,
    type?: string,
    defaultValue?: string,
    placeholders?: Array<any>,
    platform?: string
  ): any {
    const options: AlertOptions = new AlertOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.className = 'am-modal-alert-content';
    options.defaultValue = defaultValue;
    options.placeholders = placeholders;
    (options.type = type ? type : 'default'), (options.platform = platform ? platform : 'ios');

    function getArgs(self, func) {
      const text = self.instance.data.text || defaultValue || '';
      const password = self.instance.data.password || '';
      if (type === 'login-password') {
        return func(text, password);
      } else if (type === 'secure-text') {
        return func(password || defaultValue);
      }
      return func(text);
    }

    let actions;
    if (typeof callbackOrActions === 'function') {
      actions = [
        { text: '取消' },
        {
          text: '确定',
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
      actions: footer ? footer : [{ text: '确定' }],
      platform: platform ? platform : 'ios'
    });
    const props = Modal._initConfig(config, options);
    return Modal._open(props, this._modalCompFactory);
  }

  static operation(actions?: any, platform?: string): any {
    const options: BaseOptions = new BaseOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.operation = true;
    options.className = 'am-modal-operation';
    const footer = getFooter(actions);

    const config = Object.assign({
      actions: footer ? footer : [{ text: '确定' }],
      platform: platform ? platform : 'ios'
    });
    const props = Modal._initConfig(config, options);
    return Modal._open(props, this._modalCompFactory);
  }

  static close() {
    if (Modal.compRef) {
      Modal.compRef.destroy();
      Modal.compRef = null;
    }
  }
}

function getFooter(actions) {
  return actions.map((button: Action) => {
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

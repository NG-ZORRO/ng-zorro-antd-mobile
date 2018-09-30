import {
  Injectable,
  ComponentRef,
  ComponentFactory,
  ApplicationRef,
  Compiler,
  ComponentFactoryResolver,
} from '@angular/core';
import { ToastComponent } from './toast.component';
import { ToastOptions } from './toast-options.provider';

export interface ConfigInterface {
  content?: any;
  iconType?: string;
  mask?: boolean;
}

@Injectable()
export class Toast {
  static timeout = null;
  static compRef: ComponentRef<any> = null;
  static _toastCompFactory: ComponentFactory<ToastComponent> = null;
  static _appRef: ApplicationRef = null;

  constructor(private _appRef: ApplicationRef, private _compiler: Compiler, private _cfr: ComponentFactoryResolver) {
    Toast._appRef = this._appRef;
    Toast._toastCompFactory = this._cfr.resolveComponentFactory(ToastComponent);
  }

  static _initConfig(config: Object, options: ToastOptions): Object {
    const props = {};
    const optionalParams: string[] = ['content', 'iconType', 'mask'];

    config = Object.assign(options, config);
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        props[key] = config[key];
      }
    });

    const iconType = {
      info: '',
      success: 'success',
      fail: 'fail',
      offline: 'dislike',
      loading: 'loading'
    }[options.iconType];

    props['iconType'] = iconType;
    props['mask'] = options.mask;
    return props;
  }

  static notice(config: ConfigInterface, type, timeInterval = 2000, onClose, mask = true) {
    // 如果已经存在，在没有遮罩层的情况下，会响应别的toast，需要清除原来的
    if (Toast.compRef) {
      Toast.hide();
    }
    const options: ToastOptions = new ToastOptions();
    options.iconType = type;
    options.mask = mask;
    const props = Toast._initConfig(config, options);

    document.body.insertBefore(document.createElement(Toast._toastCompFactory.selector), document.body.firstChild);
    let instance: any;
    let subject: any;

    Toast.compRef = Toast._appRef.bootstrap(Toast._toastCompFactory);
    instance = Toast.compRef.instance;
    subject = instance.subject;

    if (timeInterval) {
      Toast.timeout = setTimeout(() => {
        if (onClose) {
          onClose();
        }
        Toast.hide();
      }, timeInterval);
    }

    Object.assign(instance, props);
    return subject;
  }

  /**
   * Open info dialog
   */
  static info(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean) {
    const config = Object.assign({
      iconType: 'info',
      content: content
    });
    return Toast.notice(config, 'info', timeInterval, onClose, mask);
  }

  /**
   * Open success dialog
   */
  static success(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean) {
    const config = Object.assign({
      iconType: 'success',
      content: content
    });
    return Toast.notice(config, 'success', timeInterval, onClose, mask);
  }

  static show(content?: string, timeInterval?: number, mask?: boolean) {
    const config = Object.assign({
      iconType: 'info',
      content: content
    });
    return Toast.notice(config, 'info', timeInterval, () => {}, mask);
  }

  static fail(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean) {
    const config = Object.assign({
      iconType: 'fail',
      content: content
    });
    return Toast.notice(config, 'fail', timeInterval, onClose, mask);
  }

  static offline(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean) {
    const config = Object.assign({
      iconType: 'offline',
      content: content
    });
    return Toast.notice(config, 'offline', timeInterval, onClose, mask);
  }

  static loading(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean) {
    const config = Object.assign({
      iconType: 'loading',
      content: content
    });
    return Toast.notice(config, 'loading', timeInterval, onClose, mask);
  }

  static hide() {
    if (Toast.timeout) {
      clearTimeout(Toast.timeout);
    }
    if (Toast.compRef) {
      Toast.compRef.destroy();
      Toast.compRef = null;
    }
  }
}

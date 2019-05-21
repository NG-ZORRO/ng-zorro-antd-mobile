import {
  Injectable,
  ComponentRef,
  ComponentFactory,
  ApplicationRef,
  Compiler,
  NgZone,
  ComponentFactoryResolver,
} from '@angular/core';
import { ToastComponent } from './toast.component';
import { ToastOptions } from './toast-options.provider';

export interface ConfigInterface {
  content?: any;
  iconType?: string;
  mask?: boolean;
}
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ToastService {
  static timeout = null;
  static _zone: NgZone = null;
  static compRef: ComponentRef<any> = null;
  static _toastCompFactory: ComponentFactory<ToastComponent> = null;
  static _appRef: ApplicationRef = null;

  constructor(private _appRef: ApplicationRef, private _compiler: Compiler, private _cfr: ComponentFactoryResolver, private _zone: NgZone) {
    ToastService._zone = this._zone;
    ToastService._appRef = this._appRef;
    ToastService._toastCompFactory = this._cfr.resolveComponentFactory(ToastComponent);
  }

  static _initConfig(config: Object, options: ToastOptions): Object {
    const props = {};
    const optionalParams: string[] = ['content', 'iconType', 'mask', 'position'];

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
    props['position'] = options.position;
    return props;
  }

  static notice(config: ConfigInterface, type, timeInterval = 2000, onClose, mask = true, position = 'middle') {
    // 如果已经存在，在没有遮罩层的情况下，会响应别的toast，需要清除原来的
    if (ToastService.compRef) {
      ToastService.hide();
    }
    const options: ToastOptions = new ToastOptions();
    options.iconType = type;
    options.mask = mask;
    options.position = position;
    const props = ToastService._initConfig(config, options);

    document.body.insertBefore(document.createElement(ToastService._toastCompFactory.selector), document.body.firstChild);
    let instance: any;
    let subject: any;

    ToastService.compRef = ToastService._appRef.bootstrap(ToastService._toastCompFactory);
    instance = ToastService.compRef.instance;
    subject = instance.subject;

    if (timeInterval) {
      ToastService.timeout = setTimeout(() => {
        if (onClose) {
          onClose();
        }
        ToastService.hide();
      }, timeInterval);
    }

    Object.assign(instance, props);
    return subject;
  }

  /**
   * Open info dialog
   */
  static info(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'info',
      content: content
    });
    return ToastService.notice(config, 'info', timeInterval, onClose, mask, position);
  }

  /**
   * Open success dialog
   */
  static success(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'success',
      content: content
    });
    return ToastService.notice(config, 'success', timeInterval, onClose, mask, position);
  }

  static show(content?: string, timeInterval?: number, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'info',
      content: content
    });
    return ToastService.notice(config, 'info', timeInterval, () => {}, mask, position);
  }

  static fail(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'fail',
      content: content
    });
    return ToastService.notice(config, 'fail', timeInterval, onClose, mask, position);
  }

  static offline(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'offline',
      content: content
    });
    return ToastService.notice(config, 'offline', timeInterval, onClose, mask, position);
  }

  static loading(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'loading',
      content: content
    });
    return ToastService.notice(config, 'loading', timeInterval, onClose, mask, position);
  }

  static hide() {
    if (ToastService.timeout) {
      clearTimeout(ToastService.timeout);
    }
    if (ToastService.compRef) {
      ToastService._zone.run(() => {
        ToastService.compRef.destroy();
      });
      ToastService.compRef = null;
    }
  }
}

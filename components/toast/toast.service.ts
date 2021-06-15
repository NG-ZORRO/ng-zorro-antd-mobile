import {
  Injectable,
  ComponentRef,
  ComponentFactory,
  ApplicationRef,
  NgZone,
  ComponentFactoryResolver
} from '@angular/core';
import { ToastComponent } from './toast.component';
import { ToastOptions } from './toast-options.provider';
import { first } from 'rxjs/operators';

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
  timeout = null;
  zone: NgZone = null;
  compRef: ComponentRef<any> = null;
  insertElement: HTMLElement = null;
  toastCompFactory: ComponentFactory<ToastComponent> = null;
  appRef: ApplicationRef = null;

  constructor(private _appRef: ApplicationRef, private _cfr: ComponentFactoryResolver, private _zone: NgZone) {
    this.zone = this._zone;
    this.appRef = this._appRef;
    this.toastCompFactory = this._cfr.resolveComponentFactory(ToastComponent);
  }

  _initConfig(config: Object, options: ToastOptions): Object {
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

  async notice(config: ConfigInterface, type, timeInterval = 2000, onClose, mask = true, position = 'middle') {
    // 如果已经存在，在没有遮罩层的情况下，会响应别的toast，需要清除原来的
    if (this.compRef) {
      this.hide();
    }
    const options: ToastOptions = new ToastOptions();
    options.iconType = type;
    options.mask = mask;
    options.position = position;
    const props = this._initConfig(config, options);

    this.insertElement = document.body.insertBefore(document.createElement(this.toastCompFactory.selector), document.body.firstChild);
    let instance: any;
    let subject: any;
    // 需要等待应用程序稳定后再安装，比如在 ngOnInit 里调用
    if (!this._zone.isStable) {
      await this._appRef.isStable.pipe(
        first(stable => stable)
      )
    }

    this.compRef = this._appRef.bootstrap(this.toastCompFactory);
    instance = this.compRef.instance;
    subject = instance.subject;

    if (timeInterval) {
      this.timeout = setTimeout(() => {
        if (onClose) {
          onClose();
        }
        this.hide();
      }, timeInterval);
    }
    Object.assign(instance, props);
    return subject;
  }

  /**
   * Open info dialog
   */
  info(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'info',
      content: content
    });
    return this.notice(config, 'info', timeInterval, onClose, mask, position);
  }

  /**
   * Open success dialog
   */
  success(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'success',
      content: content
    });
    return this.notice(config, 'success', timeInterval, onClose, mask, position);
  }

  show(content?: string, timeInterval?: number, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'info',
      content: content
    });
    return this.notice(config, 'info', timeInterval, () => {}, mask, position);
  }

  fail(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'fail',
      content: content
    });
    return this.notice(config, 'fail', timeInterval, onClose, mask, position);
  }

  offline(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'offline',
      content: content
    });
    return this.notice(config, 'offline', timeInterval, onClose, mask, position);
  }

  loading(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string) {
    const config = Object.assign({
      iconType: 'loading',
      content: content
    });
    return this.notice(config, 'loading', timeInterval, onClose, mask, position);
  }

  hide() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.compRef) {
      this._zone.run(() => {
        this.compRef.destroy();
        document.body.removeChild(this.insertElement);
      });
      this.compRef = null;
      this.insertElement = null;
    }
  }
}

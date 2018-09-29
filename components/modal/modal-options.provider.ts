import { Injectable, TemplateRef } from '@angular/core';

export class BaseOptions {
  visible?: boolean = false;
  focus?: boolean = true;
  closable?: boolean = false;
  maskClosable?: boolean = true;
  onClose?: any;
  transparent?: boolean = false;
  popup?: boolean = false;
  animationType?: string;
  title?: string | TemplateRef<any>;
  footer?: Array<any>;
  platform?: string;
  className?: string;
  wrapClassName?: string;
  message?: string | TemplateRef<any>;
  actions?: Array<any>;
  callbackOrActions?: Array<any>;
  type?: string;
  defaultValue?: string;
  placeholders?: Array<any>;
  operation?: boolean;
  transitionName?: string = 'am-zoom';
  maskTransitionName?: string = 'am-fade';
  close: () => void;
}

@Injectable()
export class ModalOptions extends BaseOptions {}

@Injectable()
export class AlertOptions extends BaseOptions {
  /**
   * 	提示信息
   */
  message?: string | TemplateRef<any>;

  /**
   * 按钮组, [{text, onPress, style}]
   */
  actions?: Array<any>;
}

@Injectable()
export class PromptOptions extends BaseOptions {
  /**
   * 	提示信息
   */
  message?: string | TemplateRef<any>;

  /**
   * 按钮组 [{text, onPress}]
   * 或回调函数 Array or Function
   */
  callbackOrActions?: Array<any>;

  /**
   * prompt 的样式
   * String (default, secure-text, login-password)
   */
  type?: string;

  /**
   * 默认值(input 为 password 类型不支持)
   */
  defaultValue?: string;

  /**
   * ['', '']
   */
  placeholders?: Array<any>;
}

@Injectable()
export class OperationOptions extends BaseOptions {
  /**
   * 按钮组, [{text, onPress, style}]
   */
  actions?: Array<any>;
}

@Injectable()
export class Action {
  text?: string;
  onPress?: Function;
  style?: {};
}

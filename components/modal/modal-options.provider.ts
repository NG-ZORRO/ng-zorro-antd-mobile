import { Injectable, TemplateRef } from '@angular/core';

export class ModalBaseOptions {
  visible?: boolean = false;
  focus?: boolean = true;
  prefixCls?: string = 'am-modal';
  animated?: boolean = true;
  closable?: boolean = false;
  maskClosable?: boolean = true;
  onClose?: any;
  transparent?: boolean = false;
  popup?: boolean = false;
  animationType?: string = 'slide-down';
  title?: string | TemplateRef<any>;
  footer?: Array<any> = [];
  platform?: string = 'ios';
  className?: string;
  wrapClassName?: string;
  message?: string | TemplateRef<any>;
  actions?: Array<any>;
  callbackOrActions?: Array<any>;
  type?: string;
  defaultValue?: Array<string> = [];
  placeholders?: Array<string> = [];
  operation?: boolean;
  transitionName?: string = 'am-zoom';
  maskTransitionName?: string = 'am-fade';
  close: () => void;
  closeWithAnimation: () => void;
}

@Injectable()
export class ModalOptions extends ModalBaseOptions {
  transitionName?: string = 'am-fade';
  maskTransitionName?: string = 'am-fade';
}

@Injectable()
export class AlertOptions extends ModalBaseOptions {
  message?: string | TemplateRef<any>;
  actions?: Array<any>;
}

@Injectable()
export class Action {
  text?: string;
  onPress?: Function;
  style?: {};
}

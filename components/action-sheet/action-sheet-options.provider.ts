import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ActionSheetOptions {
  prefixCls?: string;
  maskClosable?: boolean;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  title?: string | TemplateRef<any>;
  message?: string | TemplateRef<any>;
  className?: string;
  transitionName?: string = 'am-slide-up';
  maskTransitionName?: string = 'am-fade';
}

@Injectable()
export class ShareOption {
  icon: string | TemplateRef<any>;
  title: string;
}

@Injectable()
export class ShareActionSheetWithOptions extends ActionSheetOptions {
  options: ShareOption[] | ShareOption[][];
}

@Injectable()
export class ActionSheetWithOptions extends ActionSheetOptions {
  options: string[];
}

export type ActionCallBack = (index: number, rowIndex?: number) => PromiseLike<any> | void;

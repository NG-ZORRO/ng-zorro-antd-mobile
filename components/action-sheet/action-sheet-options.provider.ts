import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ActionSheetOptions {
  prefixCls?: string = 'am-action-sheet';
  maskClosable?: boolean = true;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  title?: string | TemplateRef<any>;
  message?: string | TemplateRef<any>;
  className?: string;
  transitionName?: string = 'am-slide-up';
  maskTransitionName?: string = 'am-fade';
  locale?;
  close?: () => void;
}

@Injectable()
export class ShareOption {
  icon: string | TemplateRef<any>;
  title: string;
}

@Injectable()
export class ShareActionSheetWithOptions extends ActionSheetOptions {
  options: ShareOption[] | ShareOption[][];
  cancelButtonText?: string = 'Cancel';
}

@Injectable()
export class ActionSheetWithOptions extends ActionSheetOptions {
  options: string[];
}

export type ActionCallBack = (index: number, rowIndex?: number) => PromiseLike<any> | void;

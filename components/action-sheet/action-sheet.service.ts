import { Injectable, ComponentRef, ComponentFactory, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import {
  ActionCallBack,
  ActionSheetOptions,
  ActionSheetWithOptions,
  ShareActionSheetWithOptions
} from './action-sheet-options.provider';
import { ActionSheetSubject } from './action-sheet-subject.service';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() {}

@Injectable()
export class ActionSheet {
  static compRef: ComponentRef<any> = null;
  static _actionSheetCompFactory: ComponentFactory<ActionSheetComponent> = null;
  static appRef: ApplicationRef = null;

  static instance = null;
  constructor(private _appRef: ApplicationRef, private _cfr: ComponentFactoryResolver) {
    ActionSheet.appRef = this._appRef;
    ActionSheet._actionSheetCompFactory = this._cfr.resolveComponentFactory(ActionSheetComponent);
  }

  static _initConfig(config: ActionSheetOptions, options: Object = {}): ActionSheetOptions {
    const props: ActionSheetOptions = new ActionSheetOptions();
    const optionalParams: string[] = [
      'prefixCls',
      'maskClosable',
      'cancelButtonIndex',
      'destructiveButtonIndex',
      'title',
      'message',
      'className',
      'transitionName',
      'maskTransitionName',
      'options'
    ];
    config = Object.assign(options, config);
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        props[key] = config[key];
      }
    });
    return props;
  }

  static _open(props: ActionSheetOptions, factory: ComponentFactory<any>): ActionSheetSubject {
    document.body.insertBefore(document.createElement(factory.selector), document.body.firstChild);
    let subject: any;

    ActionSheet.compRef = ActionSheet.appRef.bootstrap(factory);
    ActionSheet.instance = ActionSheet.compRef.instance;
    subject = ActionSheet.instance.subject;
    Object.assign(ActionSheet.instance, props);
    return subject;
  }

  static createActionSheet(
    flag: string,
    config: ActionSheetWithOptions | ShareActionSheetWithOptions,
    callback: ActionCallBack
  ) {
    const options: ActionSheetOptions = new ActionSheetOptions();
    const transitionName = config.transitionName ? config.transitionName : options.transitionName;
    options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
    const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
    options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
    const props = ActionSheet._initConfig(config, options);
    Object.assign(props, { onPress: cb }, { flag: flag });
    function cb(index: any, rowIndex = 0) {
      const res = callback(index, rowIndex);
      if (res && res.then) {
        res.then(() => {
          ActionSheet.closeWithAnimation(transitionName, maskTransitionName);
        });
      } else {
        ActionSheet.closeWithAnimation(transitionName, maskTransitionName);
      }
    }
    return ActionSheet._open(props, ActionSheet._actionSheetCompFactory);
  }

  static closeWithAnimation(transitionName, maskTransitionName) {
    ActionSheet.instance.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
    ActionSheet.instance.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
    setTimeout(() => {
      ActionSheet.close();
    }, 200);
  }

  static showActionSheetWithOptions(config: ActionSheetWithOptions, callback: ActionCallBack = noop) {
    ActionSheet.createActionSheet(NORMAL, config, callback);
  }

  static showShareActionSheetWithOptions(config: ShareActionSheetWithOptions, callback: ActionCallBack = noop) {
    ActionSheet.createActionSheet(SHARE, config, callback);
  }

  static close() {
    if (ActionSheet.compRef) {
      ActionSheet.compRef.destroy();
      ActionSheet.compRef = null;
    }
  }
}

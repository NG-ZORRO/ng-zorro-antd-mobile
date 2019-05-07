import { Injectable, ComponentRef, ComponentFactory, ApplicationRef } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import {
  ActionCallBack,
  ActionSheetOptions,
  ActionSheetWithOptions,
  ShareActionSheetWithOptions
} from './action-sheet-options.provider';
import { PopupService } from '../core';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() {}
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ActionSheet extends PopupService {
  static compRef: ComponentRef<any> = null;
  static _actionSheetCompFactory: ComponentFactory<ActionSheetComponent> = null;
  static appRef: ApplicationRef = null;
  static comRef: ComponentRef<ActionSheetComponent> = null;

  static instance = null;

  static _initConfig(config: ActionSheetOptions, options: Object = {}): ActionSheetOptions {
    const props: ActionSheetOptions = new ActionSheetOptions();
    const optionalParams: string[] = [
      'prefixCls',
      'maskClosable',
      'cancelButtonText',
      'cancelButtonIndex',
      'destructiveButtonIndex',
      'title',
      'message',
      'className',
      'transitionName',
      'maskTransitionName',
      'options',
      'locale'
    ];
    config = Object.assign(options, config, {
      close: (): void => {
        if (config.maskClosable) {
          ActionSheet.closeWithAnimation(config.transitionName, config.maskTransitionName);
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

  static _open(props: ActionSheetOptions) {
    setTimeout(() => {
      ActionSheet.comRef =  ActionSheet.showPopup('ActionSheetComponent', ActionSheetComponent);
      ActionSheet.comRef.instance.option = props;
    }, 0);
  }

  static createActionSheet(
    flag: string,
    config: ActionSheetWithOptions | ShareActionSheetWithOptions,
    callback: ActionCallBack
  ) {
    const options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
    const transitionName = config.transitionName ? config.transitionName : options.transitionName;
    options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
    const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
    options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
    const props = ActionSheet._initConfig(config, options);
    Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : () => {}});
    function cb(index: any, rowIndex = 0, event) {
      event.stopPropagation();
      const res = callback(index, rowIndex);
      if (res && res.then) {
        res.then(() => {
          ActionSheet.closeWithAnimation(transitionName, maskTransitionName);
        });
      } else {
        ActionSheet.closeWithAnimation(transitionName, maskTransitionName);
      }
    }
    return ActionSheet._open(props);
  }

  static closeWithAnimation(transitionName, maskTransitionName) {
    ActionSheet.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
    ActionSheet.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
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
    ActionSheet.hidePopup('ActionSheetComponent');
  }
}

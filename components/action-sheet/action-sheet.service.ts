import { Injectable, ComponentRef, ComponentFactory, ApplicationRef } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import {
  ActionCallBack,
  ActionSheetOptions,
  ActionSheetWithOptions,
  ShareActionSheetWithOptions
} from './action-sheet-options.provider';
import { PopupService } from '../core/services/popup.service';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() {}
@Injectable({
  providedIn: 'root'
})
export class ActionSheetService extends PopupService {
  compRef: ComponentRef<any> = null;
  _actionSheetCompFactory: ComponentFactory<ActionSheetComponent> = null;
  appRef: ApplicationRef = null;
  comRef: ComponentRef<ActionSheetComponent> = null;

  instance = null;

  _initConfig(config: ActionSheetOptions, options: Object = {}): ActionSheetOptions {
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
      'locale',
      'close'
    ];
    const self = this;
    config = Object.assign(options, config, {
      close: (): void => {
        if (config.maskClosable) {
          self.closeWithAnimation(config.transitionName, config.maskTransitionName);
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

  _open(props: ActionSheetOptions) {
    this.comRef = this.showPopup(ActionSheetComponent);
    this.comRef.instance.option = props;
    return this.comRef && this.comRef.instance;
  }

  createActionSheet(
    flag: string,
    config: ActionSheetWithOptions | ShareActionSheetWithOptions,
    callback: ActionCallBack
  ) {
    const options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
    const transitionName = config.transitionName ? config.transitionName : options.transitionName;
    options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
    const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
    options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
    const props = this._initConfig(config, options);
    Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : () => {} });
    const self = this;
    function cb(index: any, rowIndex = 0, event) {
      event.stopPropagation();
      const res = callback(index, rowIndex);
      if (res && res.then) {
        res.then(() => {
          self.closeWithAnimation(transitionName, maskTransitionName);
        });
      } else {
        self.closeWithAnimation(transitionName, maskTransitionName);
      }
    }
    return this._open(props);
  }

  closeWithAnimation(transitionName, maskTransitionName) {
    this.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
    this.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
    setTimeout(() => {
      this.close();
    }, 200);
  }

  showActionSheetWithOptions(config: ActionSheetWithOptions, callback: ActionCallBack = noop) {
    return this.createActionSheet(NORMAL, config, callback);
  }

  showShareActionSheetWithOptions(config: ShareActionSheetWithOptions, callback: ActionCallBack = noop) {
    return this.createActionSheet(SHARE, config, callback);
  }

  close() {
    this.hidePopup();
  }
}

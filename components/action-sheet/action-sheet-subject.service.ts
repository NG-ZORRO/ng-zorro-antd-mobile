import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/* 事件枚举 */
const enum actionSheetEvent {
  onShow,
  onShown,
  onHide,
  onHidden,
  onOk,
  onCancel,
  onDestroy
}

@Injectable()
export class ActionSheetSubject extends Subject<any> {
  modalId: string;
  private _eventsQueue = {};

  constructor() {
    super();
    this.subscribe((value: string) => {
      const eventQueue: Array<Function> = this._eventsQueue[value] || [];
      eventQueue.forEach(cb => {
        if (cb !== null && cb !== undefined) {
          cb();
        }
      });
    });
  }

  destroy(type: any = 'onCancel') {
    if (!this.isStopped && !this.closed) {
      this.next(type);
    }
  }

  on(eventType: string, cb: Function) {
    if (this._eventsQueue[eventType]) {
      this._eventsQueue[eventType].push(cb);
    } else {
      this._eventsQueue[eventType] = [cb];
    }
  }
}

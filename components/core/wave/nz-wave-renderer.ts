import { Platform } from '@angular/cdk/platform';
import { NgZone } from '@angular/core';

export class NzWaveRenderer {

  readonly waveTransitionDuration = 400;
  private _styleForPseudo: HTMLStyleElement | null;
  private _extraNode: HTMLDivElement | null;
  private _lastTime = 0;

  get waveAttributeName(): string {
    return this._insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
  }

  constructor(private _triggerElement: HTMLElement, private _ngZone: NgZone, private _insertExtraNode: boolean) {
    const platform = new Platform();
    if (platform.isBrowser) {
      this.bindTriggerEvent();
    }
  }

  onClick = (event: MouseEvent) => {
    if (
      !this._triggerElement ||
      !this._triggerElement.getAttribute ||
      this._triggerElement.getAttribute('disabled') ||
      (event.target as HTMLElement).tagName === 'INPUT' ||
      this._triggerElement.className.indexOf('disabled') >= 0) {
      return;
    }
    this.fadeOutWave();
  }

  bindTriggerEvent(): void {
    this._ngZone.runOutsideAngular(() => {
      if (this._triggerElement) {
        this._triggerElement.addEventListener('click', this.onClick, true);
      }
    });
  }

  removeTriggerEvent(): void {
    if (this._triggerElement) {
      this._triggerElement.removeEventListener('click', this.onClick, true);
    }
  }

  removeStyleAndExtraNode(): void {
    if (this._styleForPseudo && document.body.contains(this._styleForPseudo)) {
      document.body.removeChild(this._styleForPseudo);
      this._styleForPseudo = null;
    }
    if (this._insertExtraNode && this._triggerElement.contains(this._extraNode)) {
      this._triggerElement.removeChild(this._extraNode);
    }
  }

  destroy(): void {
   this.removeTriggerEvent();
   this.removeStyleAndExtraNode();
  }

  private fadeOutWave(): void {
    const node = this._triggerElement;
    const waveColor = this.getWaveColor(node);
    node.setAttribute(this.waveAttributeName, 'true');
    if (Date.now() < this._lastTime + this.waveTransitionDuration) {
      return;
    }

    if (this.isValidColor(waveColor)) {
      if (!this._styleForPseudo) {
        this._styleForPseudo = document.createElement('style');
      }

      this._styleForPseudo.innerHTML =
        `[ant-click-animating-without-extra-node]:after { border-color: ${waveColor}; }`;
      document.body.appendChild(this._styleForPseudo);
    }

    if (this._insertExtraNode) {
      if (!this._extraNode) {
        this._extraNode = document.createElement('div');
      }
      this._extraNode.className = 'ant-click-animating-node';
      node.appendChild(this._extraNode);
    }

    this._lastTime = Date.now();

    this.runTimeoutOutsideZone(() => {
      node.removeAttribute(this.waveAttributeName);
      this.removeStyleAndExtraNode();
    }, this.waveTransitionDuration);
  }

  private isValidColor(color: string): boolean {
    return color
      && color !== '#ffffff'
      && color !== 'rgb(255, 255, 255)'
      && this.isNotGrey(color)
      && !/rgba\(\d*, \d*, \d*, 0\)/.test(color)
      && color !== 'transparent';
  }

  private isNotGrey(color: string): boolean {
    const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
    if (match && match[ 1 ] && match[ 2 ] && match[ 3 ]) {
      return !(match[ 1 ] === match[ 2 ] && match[ 2 ] === match[ 3 ]);
    }
    return true;
  }

  private getWaveColor(node: HTMLElement): string {
    const nodeStyle = getComputedStyle(node);
    return nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
      nodeStyle.getPropertyValue('border-color') ||
      nodeStyle.getPropertyValue('background-color');
  }

  private runTimeoutOutsideZone(fn: () => void, delay: number): void {
    this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
}

import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PopupService {
  overlay: Overlay = null;
  overlayRef: OverlayRef = null;
  currentServiceName = null;
  serviceArray: any = [];

  constructor(public _overlay: Overlay) {
    this.overlay = this._overlay;
  }

  showPopup(
    component,
    childInjector?: Injector,
    hasBackdrop?: boolean,
    positionStrategy: GlobalPositionStrategy = this.overlay
      .position()
      .global()
      .centerVertically()
      .centerHorizontally()
  ): ComponentRef<any> {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = hasBackdrop;
    overlayConfig.positionStrategy = positionStrategy;
    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => {
      this.hidePopup();
    });
    return this.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
  }

  hidePopup(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}

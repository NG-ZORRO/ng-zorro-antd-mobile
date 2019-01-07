import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class PopupService {
  static overlay: Overlay = null;
  static overlayRef: OverlayRef = null;

  constructor(
    public _overlay: Overlay,
  ) {
    PopupService.overlay = this._overlay;
  }

  static showPopup(
    component,
    childInjector?: Injector,
    hasBackdrop?: boolean,
    positionStrategy: GlobalPositionStrategy =
    PopupService.overlay.position().global().centerVertically().centerHorizontally()): ComponentRef<any> {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = hasBackdrop;
    overlayConfig.positionStrategy = positionStrategy;
    PopupService.overlayRef = PopupService.overlay.create(overlayConfig);
    PopupService.overlayRef.backdropClick().subscribe(() => {
      PopupService.overlayRef.dispose();
    });

    return PopupService.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
  }

  static hidePopup(): void {
    if (PopupService.overlayRef) {
      PopupService.overlayRef.dispose();
    }
  }
}

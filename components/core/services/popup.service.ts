import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class PopupService {
  static viewContainerRef: ViewContainerRef = null;
  static overlay: Overlay = null;
  static overlayRef: OverlayRef = null;

  constructor(
    public _overlay: Overlay,
    public _viewContainerRef: ViewContainerRef
  ) {
    PopupService.viewContainerRef = this._viewContainerRef;
    PopupService.overlay = this._overlay;
  }

  static showPopup(component, childInjector?: Injector): void {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;
    PopupService.overlayRef = PopupService.overlay.create(overlayConfig);
    PopupService.overlayRef.backdropClick().subscribe(() => {
      PopupService.overlayRef.dispose();
    });

    PopupService.overlayRef.attach(new ComponentPortal(component, PopupService.viewContainerRef, childInjector));
  }

  static hidePopup(): void {
    if (PopupService.overlayRef) {
      PopupService.overlayRef.dispose();
    }
  }
}

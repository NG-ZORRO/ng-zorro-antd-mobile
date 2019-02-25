import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class PopupService {
  static overlay: Overlay = null;
  static overlayRef: OverlayRef = null;
  static currentServiceName = null;
  static serviceArray: any = [];

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
      PopupService.hidePopup();
    });
    PopupService.currentServiceName = component.name;
    const comRef = PopupService.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
    PopupService.serviceArray.push({key: component.name, value: PopupService.overlayRef});
    return comRef;
  }

  static hidePopup(componentName?: string): void {
    if (PopupService.serviceArray && PopupService.currentServiceName) {
      if (componentName) {
        PopupService.serviceArray.forEach((element: any, index: number) => {
          if (element.key === componentName) {
            PopupService.serviceArray[index].value.dispose();
            PopupService.serviceArray.splice(index, 1);
          }
        });
      } else {
        PopupService.serviceArray.forEach((element: any, index: number) => {
          PopupService.serviceArray[index].value.dispose();
        });
        PopupService.serviceArray = [];
      }
    }
  }
}

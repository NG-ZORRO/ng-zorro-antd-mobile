import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  ElementRef,
  OnInit,
  Injector,
  ComponentFactoryResolver,
  Renderer2,
  TemplateRef,
  ComponentFactory,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverOptions } from './popover-options.provider';
import { PopoverComponentOptions } from './popover-component-options.provider';
import * as Positioning from '../core/util/position';

@Directive({
  selector: '[Popover], [nzm-popover]',
  providers: [PopoverOptions]
})
export class PopoverDirective implements OnInit, OnChanges, OnDestroy {
  popover: ComponentRef<PopoverComponent>;
  appendToBodyElement: HTMLElement;
  private _eventListeners: Array<() => void> = [];

  @Input()
  mask: boolean;
  @Input()
  showArrow: boolean;
  @Input()
  visible: boolean;
  @Input()
  placement: string;
  @Input()
  overlay: TemplateRef<any>;
  @Output()
  onVisibleChange: EventEmitter<boolean> = new EventEmitter(true);
  @Output()
  onSelect: EventEmitter<any> = new EventEmitter();
  @Input()
  appendToBody: boolean;
  @Input()
  className: string;
  @Input()
  autoClose: boolean;

  @HostListener('click')
  togglePopover(): void {
    if (!this.popover) {
      this.showPopover();
    } else {
      this.hidePopover();
    }
  }

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _elm: ElementRef,
    private _defaultOptions: PopoverOptions,
    private _cfr: ComponentFactoryResolver,
    private _renderer: Renderer2
  ) {}

  positionMap(placement): string {
    switch (placement) {
      case 'topLeft':
        return 'top-left';
      case 'topRight':
        return 'top-right';
      case 'bottomLeft':
        return 'bottom-left';
      case 'bottomRight':
        return 'bottom-right';
      case 'leftTop':
        return 'left-top';
      case 'leftBottom':
        return 'left-bottom';
      case 'rightTop':
        return 'right-top';
      case 'rightBottom':
        return 'right-bottom';
      case 'fullScreen':
      case 'landScape':
        return 'bottom';
      default:
        return placement;
    }
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.visible && changes.visible.currentValue) {
      setTimeout(() => {
        this.showPopover();
      }, 0);
    } else {
      setTimeout(() => {
        this.hidePopover();
      }, 0);
    }
  }

  ngOnDestroy() {
    this.hidePopover();
  }

  private onDocumentClick(event: Event): void {
    if (
      this.popover &&
      !this._elm.nativeElement.contains(event.target) &&
      !this.popover.location.nativeElement.contains(event.target)
    ) {
      this.hidePopover();
    }
  }

  private showPopover(): void {
    if (!this.popover) {
      setTimeout(() => {
        this._eventListeners = [
          this._renderer.listen('document', 'click', (event: Event) => this.onDocumentClick(event)),
          this._renderer.listen('document', 'touchend', (event: Event) => this.onDocumentClick(event)),
          this._renderer.listen('window', 'resize', () => this.positionPopover())
        ];
      });

      const options = new PopoverComponentOptions();
      options.placement = this.placement;
      Object.assign(options, this._defaultOptions, {
        hidePopover: (event): void => {
          this.hidePopover();
        },
        onAfterViewInit: (): void => {
          this.positionPopover();
          const children = document.getElementsByClassName('am-popover-inner-wrapper')[0].children;
          if (children.length > 0) {
            // 首先我们检查它是否包含子节点
            for (let i = 0; i < children.length; i++) {
              children[i].id = `${i}`;
              children[i].addEventListener(
                'click',
                () => {
                  if (this.onSelect) {
                    this.onSelect.emit(children[i]);
                    if (options.autoClose) {
                      this.hidePopover();
                    }
                  }
                },
                false
              );
            }
          }
        }
      });

      const optionalParams: Array<keyof PopoverDirective> = [
        'mask',
        'showArrow',
        'placement',
        'appendToBody',
        'overlay',
        'className',
        'autoClose'
      ];
      optionalParams.forEach(param => {
        if (typeof this[param] !== 'undefined') {
          (options as any)[param] = this[param];
        }
      });

      const componentFactory: ComponentFactory<PopoverComponent> = this._cfr.resolveComponentFactory(PopoverComponent);
      const childInjector = Injector.create(
        [
          {
            provide: PopoverComponentOptions,
            useValue: options
          }
        ],
        this._viewContainerRef.parentInjector
      );
      this.popover = this._viewContainerRef.createComponent(
        componentFactory,
        this._viewContainerRef.length,
        childInjector
      );
      if (options.appendToBody) {
        this.appendToBodyElement = document.body.appendChild(this.popover.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }

  private positionPopover(): void {
    if (this.popover) {
      const popoverElement = this.popover.location.nativeElement.children[1];
      const popoverPosition = Positioning.getPositionElements(
        this._elm.nativeElement,
        popoverElement,
        this.positionMap(this.placement) || this._defaultOptions.placement,
        this.appendToBody || this._defaultOptions.appendToBody
      );
      if (this.placement === 'landScape') {
        this._renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
        this._renderer.setStyle(popoverElement, 'left', `0px`);
        this._renderer.setStyle(popoverElement, 'width', `${window.innerWidth}px`);
        this._renderer.setStyle(popoverElement, 'max-height', `${window.innerHeight - popoverPosition.height}px`);
      } else if (this.placement === 'fullScreen') {
        this._renderer.setStyle(popoverElement, 'top', `${0}px`);
        this._renderer.setStyle(popoverElement, 'left', `0px`);
        this._renderer.setStyle(popoverElement, 'width', `${window.innerWidth}px`);
        this._renderer.setStyle(popoverElement, 'max-height', `${window.innerHeight - popoverPosition.height}px`);
      } else {
        this._renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
        this._renderer.setStyle(popoverElement, 'left', `${popoverPosition.left}px`);
      }
    }
  }

  private hidePopover(): void {
    if (this.appendToBodyElement) {
      document.body.removeChild(this.appendToBodyElement);
      this.appendToBodyElement = null;
    }
    if (this.popover) {
      this.popover.destroy();
      delete this.popover;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach(fn => fn());
      this._eventListeners = [];
    }
  }
}

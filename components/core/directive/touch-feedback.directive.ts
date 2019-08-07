import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  OnInit,
  Renderer2,
  InjectionToken
} from '@angular/core';

export const INTERFACE_TOKEN = new InjectionToken<any>('InterfaceToken');

@Directive({
  selector: '[TouchFeedbackDirective]'
})
export class TouchFeedbackDirective implements OnInit {
  private _className;
  @Input() className: Array<string>;
  @Input() activeStyle = true;
  @Output() clickStart: EventEmitter<any> = new EventEmitter();
  @Output() clickEnd: EventEmitter<any> = new EventEmitter();

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  private addClass(className: string) {
    this._renderer.addClass(this._elementRef.nativeElement, className);
  }

  private removeClass(className: string) {
    this._renderer.removeClass(this._elementRef.nativeElement, className);
  }

  ngOnInit() {
    this._className = this.className;
  }

  @HostListener('touchstart')
  @HostListener('mousedown')
  touchStart() {
    if (this.activeStyle) {
      this.addClass(this._className);
      this.clickStart.emit();
    }
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  touchEnd() {
    if (this.activeStyle) {
      this.removeClass(this._className);
      this.clickEnd.emit();
    }
  }
}

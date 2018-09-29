import {
  Component,
  Input,
  HostListener,
  HostBinding,
  ViewEncapsulation,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'TouchFeedBack',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class TouchFeedBackComponent {
  @Input() activeClassName = '';
  @Input() activeStyle = true;

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  touchStart() {
    if (this.activeStyle) {
      this._render.addClass(this._ele.nativeElement, this.activeClassName);
    }
  }
  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  touchEnd() {
    if (this.activeStyle) {
      this._render.removeClass(this._ele.nativeElement, this.activeClassName);
    }
  }

  constructor(private _ele: ElementRef, private _render: Renderer2) {}
}

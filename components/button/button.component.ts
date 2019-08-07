import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  ElementRef,
  HostListener,
  EventEmitter,
  Renderer2,
  TemplateRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: '[Button], nzm-button',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './button.component.html'
})
export class ButtonComponent implements AfterViewInit {
  prefixCls: string = 'am-button';
  ngTemplate: boolean = false;
  iconType: any;

  private _el: HTMLElement;
  private _className = '';
  private _classList: any = [];
  private _type: string;
  private _size = 'large';
  private _loading = false;
  private _active = false;
  private _inline = false;
  private _disabled = false;
  private _icon: string | TemplateRef<any> = '';
  private _userAgent = (<any>navigator).userAgent || (<any>navigator).vendor || (<any>window).opera;

  @Input()
  get type(): string {
    return this._type;
  }
  @Input()
  get size(): string {
    return this._size;
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  @Input()
  get loading(): boolean {
    return this._loading;
  }
  @Input()
  get inline(): boolean {
    return this._inline;
  }
  @Input()
  get icon(): string | TemplateRef<any> {
    return this._icon;
  }
  set icon(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.ngTemplate = true;
      this._icon = value;
    } else {
      this.ngTemplate = false;
      this._icon = <string>value;
      this.setClassMap();
    }
  }
  @Input()
  set className(v) {
    this._className = this._className + ' ' + v;
    this.setClassMap();
  }
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  touchStart(event) {
    if (this._disabled) {
      return;
    }
    this._active = true;
    this.setClassMap();
  }
  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  @HostListener('touchcancel', ['$event'])
  touchEnd(event) {
    if (this._disabled) {
      return;
    }
    this._active = false;
    this.setClassMap();
  }

  @HostListener('click', ['$event'])
  click(event) {
    if (this._disabled) {
      return;
    }
    this.onClick.emit();
  }

  constructor(private _elementRef: ElementRef, private _render: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this._render.addClass(this._el, this.prefixCls);
    this._className = this._el.className;
  }

  isTemplateRef(value) {
    if (value) {
      return value instanceof TemplateRef;
    }
    return false;
  }

  set type(value: string) {
    this._type = value;
    this.setClassMap();
  }

  set disabled(value: boolean) {
    this._disabled = value;
    this.setClassMap();
  }

  set loading(value: boolean) {
    this._loading = value;
    if (this._el.querySelector('icon')) {
      const icon = this._el.querySelector('icon') as HTMLElement;
      icon.style.display = value ? '' : 'none';
    }
    this.setClassMap();
  }

  set size(value: string) {
    this._size = value;
    this.setClassMap();
  }

  set inline(value: boolean) {
    this._inline = value;
    this.setClassMap();
  }

  ngAfterViewInit() {
    if (this._el.querySelector('img')) {
      const amSize = this._size === 'small' ? 'am-icon-xxs' : 'am-icon-md';
      this._el.querySelector('img').setAttribute('class', `am-icon ${this.prefixCls}-icon ${amSize}`);
      this._render.addClass(this._el, `${this.prefixCls}-icon`);
    }
  }

  private setClassMap(): void {
    this.iconType = this._loading ? 'loading' : this._icon;
    this._classList = [
      this._type && `${this.prefixCls}-${this._type}`,
      this._size === 'small' && `${this.prefixCls}-${this._size}`,
      this._disabled && `${this.prefixCls}-disabled`,
      this._loading && `${this.prefixCls}-loading`,
      this.iconType && `${this.prefixCls}-icon`,
      this._active && `${this.prefixCls}-active`,
      this._inline && `${this.prefixCls}-inline`
    ].filter(item => {
      return !!item;
    });
    this._el.className = this._className + ' ' + this._classList.join(' ');
  }
}

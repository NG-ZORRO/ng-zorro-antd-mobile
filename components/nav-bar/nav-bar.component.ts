import { Component, Input, TemplateRef, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'Navbar, nzm-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    onLeftClick: () => {}
  };
  navbarCls = {};
  isLeftContentString: boolean = true;
  isRightContentString: boolean = true;

  private _icon: TemplateRef<any>;
  private _leftContent: string | TemplateRef<any>;
  private _rightContent: string | TemplateRef<any>;

  @Input()
  set mode(value) {
    this.defaultProps.mode = value;
    this._amNavbarLight = this.defaultProps.mode === 'light';
    this._amNavbardark = this.defaultProps.mode === 'dark';
  }
  @Input()
  get icon(): TemplateRef<any> {
    return this._icon;
  }
  set icon(value: TemplateRef<any>) {
    this._icon = value;
  }
  @Input()
  get leftContent(): string | TemplateRef<any> {
    return this._leftContent;
  }
  set leftContent(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isLeftContentString = false;
    } else {
      this.isLeftContentString = true;
    }
    this._leftContent = value;
  }
  @Input()
  get rightContent(): string | TemplateRef<any> {
    return this._rightContent;
  }
  set rightContent(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isRightContentString = false;
    } else {
      this.isRightContentString = true;
    }
    this._rightContent = value;
  }
  @Output()
  onLeftClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-navbar')
  private _amNavbar = true;
  @HostBinding('class.am-navbar-light')
  private _amNavbarLight;
  @HostBinding('class.am-navbar-dark')
  private _amNavbardark;

  constructor() {}

  click(event) {
    this.onLeftClick.emit(event);
  }
}

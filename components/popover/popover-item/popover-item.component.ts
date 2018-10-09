import {
  Component,
  AfterContentInit,
  Input,
  Output,
  ElementRef,
  TemplateRef,
  HostBinding,
  HostListener,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'PopoverItem, nzm-popover-item',
  templateUrl: './popover-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PopoverItemComponent implements AfterContentInit {
  defaultProps = {
    prefixCls: 'am-popover',
    disabled: false
  };
  isActive = false;

  private _style;
  private _icon: TemplateRef<any>;

  @Input()
  get icon(): TemplateRef<any> {
    return this._icon;
  }
  set icon(value: TemplateRef<any>) {
    this._icon = value;
  }
  @Input()
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
  }
  @Input()
  set disabled(value) {
    this.defaultProps.disabled = value;
  }
  @Output()
  select: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.am-popover-item')
  amPopoverItem: boolean = true;
  @HostBinding('class.am-popover-item-active')
  get amPopoverItemActive(): boolean {
    return this.isActive;
  }
  @HostBinding('class.am-popover-item-disabled')
  get amPopoverItemDisabled(): boolean {
    return this.defaultProps.disabled;
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  touchStart(e) {
    this.select.emit();
    this.isActive = true;
  }

  constructor(private _elementRef: ElementRef) {}

  ngAfterContentInit() {}
}

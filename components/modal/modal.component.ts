import {
  Component,
  HostListener,
  Input,
  Output,
  TemplateRef,
  EventEmitter,
  ViewEncapsulation,
  forwardRef,
  Type,
  OnDestroy
} from '@angular/core';
import { ModalOptions } from './modal-options.provider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    ModalOptions,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModalComponent),
      multi: true
    }
  ]
})
export class ModalComponent implements ControlValueAccessor, OnDestroy {
  autoFocus = { focus: true, date: new Date() };
  transitionName: string = '';
  maskTransitionName: string = '';
  wrapCls: object = {};
  cls: object = {};
  btnGroupClass: object = {};
  data = {
    text: '',
    password: ''
  };

  onChanged: (visiable: boolean) => {};
  onTouched: () => {};

  @Input()
  get title(): string | TemplateRef<any> {
    return this.option.title;
  }
  set title(value: string | TemplateRef<any>) {
    this.option.title = value;
  }

  @Input()
  set closable(value: boolean) {
    this.option.closable = value;
  }
  @Input()
  set maskClosable(value: boolean) {
    this.option.maskClosable = value;
  }
  @Input()
  set popup(value: boolean) {
    this.option.popup = value;
    this.setClassMap();
  }
  @Input()
  set animationType(value: string) {
    this.option.animationType = value;
    this.setClassMap();
  }
  @Input()
  set transparent(value: boolean) {
    this.option.transparent = value;
    this.setClassMap();
  }
  @Input()
  set footer(value: Array<any>) {
    this.option.footer = value;
  }
  @Input()
  set platform(value: string) {
    this.option.platform = value;
    this.setClassMap();
  }
  @Input()
  set className(value: string) {
    this.option.className = value;
    this.setClassMap();
  }
  @Input()
  set wrapClassName(value: string) {
    this.option.wrapClassName = value;
    this.setClassMap();
  }
  @Input()
  set actions(value: Array<any>) {
    this.option.footer = value;
    this.setClassMap();
  }
  @Input()
  set defaultValue(value: Array<string>) {
    this.option.defaultValue = value !== undefined ? value : ['', ''];
  }
  @Input()
  set type(value: string) {
    this.option.type = value;
  }
  @Input()
  set placeholders(value: Array<string>) {
    this.option.placeholders = value;
  }
  @Input()
  set operation(value: boolean) {
    this.option.operation = value;
    this.setClassMap();
  }
  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  panend(event) {
    if (this.option.closable || this.option.maskClosable  || this.option.popup) {
      if (
        (event && event.target && event.target.getAttribute('role') === 'dialog') ||
        event.target.getAttribute('role') === 'close'
      ) {
        if (this.option.close) {
          this.option.close();
        } else {
          this.onClose.emit();
          this.leaveAnimation();
        }
      }
    }
  }

  constructor(public option: ModalOptions) { }


  isNonEmptyString(value: {}): boolean {
    return typeof value === 'string' && value !== '';
  }

  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }

  isComponent(value: {}): boolean {
    return value instanceof Type;
  }

  isNoTitle(value: string | TemplateRef<any>) {
    return value === '' || value === null || value === undefined;
  }

  setTransitionName(visible: boolean) {
    if (!visible) {
      this.leaveAnimation();
    } else {
      if (this.option.animated) {
        if (this.option.transparent) {
          if (this.setActiveName(this.option.transitionName)) {
            this.transitionName = this.setActiveName(this.option.transitionName);
            this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
          } else {
            this.transitionName = this.maskTransitionName = this.setActiveName('am-fade');
          }
        } else {
          if (this.setActiveName(this.option.transitionName)) {
            this.transitionName = this.setActiveName(this.option.transitionName);
            this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
          } else {
            this.transitionName = this.maskTransitionName = this.setActiveName('am-slide-up');
          }
        }
        if (this.option.popup) {
          this.transitionName =
            this.option.animationType === 'slide-up'
              ? this.setActiveName('am-slide-up')
              : this.setActiveName('am-slide-down');
          this.maskTransitionName = this.setActiveName('am-fade');
        }
      }
      this.setClassMap();
    }
  }

  setActiveName(name: string) {
    return name.length > 0 ? `${name}-enter ${name}-enter-active` : null;
  }

  setLeaveActiveName(name: string) {
    return name.length > 0 ? `${name}-leave ${name}-leave-active` : null;
  }

  setClassMap() {
    this.wrapCls = {
      [this.option.wrapClassName]: true,
      [`${this.option.prefixCls}-wrap-popup`]: this.option.popup
    };

    this.cls = {
      [this.option.className]: true,
      [`${this.option.prefixCls}-transparent`]: this.option.transparent,
      [`${this.option.prefixCls}-popup`]: this.option.popup,
      [`${this.option.prefixCls}-popup-${this.option.animationType}`]: this.option.popup && this.option.animationType,
      [`${this.option.prefixCls}-android`]: this.option.platform === 'android'
    };

    this.btnGroupClass = {
      [`${this.option.prefixCls}-button-group-${
        this.option.footer.length === 2 && !this.option.operation ? 'h' : 'v'
        }`]: true,
      [`${this.option.prefixCls}-button-group-${this.option.operation ? 'operation' : 'normal'}`]: true
    };
  }

  inputChange(type: string, value: string) {
    this.data[type] = value;
  }

  leaveAnimation() {
    if (this.option.animated) {
      if (this.option.transparent) {
        if (this.setLeaveActiveName(this.option.transitionName)) {
          this.transitionName = this.setLeaveActiveName(this.option.transitionName);
          this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
        } else {
          this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-fade');
        }
      } else {
        if (this.setLeaveActiveName(this.option.transitionName)) {
          this.transitionName = this.setLeaveActiveName(this.option.transitionName);
          this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
        } else {
          this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-slide-up');
        }
      }
      if (this.option.popup) {
        this.transitionName =
          this.option.animationType === 'slide-up'
            ? this.setLeaveActiveName('am-slide-up')
            : this.setLeaveActiveName('am-slide-down');
        this.maskTransitionName = this.setLeaveActiveName('am-fade');
      }
    }
    setTimeout(() => {
      this.option.visible = false;
      this.onChanged(this.option.visible);
    }, 200);
  }

  writeValue(value: boolean): void {
    if (value) {
      this.option.visible = value;
    }
    this.setTransitionName(value);
  }

  registerOnChange(fn: (_: boolean) => {}): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  ngOnDestroy(): void {
    if (this.option.close) {
      this.option.close();
    } else {
      this.onClose.emit();
      this.leaveAnimation();
    }
  }
}

@Component({
  selector: 'ModalService',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ModalServiceComponent extends ModalComponent {
  constructor(public option: ModalOptions) {
    super(option);
    this.setTransitionName(this.option.visible);
  }
}

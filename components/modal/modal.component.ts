import { Component, OnInit, Input, Output, TemplateRef, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ModalOptions } from './modal-options.provider';
const classnames = require('classnames');

@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [NgSwitch, NgSwitchCase, ModalOptions]
})
export class ModalComponent implements OnInit {
  defaultProps = {
    visible: false,
    prefixCls: 'am-modal',
    transparent: false,
    popup: false,
    animationType: 'slide-down',
    animated: true,
    style: {},
    footer: [],
    closable: false,
    maskClosable: false,
    operation: false,
    platform: 'ios',
    className: '',
    wrapClassName: '',
    message: '',
    actions: [],
    callbackOrActions: [],
    type: '',
    defaultValue: '',
    placeholders: []
  };
  value: string = '';
  passwordValue: string = '';
  autoFocus = { focus: true, date: new Date() };
  transitionName: string = '';
  maskTransitionName: string = '';
  isTitleString: boolean = true;
  isMessageString: boolean = true;
  wrapCls = {};
  cls = {};
  btnGroupClass = {};
  data = {};

  private _title: string | TemplateRef<any> = '';
  private _message: string | TemplateRef<any> = '';
  private _focus: boolean = true;

  @ViewChild('inputElement')
  inputElementRef;

  @Input()
  get title(): string | TemplateRef<any> {
    return this._title;
  }
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isTitleString = false;
    } else {
      this.isTitleString = true;
    }
    this._title = value;
  }
  @Input()
  set visible(value) {
    if (!value) {
      this.leaveAnimation();
    } else {
      this.defaultProps.visible = value;
      if (this.defaultProps.animated) {
        if (this.defaultProps.transparent) {
          this.transitionName = this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
        } else {
          this.transitionName = this.maskTransitionName = 'am-slide-up-enter am-slide-up-enter-active';
        }
        if (this.defaultProps.popup) {
          this.transitionName =
            this.defaultProps.animationType === 'slide-up'
              ? 'am-slide-up-enter am-slide-up-enter-active'
              : 'am-slide-down-enter am-slide-down-enter-active';
          this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
        }
      }
      this.setClassMap();
    }
  }
  @Input()
  set closable(value) {
    this.defaultProps.closable = value;
  }
  @Input()
  set maskClosable(value) {
    this.defaultProps.maskClosable = value;
  }
  @Input()
  set popup(value) {
    this.defaultProps.popup = value;
    this.setClassMap();
  }
  @Input()
  set animationType(value) {
    this.defaultProps.animationType = value;
    this.setClassMap();
  }
  @Input()
  set transparent(value) {
    this.defaultProps.transparent = value;
    this.setClassMap();
  }
  @Input()
  set footer(value) {
    this.defaultProps.footer = value;
  }
  @Input()
  set platform(value) {
    this.defaultProps.platform = value;
    this.setClassMap();
  }
  @Input()
  get message(): string | TemplateRef<any> {
    return this._message;
  }
  set message(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isMessageString = false;
    } else {
      this.isMessageString = true;
    }
    this._message = value;
  }
  @Input()
  set className(value) {
    this.defaultProps.className = value;
    this.setClassMap();
  }
  @Input()
  set actions(value) {
    this.defaultProps.footer = value;
    this.setClassMap();
  }
  @Input()
  set defaultValue(value) {
    this.defaultProps.defaultValue = value !== undefined ? value : '';
  }
  @Input()
  set type(value) {
    this.defaultProps.type = value;
  }
  @Input()
  set placeholders(value: Array<string>) {
    this.defaultProps.placeholders = value;
  }
  @Input()
  set operation(value) {
    this.defaultProps.operation = value;
    this.setClassMap();
  }
  @Input()
  set focus(value) {
    if (value) {
      this._focus = value;
    }
  }
  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  constructor(private _option: ModalOptions) {}

  setClassMap() {
    this.wrapCls = classnames(this.defaultProps.wrapClassName, {
      [`${this.defaultProps.prefixCls}-wrap-popup`]: this.defaultProps.popup
    });

    this.cls = classnames(this.defaultProps.className, {
      [`${this.defaultProps.prefixCls}-transparent`]: this.defaultProps.transparent,
      [`${this.defaultProps.prefixCls}-popup`]: this.defaultProps.popup,
      [`${this.defaultProps.prefixCls}-popup-${this.defaultProps.animationType}`]:
        this.defaultProps.popup && this.defaultProps.animationType,
      [`${this.defaultProps.prefixCls}-android`]: this.defaultProps.platform === 'android'
    });

    this.btnGroupClass = {
      [`${this.defaultProps.prefixCls}-button-group-${
        this.defaultProps.footer.length === 2 && !this.defaultProps.operation ? 'h' : 'v'
      }`]: true,
      [`${this.defaultProps.prefixCls}-button-group-${this.defaultProps.operation ? 'operation' : 'normal'}`]: true
    };
  }

  inputChange(type, value) {
    this.data[type] = value;
  }

  leaveAnimation() {
    if (this.defaultProps.animated) {
      if (this.defaultProps.transparent) {
        this.transitionName = this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
      } else {
        this.transitionName = this.maskTransitionName = 'am-slide-up-leave am-slide-up-leave-active';
      }
      if (this.defaultProps.popup) {
        this.transitionName =
          this.defaultProps.animationType === 'slide-up'
            ? 'am-slide-up-leave am-slide-up-leave-active'
            : 'am-slide-down-leave am-slide-down-leave-active';
        this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
      }
    }
    setTimeout(() => {
      this.defaultProps.visible = false;
    }, 200);
  }

  close() {
    if ((!this.defaultProps.closable || !this.defaultProps.maskClosable) && !this.defaultProps.popup) {
      return;
    }
    if (this._option.close) {
      this._option.close();
    } else {
      this.leaveAnimation();
      this.onClose.emit();
    }
  }

  ngOnInit() {
    this.setClassMap();
  }
}

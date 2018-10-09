import {
  Component,
  OnInit,
  forwardRef,
  Input,
  ElementRef,
  TemplateRef,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Step, nzm-step',
  templateUrl: './step.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step),
      multi: true
    }
  ]
})
export class Step implements OnInit {
  prefixCls = 'am-steps';
  stepItemCls = {};
  iconCls: object;
  tailContent: string;
  stepNumber: number;
  isIconString: boolean = true;

  private _status: StatusEnum;
  private _title: string;
  private _description: string;
  private _icon: string | TemplateRef<any>;

  @Input()
  get status(): StatusEnum {
    return this._status;
  }
  set status(value: StatusEnum) {
    if (value) {
      this._status = value;
      this.setClass();
    }
  }
  @Input()
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  @Input()
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  @Input()
  get icon(): string | TemplateRef<any> {
    return this._icon;
  }
  set icon(value: string | TemplateRef<any>) {
    if (value) {
      if (typeof value !== 'string') {
        this.isIconString = false;
      }
      this._icon = value;
      this.setClass();
    }
  }

  @HostBinding('class.am-steps-item')
  clsStepItem: boolean = true;

  constructor(private _el: ElementRef) {}

  setClass() {
    this.iconCls = {
      [`${this.prefixCls}-icon`]: true
    };
    this.stepItemCls = Object.assign(this.stepItemCls,
      {
        [`${this.prefixCls}-item-${this.status}`]: true,
        [`${this.prefixCls}-item-custom`]: this.icon
      }
    );
  }

  ngOnInit() {
  }
}

export enum StatusEnum {
  WAIT = 'wait',
  PROCESS = 'process',
  FINISH = 'finish',
  ERROR = 'error'
}
export enum DirectionEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

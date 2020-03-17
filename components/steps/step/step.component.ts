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
      useExisting: forwardRef(() => StepComponent),
      multi: true
    }
  ]
})
export class StepComponent implements OnInit {
  prefixCls = 'am-steps';
  stepItemCls = {};
  iconCls: object;
  tailContent: string;
  stepNumber: number;
  isIconString: boolean = true;
  iconSize: string;

  private _status: StepStatusEnum;
  private _icon: string | TemplateRef<any>;

  @Input()
  get status(): StepStatusEnum {
    return this._status;
  }
  set status(value: StepStatusEnum) {
    if (value) {
      this._status = value;
      this.setClass();
    }
  }
  @Input()
  title: string | TemplateRef<any> = null;
  @Input()
 description: string | TemplateRef<any> = null;
  @Input()
  get icon(): string | TemplateRef<any> {
    return this._icon;
  }
  set icon(value: string | TemplateRef<any>) {
    if (value) {
      this._icon = value;
      this.setClass();
    }
  }

  @HostBinding('class.am-steps-item')
  clsStepItem: boolean = true;

  constructor(private _el: ElementRef) {}

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }

  setClass() {
    this.iconCls = {
      [`${this.prefixCls}-icon`]: true
    };
    this.stepItemCls = Object.assign(this.stepItemCls, {
      [`${this.prefixCls}-item-${this.status}`]: true,
      [`${this.prefixCls}-item-custom`]: this.icon
    });
  }

  ngOnInit() {}
}

export enum StepStatusEnum {
  WAIT = 'wait',
  PROCESS = 'process',
  FINISH = 'finish',
  ERROR = 'error'
}
export enum StepDirectionEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

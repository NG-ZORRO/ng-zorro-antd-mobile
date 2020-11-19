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
  iconCls: object = {
    [`${this.prefixCls}-icon`]: true
  };
  tailContent: string;
  stepNumber: number;
  isIconString: boolean = true;
  iconSize: string;
  outStatus = 'process';

  private _status: StepStatusEnum;
  private _icon: string | TemplateRef<any>;
  private isCustomStatus = false;
  private isCustomIcon = false;

  @Input()
  get status(): StepStatusEnum {
    return this._status;
  }
  set status(value: StepStatusEnum) {
    if (value) {
      this._status = value;
      this.isCustomStatus = true;
      this.setIcon();
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
      this.isCustomIcon = true;
      this.setClass();
    }
  }

  set currentIndex(current: number) {
    this._currentIndex = current;
    if (!this.isCustomStatus) {
      this._status = current > this.stepNumber ? StepStatusEnum.FINISH : current === this.stepNumber ?
        this.outStatus || ('' as any) : StepStatusEnum.WAIT;
      this.setIcon();
      this.setClass();
    }
  }

  private _currentIndex = 0;

  @HostBinding('class.am-steps-item')
  clsStepItem: boolean = true;

  constructor(private _el: ElementRef) { }

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }

  setClass() {
    this.stepItemCls = {
      [`${this.prefixCls}-item-${this.status}`]: true,
      [`${this.prefixCls}-item-custom`]: this.isCustomIcon || (this.icon && this._currentIndex !== this.stepNumber)
    };
  }

  setIcon() {
    if (!this.isCustomIcon) {
      switch (this._status) {
        case StepStatusEnum.FINISH:
          this._icon = 'check-circle-o';
          break;
        case StepStatusEnum.ERROR:
          this._icon = 'cross-circle-o';
          break;
        case StepStatusEnum.WAIT:
          this._icon = 'ellipsis';
          break;
        default:
          break;
      }
    }
  }

  ngOnInit() { }
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

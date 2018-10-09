import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
  Renderer2,
  ElementRef
} from '@angular/core';
import { StatusEnum, DirectionEnum } from './step/step.component';
import { Step } from './step/step.component';

@Component({
  selector: 'Steps,nzm-steps',
  templateUrl: './steps.component.html'
})
export class Steps implements OnInit, AfterContentInit {
  prefixCls: string = 'am-steps';

  private _current: number = 0;
  private _size: string;
  private _status: StatusEnum = StatusEnum.PROCESS;
  private _direction: DirectionEnum = DirectionEnum.VERTICAL;
  private _stepsCls: object;

  @ContentChildren(Step)
  stepItems: QueryList<Step>;

  @Input()
  set current(value) {
    if (value >= 0) {
      this._current = value;
    }
  }
  @Input()
  set size(value) {
    this._size = value;
    this.setCls();
  }
  @Input()
  set status(value: StatusEnum) {
    this._status = value;
    if (this.stepItems) {
      this.setStepStyle();
    }
  }
  @Input()
  set direction(value: DirectionEnum) {
    this._direction = value;
    this.setCls();
  }

  @HostBinding('class.am-steps')
  clsSteps: boolean = true;
  @HostBinding('class.am-steps-small')
  clsStepsSmall: boolean;
  @HostBinding('class.am-steps-label-vertical')
  clsStepsLabelVtl: boolean;
  @HostBinding('class.am-steps-vertical')
  clsStepsVtl: boolean;
  @HostBinding('class.am-steps-horizontal')
  clsStepsHztl: boolean;

  constructor(private _elf: ElementRef, private _render: Renderer2) {}

  setStepStyle() {
    const itemCount = this.stepItems.length;
    const itemArr = this.stepItems['_results'];
    for (let index = 0; index < itemCount; index++) {
      const step = itemArr[index];
      step.stepNumber = index + 1;
      if (index < itemCount - 1 && itemArr[index + 1].status === StatusEnum.ERROR) {
        step.stepItemCls = step.stepItemCls
          ? Object.assign(step.stepItemCls, { 'error-tail': true })
          : { 'error-tail': true };
      }
      let icon = step.icon;
      if (!step.status) {
        if (index === this._current) {
          step.status = this._status;
        } else if (index < this._current) {
          step.status = StatusEnum.FINISH;
        } else {
          step.status = StatusEnum.WAIT;
        }
      }
      if (!icon) {
        if (index < this._current) {
          icon = 'check-circle-o';
        } else if (index > this._current) {
          icon = 'ellipsis';
          step.stepItemCls = step.stepItemCls
            ? Object.assign(step.stepItemCls, { 'ellipsis-item': true })
            : { 'ellipsis-item': true };
        }
        if ((this._status === StatusEnum.ERROR && index === this._current) || step.status === StatusEnum.ERROR) {
          icon = 'cross-circle-o';
        }
      }
      step.icon = icon;
      step.iconSize = this._size === 'small' ? (this._status === StatusEnum.WAIT ? 'xxs' : 'xs') : 'md';
      step.setClass();
    }
  }

  setCls() {
    if (this._direction === DirectionEnum.HORIZONTAL) {
      this.clsStepsLabelVtl = true;
      this.clsStepsHztl = true;
      this.clsStepsVtl = false;
    } else if (this._direction === DirectionEnum.VERTICAL) {
      this.clsStepsVtl = true;
      this.clsStepsHztl = false;
    }
    if (this._size === 'small') {
      this.clsStepsSmall = true;
    } else {
      this.clsStepsSmall = false;
    }
  }

  ngOnInit() {
    this.setCls();
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.setStepStyle();
    }, 0);
  }
}

import { Component, Input, Output, EventEmitter, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'Result, nzm-result',
  templateUrl: './result.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent {
  prefixCls: string = 'am-result';
  isTitleString: boolean = true;
  isMessageString: boolean = true;

  private _title: string | TemplateRef<any>;
  private _message: string | TemplateRef<any>;

  @Input()
  get title(): string | TemplateRef<any> {
    return this._title;
  }
  set title(value: string | TemplateRef<any>) {
    if (this.isTemplateRef(value)) {
      this.isTitleString = false;
    } else {
      this.isTitleString = true;
    }
    this._title = value;
  }
  @Input()
  imgUrl: string;
  @Input()
  buttonText: string;
  @Input()
  buttonType: string;
  @Input()
  img: TemplateRef<any>;
  @Input()
  get message(): string | TemplateRef<any> {
    return this._message;
  }
  set message(value: string | TemplateRef<any>) {
    if (this.isTemplateRef(value)) {
      this.isMessageString = false;
    } else {
      this.isMessageString = true;
    }
    this._message = value;
  }
  @Output()
  onButtonClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('attr.role')
  role: string = 'alert';
  @HostBinding('class.am-result')
  amResult: boolean = true;

  constructor() {}

  buttonClick(event) {
    this.onButtonClick.emit(event);
  }

  isTemplateRef(value) {
    if (value) {
      return value instanceof TemplateRef;
    }
    return false;
  }
}

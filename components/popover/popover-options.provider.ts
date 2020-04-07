import { Injectable } from '@angular/core';
export interface PopoverOptionsInterface {
  mask?: boolean;
  visible?: boolean;
  placement?: string;
  appendToBody?: boolean;
  className?: string;
  autoClose?: boolean;
}

@Injectable()
export class PopoverOptions implements PopoverOptionsInterface {
  showArrow: boolean = false;
  mask: boolean = false;
  placement: string = 'bottom';
  appendToBody: boolean = false;
  className: string = '';
  autoClose: boolean = true;
}

export interface PopoverOptionsInterface {
  mask?: boolean;
  visible?: boolean;
  placement?: string;
  appendToBody?: boolean;
  className?: string;
  autoClose?: boolean;
}

export class PopoverOptions implements PopoverOptionsInterface {
  showArrow: boolean = false;
  mask: boolean = false;
  placement: string = 'bottom';
  appendToBody: boolean = false;
  className: string = '';
  autoClose: boolean = true;
}

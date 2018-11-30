export interface PopoverOptionsInterface {
  mask?: boolean;
  visible?: boolean;
  placement?: string;
  appendToBody?: boolean;
  customClass?: string;
}

export class PopoverOptions implements PopoverOptionsInterface {
  showArrow: boolean = false;
  mask: boolean = false;
  placement: string = 'bottom';
  appendToBody: boolean = false;
  customClass: string = '';
}

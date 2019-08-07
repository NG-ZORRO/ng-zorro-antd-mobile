import { Injectable, TemplateRef } from '@angular/core';
import { PopoverOptions } from './popover-options.provider';

@Injectable()
export class PopoverComponentOptions extends PopoverOptions {
  onAfterViewInit: () => void;
  hidePopover: () => void;
  overlay: TemplateRef<any>;
}

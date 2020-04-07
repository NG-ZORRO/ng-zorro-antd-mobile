import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover.component';
import { PopoverOptions } from './popover-options.provider';

export function PopoverOptionsFactory(userOptions: PopoverOptions): PopoverOptions {
  const options: PopoverOptions = new PopoverOptions();
  Object.assign(options, userOptions);
  return options;
}

@NgModule({
  declarations: [PopoverDirective, PopoverComponent],
  imports: [CommonModule],
  exports: [PopoverDirective, PopoverComponent]
})
export class PopoverModule {}

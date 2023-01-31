import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { WhiteSpaceModule } from 'ng-zorro-antd-mobile/white-space';

@NgModule({
  imports: [CommonModule, WhiteSpaceModule],
  declarations: [AccordionComponent, AccordionGroupComponent],
  exports: [AccordionComponent, AccordionGroupComponent]
})
export class AccordionModule {}

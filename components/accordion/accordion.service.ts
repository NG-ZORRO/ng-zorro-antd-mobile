import { Injectable } from '@angular/core';

@Injectable()
export class AccordionService {
  component;
  accordion: boolean = false;
  getComponent(component) {
    this.accordion = component.accordion;
    this.component = component;
  }
}

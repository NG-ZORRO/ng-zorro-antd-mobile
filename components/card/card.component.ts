import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'Card, nzm-card',
  templateUrl: './card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input()
  full: boolean = false;

  @HostBinding('class.am-card')
  cardWrapper: boolean = true;
  @HostBinding('class.am-card-full')
  get cardFull(): boolean {
    return this.full;
  }

  constructor() {}
}

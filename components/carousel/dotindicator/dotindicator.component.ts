import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'DotIndicator, nzm-dot-indicator',
  templateUrl: './dotindicator.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DotIndicatorComponent {
  items: { active: boolean }[] = [];

  private _page = 0;
  private _pageCount = 0;

  @Input()
  set page(p: number) {
    this._page = p;
    this.updateSelected();
  }
  @Input()
  set pageCount(p: number) {
    this._pageCount = p || 0;
    this.updateItems();
  }
  @Input()
  dotStyle: object = {};
  @Input()
  dotActiveStyle: object = {};
  @Input()
  dotColor = 'white';

  @HostBinding('class.dot-indicator')
  dotIndicator: boolean = true;

  private updateItems() {
    this.items = new Array(this._pageCount);
    for (let i = 0; i < this._pageCount; i++) {
      this.items[i] = { active: i == this._page };
    }
  }

  private updateSelected() {
    if (this.items.length != this._pageCount) {
      return this.updateItems();
    }
    if (this.items.length == 0) {
      return;
    }
    for (let i = 0; i < this._pageCount; i++) {
      this.items[i].active = false;
    }
    this.items[this._page].active = true;
  }
}

import { Component, OnInit, Input, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[tab-pane-body]',
  templateUrl: './tab-pane-body.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TabPaneBodyComponent implements OnInit {
  private _prerender: boolean = false;

  @Input() active: boolean = false;
  @Input() loaded: boolean = false;
  @Input() content: TemplateRef<void>;
  @Input()
  get prerender(): boolean {
    return this._prerender;
  }
  set prerender(value: boolean) {
    this._prerender = value;
    if (value) {
      this.loaded = true;
    }
  }

  @HostBinding('class.am-tabs-pane-wrap')
  paneWrap: boolean = true;
  @HostBinding('class.am-tabs-pane-wrap-active')
  get wrapActive(): boolean {
    return this.active;
  }
  @HostBinding('class.am-tabs-pane-wrap-inactive')
  get wrapInactive(): boolean {
    return !this.active;
  }

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[tab-pane-body]',
  templateUrl: './tab-pane-body.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TabPaneBody implements OnInit {

  @Input() active: boolean = false;
  @Input() content: TemplateRef<void>;

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

  constructor() { }

  ngOnInit() { }

}

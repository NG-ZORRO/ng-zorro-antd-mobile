import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'TabPane, nzm-tab-pane',
  templateUrl: './tab-pane.component.html'
})
export class TabPaneComponent {
  public isTitleString: boolean = true;

  private _title: string | TemplateRef<void>;

  @ViewChild('content', { static: true }) content: TemplateRef<void>;

  @Input()
  get title(): string | TemplateRef<void> {
    return this._title;
  }
  set title(value: string | TemplateRef<void>) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }

  constructor() {}
}

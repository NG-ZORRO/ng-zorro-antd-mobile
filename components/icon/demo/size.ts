import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'demo-icon-size',
  template: `
    <Grid [data]="data" [columnNum]="5" [activeStyle]="false"></Grid>
  `
})
export class DemoIconSizeComponent {
  size = ['xxs', 'xs', 'sm', 'md', 'lg'];

  data = this.size.map(item => ({
    icon: 'search',
    text: item,
    size: item
  }));
}

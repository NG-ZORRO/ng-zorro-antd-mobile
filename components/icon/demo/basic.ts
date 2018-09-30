import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'demo-icon-basic',
  template: `
    <Grid [data]="data" [columnNum]="3"></Grid>
  `
})
export class DemoIconBasicComponent {
  list = [
    'check-circle',
    'check',
    'check-circle-o',
    'cross-circle',
    'cross',
    'cross-circle-o',
    'up',
    'down',
    'left',
    'right',
    'ellipsis',
    'loading'
  ];

  data = this.list.map(item => ({
    icon: item,
    text: item
  }));
}

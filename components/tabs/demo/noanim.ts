import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-noanim',
  template: `
    <Tabs [activeTab]="index"
          [page]="3"
          [useOnPan]="false"
          [animated]="false"
          (onChange)="onChange($event)"
          (onTabClick)="onTabClick($event)"
    >
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="'First Tab'"
      >
        <div>
          Content of first tab
        </div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="'Second Tab'"
      >
        <div>
          Content of second tab
        </div>
        </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="'Third Tab'"
      >
        <div>
          Content of third tab
        </div>
      </TabPane>
    </Tabs>
  `,
  styles: [
    `
      /deep/ .am-badge {
        text-align: right;
      }
    `
  ]
})
export class DemoTabsNoanimComponent {
  index = 0;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }
}

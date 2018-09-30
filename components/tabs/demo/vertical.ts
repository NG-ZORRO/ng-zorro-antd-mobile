import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-vertical',
  template: `
  <Tabs style="height: 200px;"
        [activeTab]="index"
        [page]="3"
        [tabBarPosition]="'left'"
        [tabDirection]="'vertical'"
        (onChange)="onChange($event)"
        (onTabClick)="onTabClick($event)"
  >
  <TabPane style="display: flex; height: 250px; width: 100%; background-color: white;align-items: center;justify-content: center;"
           [title]="'First Tab'"
  >
  <div>
    Content of first tab
  </div>
  </TabPane>
  <TabPane style="display: flex; height: 250px; width: 100%; background-color: white;align-items: center;justify-content: center;"
           [title]="'Second Tab'"
  >
  <div>
    Content of second tab
  </div>
  </TabPane>
  <TabPane style="display: flex; height: 250px; width: 100%; background-color: white;align-items: center;justify-content: center;"
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
export class DemoTabsVerticalComponent {
  index = 0;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-fixedheight',
  template: `
    <Tabs style="height: 200px;"
          [activeTab]="index"
          [page]="3"
          (onChange)="onChange($event)"
          (onTabClick)="onTabClick($event)"
    >
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="'First Tab'"
      >
        <div style="height: 250px; width: 100%; line-height: 200px;">
          Content of first tab
        </div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="'Second Tab'"
      >
        <div style="height: 250px; width: 100%; line-height: 200px;">
          Content of second tab
        </div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="'Third Tab'"
      >
        <div style="height: 250px; width: 100%; line-height: 200px;">
          Content of third tab
        </div>
      </TabPane>
    </Tabs>
  `
})
export class DemoTabsFixedheightComponent {
  index = 0;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }
}

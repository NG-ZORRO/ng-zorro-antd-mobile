import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-multitabs',
  template: `
  <Tabs [activeTab]="index"
        [page]="3"
        (onChange)="selectCard($event)"
        (onTabClick)="selectCard($event)"
  >
    <TabPane style="display: flex; background-color: #fff; height: 150px;justify-content: center;align-items: center" [title]="'1st Tab'">
      <div style="height: 100px; width: 100%">Content of 1 tab</div>
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'2nd Tab'"
    >
      Content of 2 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'3rd Tab'"
    >
      Content of 3 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'4th Tab'"
    >
      Content of 4 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'5th Tab'"
    >
    Content of 5 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'6th Tab'"
    >
      Content of 6 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'7th Tab'"
    >
      Content of 7 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'8th Tab'"
    >
      Content of 8 tab
    </TabPane>
    <TabPane style="display: flex; background-color: #fff; align-items: center;justify-content: center;height: 150px;"
             [title]="'9th Tab'"
    >
      Content of 9 tab
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
export class DemoTabsMultitabsComponent {
  index = 0;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }
}

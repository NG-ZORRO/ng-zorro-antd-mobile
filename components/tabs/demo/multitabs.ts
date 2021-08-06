import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-multitabs',
  template: `
    <Tabs
      [page]="3"
      [activeTab]="index"
      [prerenderingSiblingsNumber]="2"
      (onChange)="selectCard($event)"
      (onTabClick)="selectCard($event)"
    >
      <TabPane [title]="'1st Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 1st tab
        </div>
      </TabPane>
      <TabPane [title]="'2nd Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 2nd tab
        </div>
      </TabPane>
      <TabPane [title]="'3rd Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 3rd tab
        </div>
      </TabPane>
      <TabPane [title]="'4th Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 4th tab
        </div>
      </TabPane>
      <TabPane [title]="'5th Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 5th tab
        </div>
      </TabPane>
      <TabPane [title]="'6th Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 6th tab
        </div>
      </TabPane>
      <TabPane [title]="'7th Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 7th tab
        </div>
      </TabPane>
      <TabPane [title]="'8th Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 8th tab
        </div>
      </TabPane>
      <TabPane [title]="'9th Tab'">
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of 9th tab
        </div>
      </TabPane>
    </Tabs>
  `,
  styles: [
    `
      :host ::ng-deep .am-badge {
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

import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-dynamic',
  template: `
    <Tabs
      [page]="5"
      [useOnPan]="true"
      [swipeable]="true"
      [activeTab]="activeTabIndex"
      [tabBarActiveTextColor]="'#1890ff'"
      (onChange)="onChange($event)"
      (onTabClick)="onTabClick($event)"
    >
      <TabPane *ngFor="let tabListItem of tabList; let i = index" [title]="tabListItem.title">
        <div
          style="display: block; padding: 40px; text-align: center; align-items: center;justify-content: center;height: 150px;background-color: #fff"
        >
          <div>{{ tabListItem.content }}</div>
          <div Button [type]="'primary'" (onClick)="onClick()">Add Pane +</div>
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
export class DemoTabsDynamicComponent {
  flag = true;
  activeTabIndex = 0;

  tabList: any[] = [
    {
      title: '1st Tab',
      content: '1st Tab Content'
    },
    {
      title: '2nd Tab',
      content: '2nd Tab Content'
    },
    {
      title: '3rd Tab',
      content: '3rd Tab Content'
    }
  ];

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.activeTabIndex = 0;
  }

  onClick() {
    this.tabList.push({
      title: '' + (this.tabList.length + 1) + 'th Tab',
      content: '' + (this.tabList.length + 1) + 'th Tab Content'
    });
  }
}

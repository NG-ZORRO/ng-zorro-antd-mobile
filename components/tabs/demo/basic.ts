import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-basic',
  template: `
    <Tabs
      [page]="3"
      [useOnPan]="true"
      [swipeable]="true"
      [activeTab]="index"
      [tabBarActiveTextColor]="'#1890ff'"
      (onChange)="onChange($event)"
      (onTabClick)="onTabClick($event)"
    >
      <TabPane [title]="titleTemplate">
        <ng-template #titleTemplate>
          <Badge [text]="3">
            <div>First Tab</div>
          </Badge>
        </ng-template>
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of first tab
        </div>
      </TabPane>
      <TabPane [title]="titleTemplate1">
        <ng-template #titleTemplate1>
          <Badge [text]="'今日(20)'">
            <div>Second Tab</div>
          </Badge>
        </ng-template>
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of second tab
        </div>
      </TabPane>
      <TabPane [title]="titleTemplate2">
        <ng-template #titleTemplate2>
          <Badge [dot]="true">
            <div>Third Tab</div>
          </Badge>
        </ng-template>
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of third tab
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace></WhiteSpace>
    <Tabs
      [page]="3"
      [activeTab]="index"
      [tabBarPosition]="'bottom'"
      (onChange)="onChange($event)"
      (onTabClick)="onTabClick($event)"
    >
      <TabPane [title]="'First Tab'">
        <div
          style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
        >
          Content of first tab
        </div>
      </TabPane>
      <TabPane [title]="'Second Tab'">
        <div
          style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
        >
          Content of second tab
        </div>
      </TabPane>
      <TabPane [title]="'Third Tab'">
        <div
          style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
        >
          Content of third tab
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
export class DemoTabsBasicComponent {
  flag = true;
  index = 1;

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
    this.index = 0;
  }
}

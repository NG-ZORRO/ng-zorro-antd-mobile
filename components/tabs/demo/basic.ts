import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-basic',
  template: `
    <Tabs [useOnPan]="true"
          [swipeable]="true"
          [activeTab]="index"
          [page]="3"
          [tabBarActiveTextColor]="'#1890ff'"
          (onChange)="onChange($event)"
          (onTabClick)="onTabClick($event)"
    >
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white; align-items: center;justify-content: center;"
               [title]="titleTemplate"
      >
        <ng-template #titleTemplate>
          <Badge [text]="3">
            <div>First Tab</div>
          </Badge>
        </ng-template>
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of first tab
        </div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="titleTemplate1"
      >
        <ng-template #titleTemplate1>
          <Badge [text]="'今日(20)'">
            <div>Second Tab</div>
          </Badge>
        </ng-template>
        <div style="display: flex; align-items: center;justify-content: center;height: 150px;background-color: #fff">
          Content of second tab
        </div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white;align-items: center;justify-content: center;"
               [title]="titleTemplate2"
      >
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
    <Tabs [activeTab]="index"
          [page]="3"
          [tabBarPosition]="'bottom'"
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
export class DemoTabsBasicComponent {
  flag = true;
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

  changeIndex() {
    this.index = 0;
  }
}

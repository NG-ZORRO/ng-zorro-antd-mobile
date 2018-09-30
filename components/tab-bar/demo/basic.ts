import { Component } from '@angular/core';

@Component({
  selector: 'demo-tab-bar-basic',
  template: `
    <TabBar [barTintColor]="'white'"
            [tintColor]="tintColor"
            [unselectedTintColor]="unselectedTintColor"
            [ngStyle]="tabbarStyle"
            [activeTab]="1"
            [hidden]="hidden"
            [tabBarPosition]="topFlag ? 'top' : 'bottom'"
    >
      <TabPane style="background-color: white; text-align: center; height: 100%" [title]='custom1'>
        <ng-template #custom1>
          <TabBarTab [title]="'Life'"
                     [key]="1"
                     [badge]="1"
                     [icon]="icon1"
                     (onPress)="onPress($event)"
                     [selectedIcon]="icon11"
          >
            <ng-template #icon1>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
            <ng-template #icon11>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div style="background-color: white; height: 100%; text-align: center">
          <div style="padding-top: 60px">Clicked Life tab， show Life information</div>
          <ng-container>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
          </ng-container>
        </div>
      </TabPane>
      <TabPane style="background-color: white; text-align: center; height: 100%" [title]='custom2'>
        <ng-template #custom2>
          <TabBarTab [title]="'Koubei'"
                     [key]="2"
                     [badge]="'new'"
                     [icon]="icon2"
                     [selectedIcon]="icon22"
          >
            <ng-template #icon2>
              <div style="width:22px;height: 22px;background: url('https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
            <ng-template #icon22>
              <div style="width:22px;height: 22px;background: url('https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div style="background-color: white; height: 100%; text-align: center">
          <div style="padding-top: 60px">Clicked Koubei tab， show Koubei information</div>
          <ng-container>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
          </ng-container>
        </div>
      </TabPane>
      <TabPane style="background-color: white; text-align: center; height: 100%" [title]='custom3'>
        <ng-template #custom3>
          <TabBarTab [title]="'Friend'"
                     [key]="3"
                     [dot]="true"
                     [icon]="icon3"
                     [selectedIcon]="icon33">
            <ng-template #icon3>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
            <ng-template #icon33>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div style="background-color: white; height: 100%; text-align: center">
          <div style="padding-top: 60px">Clicked Friend tab， show Friend information</div>
          <ng-container>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
          </ng-container>
        </div>
      </TabPane>
      <TabPane style="background-color: white; text-align: center; height: 100%" [title]='custom4'>
        <ng-template #custom4>
          <TabBarTab [title]="'My'"
                     [key]="4"
                     [icon]="icon4"
                     [selectedIcon]="icon44">
            <ng-template #icon4>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
            <ng-template #icon44>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg') center center / 21px 21px no-repeat;">
              </div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div style="background-color: white; height: 100%; text-align: center">
          <div style="padding-top: 60px">Clicked My tab， show My information</div>
          <ng-container>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
          </ng-container>
        </div>
      </TabPane>
    </TabBar>

    <ng-template #content>
      <a style="display: block; margin-top: 40px; margin-bottom: 20px; color: #108ee9"
         (click)="showTabBar($event)">
        Click to show/hide tab-bar
      </a>
      <a style="display: block; margin-top: 20px; margin-bottom: 20px; color: #108ee9"
         (click)="changePosition($event)">
        Click to change tab-bar position top/bottom
      </a>
      <a style="display: block; margin-bottom: 600px; color: #108ee9"
      (click)="showFullScreen($event)">
        Click to switch fullscreen
      </a>
    </ng-template>
  `
})
export class DemoTabBarBasicComponent {
  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { height: '400px' };

  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showFullScreen(event) {
    event.preventDefault();
    this.fullScreen = !this.fullScreen;
    this.tabbarStyle = this.fullScreen
      ? {
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0
        }
      : { height: '400px' };
  }

  changePosition(event) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  onPress(event) {
    console.log('event: ', event);
  }
}

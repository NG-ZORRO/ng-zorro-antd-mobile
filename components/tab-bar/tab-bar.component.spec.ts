import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TabBarModule } from './tab-bar.module';
import { TabsModule } from '../tabs/tabs.module';

describe('tabbar', () => {
  let component;
  let fixture: ComponentFixture<TestTabBarComponent>;
  let tabBarEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestTabBarComponent],
      imports: [TabBarModule, TabsModule, NoopAnimationsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabBarComponent);
    component = fixture.componentInstance;
    tabBarEle = fixture.debugElement.query(By.css('TabBar'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hidden work', () => {
    expect(tabBarEle.nativeElement.querySelector('.am-tab-bar-bar').classList).not.toContain('am-tab-bar-bar-hidden');
    component.hidden = true;
    fixture.detectChanges();
    expect(tabBarEle.nativeElement.querySelector('.am-tab-bar-bar').classList).toContain(
      'am-tab-bar-bar-hidden-' + component.tabBarPosition
    );
  });

  it('tabBarPosition work', () => {
    expect(tabBarEle.nativeElement.querySelector('.am-tabs').classList).toContain('am-tabs-bottom');
    component.tabBarPosition = 'top';
    fixture.detectChanges();
    expect(tabBarEle.nativeElement.querySelector('.am-tabs').classList).toContain('am-tabs-top');
  });

  it('badge work', () => {
    expect(tabBarEle.nativeElement.querySelectorAll('tabbartab')[0].querySelector('badge')).toBeTruthy();
  });

  it('dot work', () => {
    expect(tabBarEle.nativeElement.querySelectorAll('tabbartab')[2].querySelector('.am-badge-dot')).toBeTruthy();
  });

  it('title work', () => {
    expect(
      tabBarEle.nativeElement.querySelectorAll('tabbartab')[2].querySelector('.am-tab-bar-tab-title').innerText
    ).toContain('title3');
  });

  it('barTintColor work', () => {
    expect(tabBarEle.nativeElement.querySelector('.am-tab-bar-bar').style.backgroundColor).toContain('rgb(0, 0, 0)');
  });

  it('onPress work', fakeAsync(() => {
    component.onPress = jasmine.createSpy('onPress is callback');
    const tab = tabBarEle.nativeElement.querySelectorAll('tabbartab')[component.activeTab - 1];
    tick(100);
    fixture.detectChanges();
    tab.click();
    fixture.detectChanges();
    expect(component.onPress).toHaveBeenCalledTimes(1);
    expect(
      tabBarEle.nativeElement.querySelectorAll('tabbartab')[1].querySelector('.am-tab-bar-tab-title').style.color
    ).toContain('rgb(136, 136, 136)');
    expect(
      tabBarEle.nativeElement.querySelectorAll('tabbartab')[0].querySelector('.am-tab-bar-tab-title').style.color
    ).toContain('rgb(17, 17, 17)');
  }));

  it('unselectedTintColor work', () => {
    expect(
      tabBarEle.nativeElement
        .querySelectorAll('tabbartab')
        [component.activeTab + 1].querySelector('.am-tab-bar-tab-title').style.color
    ).toContain('rgb(136, 136, 136)');
  });

  it('tintColor work', () => {
    expect(
      tabBarEle.nativeElement.querySelectorAll('tabbartab')[component.activeTab].querySelector('.am-tab-bar-tab-title')
        .style.color
    ).toContain('rgb(17, 17, 17)');
  });
});

@Component({
  selector: 'test-tabbar',
  template: `
    <TabBar [activeTab]="activeTab"
            [hidden]="hidden"
            [tabBarPosition]="tabBarPosition"
            [barTintColor]="'#000'"
            [unselectedTintColor]="unselectedTintColor"
            [tintColor]="tintColor">
      <TabPane [title]='custom1'
               style="display: flex; height: 150px; width: 100%; background-color: white; align-items: center;justify-content: center;">
        <ng-template #custom1>
          <TabBarTab [title]="'title1'"
                     [badge]="1"
                     [icon]="icon1"
                     [selectedIcon]="icon11"
                     (onPress)="onPress()"
          >
            <ng-template #icon1>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
            <ng-template #icon11>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div>content1</div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white; align-items: center;justify-content: center;"
               [title]='custom2'
      >
        <ng-template #custom2>
          <TabBarTab [title]="'title2'"
                     [badge]="'new'"
                     [icon]="icon2"
                     [selectedIcon]="icon22"
          >
            <ng-template #icon2>
              <div style="width:22px;height: 22px;background: url('https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
            <ng-template #icon22>
              <div style="width:22px;height: 22px;background: url('https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div>content2</div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white; align-items: center;justify-content: center;"
               [title]='custom3'
      >
        <ng-template #custom3>
          <TabBarTab [title]="'title3'"
                     [dot]="true"
                     [icon]="icon3"
                     [selectedIcon]="icon33"
          >
            <ng-template #icon3>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
            <ng-template #icon33>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div>content3</div>
      </TabPane>
      <TabPane style="display: flex; height: 150px; width: 100%; background-color: white; align-items: center;justify-content: center;"
               [title]='custom4'
      >
        <ng-template #custom4>
          <TabBarTab [title]="'title4'"
                     [icon]="icon4"
                     [selectedIcon]="icon44"
          >
            <ng-template #icon4>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
            <ng-template #icon44>
              <div style="width:22px;height: 22px;background: url('https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg') center center / 21px 21px no-repeat;"></div>
            </ng-template>
          </TabBarTab>
        </ng-template>
        <div>content4</div>
      </TabPane>
    </TabBar>
  `
})
export class TestTabBarComponent {
  hidden: boolean = false;
  tabBarPosition: string = 'bottom';
  activeTab: number = 1;
  unselectedTintColor: string = '#888';
  tintColor: string = '#111';

  constructor() {}

  onPress() {
    console.log('onPress');
  }
}

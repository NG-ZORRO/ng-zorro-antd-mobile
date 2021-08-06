import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { dispatchTouchEvent } from '../core/testing';
import { TabsComponent } from './tabs.component';
import { TabsModule } from './tabs.module';
import { TabPaneComponent } from './tab-pane.component';

describe('tab', () => {
  let component;
  let fixture: ComponentFixture<TestTabsComponent>;
  let tabsEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestTabsComponent],
      imports: [TabsModule, NoopAnimationsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabsComponent);
    component = fixture.componentInstance;
    tabsEle = fixture.debugElement.query(By.css('Tabs')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('activeTab work', () => {
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].classList).toContain(
      'am-tabs-default-bar-tab-active'
    );
    expect(component.tabs.defaultTabBar.activeTab).toEqual(component.activeTab);
  });

  it('tabBarPosition work', () => {
    expect(tabsEle.querySelector('.am-tabs-default-bar').classList).toContain('am-tabs-default-bar-top');
    component.tabBarPosition = 'bottom';
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar').classList).toContain('am-tabs-default-bar-bottom');
    component.tabBarPosition = 'left';
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar').classList).toContain('am-tabs-default-bar-left');
    component.tabBarPosition = 'right';
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar').classList).toContain('am-tabs-default-bar-right');
    expect(component.tabs.tabBarPosition).toEqual('right');
    component.tabBarPosition = 'test';
    fixture.detectChanges();
  });

  it('animated work', () => {
    expect(tabsEle.querySelector('.am-tabs-default-bar').classList).toContain('am-tabs-default-bar-animated');
    component.animated = false;
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar').classList).not.toContain('am-tabs-default-bar-animated');
  });

  it('tabDirection work', () => {
    expect(tabsEle.classList).toContain('am-tabs-horizontal');
    component.tabDirection = 'vertical';
    fixture.detectChanges();
    expect(tabsEle.classList).toContain('am-tabs-vertical');
    expect(component.tabs.tabDirection).toEqual('vertical');
    component.tabDirection = 'test';
    fixture.detectChanges();
    expect(tabsEle.classList).toContain('am-tabs-vertical');
  });

  it('tabBarUnderlineStyle work', () => {
    if (tabsEle.querySelector('.am-tabs-default-bar-underline').style.border !== '') {
      expect(tabsEle.querySelector('.am-tabs-default-bar-underline').style.border).toContain('1px solid red');
    }
  });

  it('tabBarBackgroundColor work', () => {
    expect(tabsEle.querySelector('.am-tabs-default-bar').style.backgroundColor).toContain('black');
  });

  it('tabBarActiveTextColor work', () => {
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].style.color).toContain('red');
  });

  it('tabBarInactiveTextColor work', () => {
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab + 1].style.color).toContain(
      'green'
    );
  });

  it('tabBarTextStyle work', () => {
    expect(tabsEle.querySelector('.am-tabs-default-bar-tab').style.fontSize).toContain('33px');
  });

  it('distanceToChangeTab work when tabDirection is horizontal', () => {
    component.tabDirection = 'horizontal';
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', content.offsetWidth);
    dispatchTouchEvent(content, 'touchmove', content.offsetWidth * 0.5);
    dispatchTouchEvent(content, 'touchend', content.offsetWidth * 0.5);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab + 1].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab change to activeTab+1'
    );
  });

  it('distanceToChangeTab work when tabDirection is horizontal', () => {
    component.tabDirection = 'horizontal';
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', content.offsetWidth);
    dispatchTouchEvent(content, 'touchmove', content.offsetWidth * 0.8);
    dispatchTouchEvent(content, 'touchend', content.offsetWidth * 0.8);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab + 1].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change to activeTab+1 because distance < distanceToChangeTab'
    );
  });

  it('distanceToChangeTab work when tabDirection is horizontal', () => {
    component.tabDirection = 'horizontal';
    component.activeTab = 2;
    component.useOnPan = true;
    component.animate = true;
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', 0);
    dispatchTouchEvent(content, 'touchmove', content.offsetWidth * 0.8);
    dispatchTouchEvent(content, 'touchend', content.offsetWidth * 0.8);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab - 1].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change to activeTab-1'
    );
  });

  it('distanceToChangeTab work when tabDirection is vertical', () => {
    component.tabDirection = 'vertical';
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', 0, content.offsetHeight);
    dispatchTouchEvent(content, 'touchmove', 0, content.offsetHeight * 0.5);
    dispatchTouchEvent(content, 'touchend', 0, content.offsetHeight * 0.5);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab + 1].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab change to activeTab+1'
    );
  });

  it('distanceToChangeTab work when tabDirection is vertical', () => {
    component.tabDirection = 'vertical';
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', 0, content.offsetHeight);
    dispatchTouchEvent(content, 'touchmove', 0, content.offsetHeight * 0.2);
    dispatchTouchEvent(content, 'touchend', 0, content.offsetHeight * 0.2);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab + 1].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change to activeTab+1 because distance < distanceToChangeTab'
    );
  });

  it('distanceToChangeTab work when tabDirection is vertical', () => {
    component.tabDirection = 'vertical';
    component.activeTab = 2;
    component.useOnPan = true;
    component.animate = true;
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', 0, 0);
    dispatchTouchEvent(content, 'touchmove', 0, content.offsetHeight * 0.8);
    dispatchTouchEvent(content, 'touchend', 0, content.offsetHeight * 0.8);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab - 1].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change to activeTab-1'
    );
  });

  it('tab onTouchMove work when activeTab is 0 or tabPanes.length-1 when tabDirection = horizontal', () => {
    component.tabDirection = 'horizontal';
    component.activeTab = component.tabPanes.length - 1;
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', content.offsetWidth);
    dispatchTouchEvent(content, 'touchmove', content.offsetWidth * 0.5);
    dispatchTouchEvent(content, 'touchend', content.offsetWidth * 0.5);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change when activeTab is tabPanes.length-1'
    );

    component.activeTab = 0;
    fixture.detectChanges();
    dispatchTouchEvent(content, 'touchstart', 0);
    dispatchTouchEvent(content, 'touchmove', content.offsetWidth * 0.5);
    dispatchTouchEvent(content, 'touchend', content.offsetWidth * 0.5);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change when activeTab is 0'
    );
  });

  it('tab onTouchMove work when activeTab is 0 or tabPanes.length-1 when tabDirection = vertical', () => {
    component.tabDirection = 'vertical';
    component.activeTab = component.tabPanes.length - 1;
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', 0, content.offsetHeight);
    dispatchTouchEvent(content, 'touchmove', 0, content.offsetHeight * 0.5);
    dispatchTouchEvent(content, 'touchend', 0, content.offsetHeight * 0.5);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change when activeTab is tabPanes.length-1'
    );

    component.activeTab = 0;
    fixture.detectChanges();
    dispatchTouchEvent(content, 'touchstart', 0, 0);
    dispatchTouchEvent(content, 'touchmove', 0, content.offsetHeight * 0.8);
    dispatchTouchEvent(content, 'touchend', 0, content.offsetHeight * 0.8);
    fixture.detectChanges();
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].classList).toContain(
      'am-tabs-default-bar-tab-active',
      'activeTab not change when activeTab is 0'
    );
  });

  it('useOnPan work', () => {
    component.useOnPan = false;
    component.tabDirection = 'horizontal';
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', content.offsetWidth);
    dispatchTouchEvent(content, 'touchmove', content.offsetWidth * 0.5);
    dispatchTouchEvent(content, 'touchend', content.offsetWidth * 0.5);
    expect(tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[component.activeTab].classList).toContain(
      'am-tabs-default-bar-tab-active'
    );
  });

  it('selectTabPane function work', () => {
    component.animated = false;
    component.tabDirection = 'horizontal';
    fixture.detectChanges();
    component.tabs.selectTabPane(2);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-content-wrap').style.transform).toContain('translate3d(-200%, 0px, 0px)');
    expect(tabsEle.querySelector('.am-tabs-content-wrap').classList).not.toContain('am-tabs-content-wrap-animated');

    component.animated = true;
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-content-wrap').classList).toContain('am-tabs-content-wrap-animated');

    component.animated = false;
    component.tabDirection = 'vertical';
    fixture.detectChanges();
    component.tabs.selectTabPane(2);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-content-wrap').style.transform).toContain('translate3d(0px, -200%, 0px)');
    expect(tabsEle.querySelector('.am-tabs-content-wrap').classList).not.toContain('am-tabs-content-wrap-animated');

    component.animated = true;
    component.tabDirection = 'vertical';
    fixture.detectChanges();
    component.tabs.selectTabPane(2);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-content-wrap').style.transform).toContain('translate3d(0px, -200%, 0px)');
    expect(tabsEle.querySelector('.am-tabs-content-wrap').classList).toContain('am-tabs-content-wrap-animated');
  });

  it('onTabClick work', () => {
    component.animated = true;
    let tabFirst = tabsEle.querySelectorAll('.am-tabs-default-bar-tab')[1];
    component.onTabClick = jasmine.createSpy('onTabClick is callback');
    tabFirst.click();
    fixture.detectChanges();
    expect(component.onTabClick).toHaveBeenCalledTimes(1);
    tabFirst.click();
    fixture.detectChanges();
    expect(component.onTabClick).toHaveBeenCalledTimes(1);
  });

  it('onChange work', () => {
    component.onChange = jasmine.createSpy('onChange is callback');
    component.activeTab = 0;
    component.tabDirection = 'vertical';
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-content-wrap');
    dispatchTouchEvent(content, 'touchstart', 0, content.offsetHeight);
    dispatchTouchEvent(content, 'touchmove', 0, content.offsetHeight * 0.2);
    dispatchTouchEvent(content, 'touchend', 0, content.offsetHeight * 0.2);
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });

  it('defaultTabBar touch work when tabBarPosition = top', () => {
    component.useOnPan = true;
    component.tabDirection = 'horizontal';
    component.tabBarPosition = 'top';
    component.activeTab = 1;
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-default-bar-content');
    dispatchTouchEvent(content, 'touchstart', 0);
    dispatchTouchEvent(content, 'touchmove', 50);
    dispatchTouchEvent(content, 'touchend', 50);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar-content').style.transform).toContain(
      'translate3d(0px, 0px, 0px)',
      'right panmove not work'
    );

    dispatchTouchEvent(content, 'touchstart', 0);
    dispatchTouchEvent(content, 'touchmove', -50);
    dispatchTouchEvent(content, 'touchend', -50);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar-content').style.transform).toContain(
      '-50px',
      'left panmove not work when deltaX = -50'
    );

    const threshold =
      component.tabs.defaultTabBar.tabsBarSwipe.nativeElement.offsetWidth -
      component.tabs.defaultTabBar.tabTitles.first.nativeElement.offsetWidth *
        component.tabs.defaultTabBar.tabTitles.length;

    const x = -50 + threshold;
    dispatchTouchEvent(content, 'touchstart', 0);
    dispatchTouchEvent(content, 'touchmove', x);
    dispatchTouchEvent(content, 'touchend', x);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar-content').style.transform).toContain(
      threshold,
      'left panmove not work when deltaX = threshold'
    );
  });

  it('defaultTabBar touch work when tabBarPosition = left', () => {
    component.useOnPan = true;
    component.tabDirection = 'horizontal';
    component.tabBarPosition = 'left';
    component.activeTab = 0;
    fixture.detectChanges();
    let content = tabsEle.querySelector('.am-tabs-default-bar-content');
    dispatchTouchEvent(content, 'touchstart', 0, 0);
    dispatchTouchEvent(content, 'touchmove', 0, 50);
    dispatchTouchEvent(content, 'touchend', 0, 50);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar-content').style.transform).toContain(
      'translate3d(0px, 0px, 0px)',
      'right panmove not work'
    );

    dispatchTouchEvent(content, 'touchstart', 0, 0);
    dispatchTouchEvent(content, 'touchmove', 0, -50);
    dispatchTouchEvent(content, 'touchend', 0, -50);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar-content').style.transform).toContain(
      '50px',
      'left panmove not work when deltaY = -50'
    );

    const threshold =
      component.tabs.defaultTabBar.tabsBarSwipe.nativeElement.offsetHeight -
      component.tabs.defaultTabBar.tabTitles.first.nativeElement.offsetHeight *
        component.tabs.defaultTabBar.tabTitles.length;
    const y = -50 + threshold;
    dispatchTouchEvent(content, 'touchstart', 0, 0);
    dispatchTouchEvent(content, 'touchmove', 0, y);
    dispatchTouchEvent(content, 'touchend', 0, y);
    fixture.detectChanges();
    expect(tabsEle.querySelector('.am-tabs-default-bar-content').style.transform).toContain(
      threshold,
      'left panmove not work when deltaY = threshold'
    );
  });

  it('mock tabbTitle.length = 0', () => {
    component.tabs.defaultTabBar.tabTitles = null;
    component.tabs.defaultTabBar.onContentChange();
    expect(tabsEle.querySelector('.am-tabs-default-bar-underline').style.transform).not.toContain('translate3d');
  });
});

@Component({
  selector: 'test-tabs',
  template: `
    <Tabs
      style="height: 50px; overflow: hidden"
      [page]="page"
      [animated]="animated"
      [activeTab]="activeTab"
      [swipeable]="swipeable"
      [tabDirection]="tabDirection"
      [tabBarPosition]="tabBarPosition"
      [tabBarBackgroundColor]="'black'"
      [tabBarActiveTextColor]="'red'"
      [tabBarInactiveTextColor]="'green'"
      [tabBarTextStyle]="{ 'font-size': '33px' }"
      [tabBarUnderlineStyle]="{ border: '1px red solid' }"
      (onChange)="onChange($event)"
      (onTabClick)="onTabClick($event)"
    >
      <TabPane [title]="'Tab 1'">
        <div style="height: 100px; width: 100%">Content of 1 tab</div>
      </TabPane>
      <TabPane [title]="titleTemplate">
        <ng-template #titleTemplate>
          <div>Tab 2</div>
        </ng-template>
        <div style="display: flex; align-items: center;justify-content: center;height: 50px;background-color: #fff">
          Content of first tab
        </div>
      </TabPane>
      <TabPane [title]="'Tab 3'">
        Content of 3 tab
      </TabPane>
      <TabPane [title]="'Tab 4'">
        Content of 4 tab
      </TabPane>
      <TabPane [title]="'Tab 5'">
        Content of 5 tab
      </TabPane>
      <TabPane [title]="'Tab 6'">
        Content of 6 tab
      </TabPane>
      <TabPane [title]="'Tab 7'">
        Content of 7 tab
      </TabPane>
    </Tabs>
  `,
  styles: [
    `
      :host ::ng-deep .am-tabs-default-bar-content {
        height: 100px;
      }
    `
  ]
})
export class TestTabsComponent {
  page = 3;
  activeTab = 0;
  animated = true;
  useOnPan = true;
  swipeable = true;
  tabBarPosition = 'top';
  distanceToChangeTab = 0.3;
  tabDirection = 'horizontal';

  @ViewChild(TabsComponent)
  tabs: TabsComponent;
  @ViewChildren(TabPaneComponent)
  tabPanes: QueryList<TabPaneComponent>;

  constructor() {}

  onChange(event) {
    console.log('onChange', event);
  }

  onTabClick(event) {
    console.log('onTabClick', event);
  }
}

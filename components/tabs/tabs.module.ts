import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { Tabs } from './tabs.component';
import { TabPane } from './tab-pane.component';
import { TabPaneBody } from './tab-pane-body.component';
import { DefaultTabBar } from './default-tab-bar.component';

export { TabPane } from './tab-pane.component';

@NgModule({
  imports: [CommonModule, ObserversModule],
  declarations: [TabPane, Tabs, TabPaneBody, DefaultTabBar],
  exports: [TabPane, Tabs, TabPaneBody, DefaultTabBar],
  providers: []
})
export class TabsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { Tabs } from './tabs.component';
import { TabPane } from './tab-pane.component';
import { DefaultTabBarComponent } from './default-tab-bar.component';

@NgModule({
  imports: [CommonModule, ObserversModule],
  declarations: [TabPane, Tabs, DefaultTabBarComponent],
  exports: [TabPane, Tabs, DefaultTabBarComponent],
  providers: []
})
export class TabsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from '../tabs/tabs.module';
import { TabBar } from './tab-bar.component';
import { BadgeModule } from '../badge/badge.module';
import { TabBarItem } from './tab-bar-item.component';

export { TabPane } from '../tabs/tabs.module';

@NgModule({
  imports: [CommonModule, TabsModule, BadgeModule],
  exports: [TabBar, TabBarItem],
  declarations: [TabBar, TabBarItem],
  providers: []
})
export class TabBarModule { }

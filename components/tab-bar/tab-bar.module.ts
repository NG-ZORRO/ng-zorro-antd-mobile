import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from '../tabs/tabs.module';
import { TabBar } from './tab-bar.component';
import { BadgeModule } from '../badge/badge.module';
import { TabBarTab } from './tab-bar-tab.component';

@NgModule({
  imports: [CommonModule, TabsModule, BadgeModule],
  exports: [TabBar, TabBarTab],
  declarations: [TabBar, TabBarTab],
  providers: []
})
export class TabBarModule {}

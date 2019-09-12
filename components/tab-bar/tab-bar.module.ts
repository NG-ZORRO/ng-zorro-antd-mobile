import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from '../tabs/tabs.module';
import { TabBarComponent } from './tab-bar.component';
import { BadgeModule } from '../badge/badge.module';
import { TabBarItemComponent } from './tab-bar-item.component';

@NgModule({
  imports: [CommonModule, TabsModule, BadgeModule],
  exports: [TabBarComponent, TabBarItemComponent],
  declarations: [TabBarComponent, TabBarItemComponent],
  providers: []
})
export class TabBarModule {}

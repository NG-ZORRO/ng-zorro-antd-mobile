import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '../flex/flex.module';
import { ListModule } from '../list/list.module';
import { RadioModule } from '../radio/radio.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ButtonModule } from '../button/button.module';
import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';

@NgModule({
  imports: [CommonModule, FlexModule, ListModule, RadioModule, CheckboxModule, ButtonModule, LocaleProviderModule],
  exports: [MenuComponent, SubMenuComponent],
  declarations: [MenuComponent, SubMenuComponent],
  providers: [LocaleProviderModule]
})

export class MenuModule {
}

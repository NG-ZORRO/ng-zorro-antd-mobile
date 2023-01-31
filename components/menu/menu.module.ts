import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from 'ng-zorro-antd-mobile/flex';
import { ListModule } from 'ng-zorro-antd-mobile/list';
import { RadioModule } from 'ng-zorro-antd-mobile/radio';
import { CheckboxModule } from 'ng-zorro-antd-mobile/checkbox';
import { ButtonModule } from 'ng-zorro-antd-mobile/button';
import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    ListModule,
    RadioModule,
    CheckboxModule,
    ButtonModule,
    LocaleProviderModule,
    FormsModule
  ],
  exports: [MenuComponent, SubMenuComponent],
  declarations: [MenuComponent, SubMenuComponent]
})
export class MenuModule {}

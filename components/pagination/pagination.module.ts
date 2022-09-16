import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'ng-zorro-antd-mobile/button';
import { FlexModule } from 'ng-zorro-antd-mobile/flex';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { PaginationComponent } from './pagination.component';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';

@NgModule({
  imports: [CommonModule, ButtonModule, FlexModule, IconModule, LocaleProviderModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent]
})
export class PaginationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { FlexModule } from '../flex/flex.module';
import { IconModule } from '../icon/icon.module';
import { PaginationComponent } from './pagination.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';

@NgModule({
  imports: [CommonModule, ButtonModule, FlexModule, IconModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [LocaleProviderModule]
})

export class PaginationModule {
}

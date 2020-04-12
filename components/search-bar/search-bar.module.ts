import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';

@NgModule({
  exports: [SearchBarComponent],
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule, LocaleProviderModule]
})
export class SearchBarModule {}

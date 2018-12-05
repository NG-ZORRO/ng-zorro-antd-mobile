import { NgModule } from '@angular/core';
import { SearchBar } from './search-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';

@NgModule({
  exports: [SearchBar],
  declarations: [SearchBar],
  imports: [CommonModule, FormsModule, LocaleProviderModule],
  providers: [LocaleProviderModule]
})
export class SearchBarModule {}

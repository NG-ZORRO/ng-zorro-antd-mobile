import { NgModule } from '@angular/core';
import { SearchBar } from './search-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [SearchBar],
  declarations: [SearchBar],
  imports: [CommonModule, FormsModule]
})
export class SearchBarModule {}

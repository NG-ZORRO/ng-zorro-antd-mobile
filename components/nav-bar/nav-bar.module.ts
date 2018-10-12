import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [CommonModule, IconModule],
  exports: [NavBarComponent],
  declarations: [NavBarComponent]
})
export class NavBarModule {}

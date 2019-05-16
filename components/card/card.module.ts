import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
  exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
})
export class CardModule {}

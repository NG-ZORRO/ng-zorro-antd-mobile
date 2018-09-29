import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './card.component';
import { CardHeader } from './card-header.component';
import { CardBody } from './card-body.component';
import { CardFooter } from './card-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Card, CardHeader, CardBody, CardFooter],
  exports: [Card, CardHeader, CardBody, CardFooter]
})
export class CardModule {}

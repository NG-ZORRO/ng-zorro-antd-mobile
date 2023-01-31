import { NgModule } from '@angular/core';
import { ResultComponent } from './result.component';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ng-zorro-antd-mobile/icon';

@NgModule({
  declarations: [ResultComponent],
  exports: [ResultComponent],
  imports: [CommonModule, IconModule]
})
export class ResultModule {}

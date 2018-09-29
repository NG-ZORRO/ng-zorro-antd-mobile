import { NgModule } from '@angular/core';
import { ActivityIndicator } from './activity-indicator.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [ActivityIndicator],
  declarations: [ActivityIndicator],
  imports: [CommonModule, FormsModule]
})
export class ActivityIndicatorModule {}

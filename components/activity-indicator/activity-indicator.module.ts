import { NgModule } from '@angular/core';
import { ActivityIndicatorComponent } from './activity-indicator.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [ActivityIndicatorComponent],
  declarations: [ActivityIndicatorComponent],
  imports: [CommonModule, FormsModule]
})
export class ActivityIndicatorModule {}

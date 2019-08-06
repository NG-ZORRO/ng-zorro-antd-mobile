import { Routes } from '@angular/router';

import { KitchenSinkComponent } from './kitchen-sink.component';

export const KitchenSinkRoutes: Routes = [
  {
    path: '',
    component: KitchenSinkComponent,
    children: [
      { path: '', redirectTo: 'kitchen-sink' }
    ]
  }
];

export const KitchenSinkComponents = [
  KitchenSinkComponent,
];

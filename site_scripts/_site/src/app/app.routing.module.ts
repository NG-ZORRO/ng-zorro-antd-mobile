import { Routes } from '@angular/router';
import { DEMO_ROUTES } from './router';
import { DEMOComponent } from './_demo/demo.component';
const lang_router = new Date().toString().includes('GMT+0800') ? '/docs/introduce/zh' : '/docs/introduce/en';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: lang_router },
  ...DEMO_ROUTES,
  { 'path': 'docs', 'loadChildren': './docs/index.module#NzDocsModule' },
  { 'path': 'kitchen-sink', 'loadChildren': './kitchen-sink/kitchen-sink.module#KitchenSinkModule' },
  { path: 'demo', component: DEMOComponent },
  { path: '**', redirectTo: lang_router, pathMatch: 'full' }
];

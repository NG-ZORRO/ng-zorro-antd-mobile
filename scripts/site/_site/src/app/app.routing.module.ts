import { Routes } from '@angular/router';
import { DEMO_ROUTES } from './router';
import { DEMOComponent } from './_demo/demo.component';
const lang_router = new Date().toString().includes('GMT+0800') ? '/docs/introduce/zh' : '/docs/introduce/en';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: lang_router },
  ...DEMO_ROUTES,
  { 'path': 'docs', 'loadChildren': () => import('./docs/index.module').then(m => m.NzDocsModule) },
  { 'path': 'kitchen-sink', 'loadChildren': () => import('./kitchen-sink/kitchen-sink.module').then(m => m.KitchenSinkModule) },
  { path: 'demo', component: DEMOComponent },
  { path: '**', redirectTo: lang_router, pathMatch: 'full' }
];

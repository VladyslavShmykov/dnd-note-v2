import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'health',
    pathMatch: 'full',
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then(m => m.HealthModule),
  },
  {
    path: 'money',
    loadChildren: () => import('./money/money.module').then(m => m.MoneyModule),
  }
];

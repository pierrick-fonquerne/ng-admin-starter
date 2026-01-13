import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./domains/dashboard/components/dashboard-page/dashboard-page').then(
            (m) => m.DashboardPage
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./domains/users/components/users-page/users-page').then(
            (m) => m.UsersPage
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./domains/settings/components/settings-page/settings-page').then(
            (m) => m.SettingsPage
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

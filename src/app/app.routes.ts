import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'exchange', pathMatch: 'full' },
  { path: 'exchange', loadComponent: () => import('./pages/exchange-rate/exchange-rate.component').then((mod) => mod.ExchangeRateComponent) },
  { path: 'about', loadComponent: () => import('./pages/about-us/about-us.component').then((mod) => mod.AboutUsComponent) },
];

import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './shared/guards/auth.guards';

export const routes: Routes = [
  // autenticacion
  {
    path: 'auth',
    canActivate:[publicGuard],
    loadChildren: () => import('./auth/features/shell/auth.routes')
  },

  {
    path: 'dashboard',
    canActivate: [privateGuard],
    loadComponent: () => import('./dashboard/dashboard')
  },
  // ruta por defecto
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

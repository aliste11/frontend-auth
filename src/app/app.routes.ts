import { Routes } from '@angular/router';

export const routes: Routes = [
  // autenticacion
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/shell/auth.routes')
  },

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard')
  },
  // ruta por defecto
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

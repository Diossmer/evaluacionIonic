import { Routes } from '@angular/router';
/**
 * Rutas principales de aplicacion del sidebar.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'informacion-personal',
    loadComponent: () => import('./pages/informacion-personal/informacion-personal.page').then(m => m.InformacionPersonalPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then(m => m.ContactoPage)
  }
];
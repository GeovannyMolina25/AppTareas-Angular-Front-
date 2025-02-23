import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige a /login si está vacío
  { path: '**', redirectTo: 'login' }  // Redirige a login para rutas no definidas
];

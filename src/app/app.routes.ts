import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a /login si está vacío
  { path: 'login', component: LoginComponent }, // Ruta del login
  { path: '**', redirectTo: 'login' } // Cualquier ruta desconocida redirige al login
];

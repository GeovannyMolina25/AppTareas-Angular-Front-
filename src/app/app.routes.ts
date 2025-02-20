import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige a /login si está vacío
  { path: 'login', component: LoginComponent },  // Ruta del login
  { path: 'principal', component: PrincipalComponent },  // Ruta principal
  { path: '**', redirectTo: 'login' }  // Redirige a login para rutas no definidas
];

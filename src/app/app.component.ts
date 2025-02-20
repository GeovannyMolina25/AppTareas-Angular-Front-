import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-login></app-login>`, // Muestra directamente el login
  imports: [LoginComponent]
})
export class AppComponent {}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  // Método para navegar al login
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Método para navegar a la pantalla principal
  navigateToPrincipal(): void {
    this.router.navigate(['/principal']);
  }
}

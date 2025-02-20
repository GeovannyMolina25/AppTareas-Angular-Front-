import { Component } from '@angular/core';
import { NavigationService } from '../navigation-service.service';
// Asegúrate de importar el servicio de navegación

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private navigationService: NavigationService) {}

  login() {
    // Aquí va la lógica de autenticación (simulada)
    const autenticado = true;

    if (autenticado) {
      this.navigationService.navigateToPrincipal(); // Redirige al principal
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}

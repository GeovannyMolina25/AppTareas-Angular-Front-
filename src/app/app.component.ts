import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Solo RouterModule
  template: `<router-outlet></router-outlet>`,  // Aquí el router outlet manejará el contenido
})
export class AppComponent {}

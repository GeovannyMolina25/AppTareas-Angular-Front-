import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherforecastService } from './weatherforecast.service';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  imports: [ButtonModule, AccordionModule,TabsModule,InputTextModule], // Agrega ambos módulos aquí
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  weatherforecastService = inject(WeatherforecastService);
  climas: any[] = [];

  constructor() {
    this.weatherforecastService.obtenerServicios().subscribe(datos => {
      this.climas = datos;
    });
  }
}

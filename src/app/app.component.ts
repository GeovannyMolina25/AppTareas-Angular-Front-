import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HeaderComponent, FormsModule], 
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {
  movies: string[] = ['Charlie y la fabrica de chocolates','El lobo de wold stree','Up','El ayuwoqui','Animal - cortrack','El señor de los anillos']

}

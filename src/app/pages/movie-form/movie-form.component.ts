import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-movie-form',
  imports: [HeaderComponent, MovieFormComponent],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {

}

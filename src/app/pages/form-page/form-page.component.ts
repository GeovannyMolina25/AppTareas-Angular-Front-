import { Component } from '@angular/core';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-form-page',
  imports: [ HeaderComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {

}

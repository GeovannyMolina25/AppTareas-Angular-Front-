import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Header2Component } from '../../components/header2/header2.component';

@Component({
  selector: 'app-home',
  imports: [Header2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

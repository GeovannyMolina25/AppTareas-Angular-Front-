import { Component, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule], 
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(){
    this.name = new FormControl('');
    this.duration = new FormControl('');
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name : this.name,
      director: this.director,
      duration : this.duration
    });
  }

}

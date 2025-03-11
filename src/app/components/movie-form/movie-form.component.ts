import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule ],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl

  constructor(){
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('',[Validators.required, Validators.max(300)]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration : this.duration,
      director : this.director
    })
  }
  handleSubmit():void{
    console.log(this.movieForm.value);
    this.movieForm.reset();
  }
}

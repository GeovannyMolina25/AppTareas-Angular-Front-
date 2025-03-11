import { Component, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgClass } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
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
  director: FormControl

  constructor(){
    this.name = new FormControl('');
    this.duration = new FormControl('');
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration : this.duration,
      director : this.director
    })
  }
  handleSubmit():void{
    console.log(this.movieForm);
  }


}

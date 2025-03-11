import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule], 
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent implements OnInit{
  constructor(){
    console.log('Dentro de contructor');
  }
  ngOnInit():void{
    console.log("Dentro del OnInit")
  }
  
}

import { Component, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms'
import { ChildComponent } from "./components/child/child.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule, ChildComponent], 
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {
  name: string = "";
  namePadre:string ="";
  envioPadre(){
    this.namePadre = this.name;
  }
  setName(e:any){
    this.name = e
  }
  
}

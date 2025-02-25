import { Component, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';  // Solo importamos RouterModule
import { FormsModule } from '@angular/forms'
import Product from './models/Product';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule], 
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {
  name: string = "";
  namePadre:string ="";
  product:Product;

  constructor(){
    this.product= {
      name: "Laptop",
      price: 12,
      isForSale:true
    }
  }
  
}

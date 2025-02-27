import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
 
  
  constructor(public productService:ProductService){
    
  }
  
}

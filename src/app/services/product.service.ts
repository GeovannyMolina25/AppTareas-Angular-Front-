import { Injectable } from '@angular/core';
import Product from '../models/Product';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product : Product;
  constructor() { 
    this.product={
      name: "Computer",
      price: 12,
      isForSale: true
    }  
  }
  setProdutName(name: string):void{
    this.product.name = name;
  }

  }


import { Directive, Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Movie[];

  constructor() { 
    this.movies= [
    {
      name: "El señor de los anillos",
      duration: 30,
      director: "Peter jason"
    },
    {
      name: "La naranja mecanica",
      duration: 200,
      director: "Stalin Kubrick"
    }
    ]
  }
  addMovie(movie:Movie){
    this.movies.push(movie)

  }
}

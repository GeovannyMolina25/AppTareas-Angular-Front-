import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  imports: [HeaderComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  selectedMovie?: Movie;

  constructor(
    public movieServise:MovieService,
    private route:ActivatedRoute
  ){}
  
  ngOnInit(): void {
    const movieName = this.route.snapshot.params['movieName'];
    console.log(movieName);
     this.selectedMovie =  this.movieServise.getMovie(movieName);
  }
}

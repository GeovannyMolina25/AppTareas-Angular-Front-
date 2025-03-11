import { Component } from '@angular/core';
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
export class MovieDetailsComponent {
  selectedMovie?: Movie | undefined;

  constructor(private route:ActivatedRoute, private movieServise:MovieService){
    const movieName = route.snapshot.params['movieName'];
    console.log(movieName);
     this.selectedMovie =  movieServise.getMovie(movieName);
  }
}

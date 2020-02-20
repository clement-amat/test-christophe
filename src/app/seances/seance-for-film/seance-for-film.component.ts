import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/data/models/movie.model';
import { MovieService } from 'src/app/data/services/movie.service';
import { ShowTime } from 'src/app/data/models/showtime.model';

@Component({
  selector: 'app-seance-for-film',
  templateUrl: './seance-for-film.component.html',
  styleUrls: ['./seance-for-film.component.scss']
})
export class SeanceForFilmComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.movieService.findOne(id).subscribe((movie: Movie) => this.movie = movie)
    });
  }

}

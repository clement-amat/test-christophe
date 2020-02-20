import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/data/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.scss']
})
export class SeancesComponent implements OnInit {

  movies$: Observable<Movie[]>

  constructor(
    public movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movies$ = this.movieService.findAll();
  }

  seances(movieId: number): void {
    this.router.navigate(['seances', movieId]);
  }

}

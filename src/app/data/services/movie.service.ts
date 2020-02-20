import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

export class MovieService {


  stub = [
    {id: 1, title: "Bad Boys III", poster: "https://www.cinemaspathegaumont.com/media/movie/9100674/poster/md/51/film_921567.jpg", isNew: false, isBookable: true},
    {id: 2, title: "1917", poster: "https://www.cinemaspathegaumont.com/media/movie/9200967/poster/md/51/film_925436.jpg", isNew: true, isBookable: true},
    {id: 3, title: "Jumanji", poster: "https://www.cinemaspathegaumont.com/media/movie/9103972/poster/md/63/film_924865.jpg", isNew: false, isBookable: true},
    {id: 4, title: "Star Wars: L'ascencion de Skywalker", poster: "https://www.cinemaspathegaumont.com/media/movie/9103102/poster/md/42/film_923995.jpg", isNew: false, isBookable: true},
    {id: 5, title: "The Grudge", poster: "https://www.cinemaspathegaumont.com/media/movie/9103731/poster/md/38/film_924624.jpg", isNew: false, isBookable: true},
  ]

  constructor() { }

  findOne(id: number): Observable<Movie> {
    return of(this.stub.find((movie: Movie) => movie.id === id));
  }

  findAll(): Observable<Movie[]> {
    return of<Movie[]>(this.stub);
  }
}

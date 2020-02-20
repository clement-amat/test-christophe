import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShowTime } from '../models/showtime.model';

import * as moment from 'moment';

@Injectable()
export class ShowtimeService {

  stub = [
    {id: 32, time: new Date(), version: 'VF', isAvailable: true, isImax: false, is3d: false},
    {id: 33, time: moment().add('2', 'h').toDate() , version: 'VF', isAvailable: true, isImax: false, is3d: false},
    {id: 34, time: moment().add('6', 'h').toDate() , version: 'VF', isAvailable: true, isImax: true, is3d: false},
    {id: 35, time: moment().add('1', 'd').toDate() , version: 'VF', isAvailable: false, isImax: false, is3d: false},
    {id: 35, time: moment().add('1', 'd').add('3', 'h').toDate() , version: 'VF', isAvailable: true, isImax: false, is3d: false},
    {id: 35, time: moment().add('2', 'd').toDate() , version: 'VF', isAvailable: true, isImax: false, is3d: true}
  ]

  constructor() { }

  showTimes(movieId: number): Observable<ShowTime[]> {
    return of<ShowTime[]>(this.stub);
  }
}

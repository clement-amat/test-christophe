import { Component, OnInit } from '@angular/core';
import { ShowTime } from 'src/app/data/models/showtime.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ShowtimeService } from 'src/app/data/services/showtime.service';

import { groupBy } from 'lodash';
import * as moment from 'moment';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.scss']
})
export class HorairesComponent implements OnInit {

  showTimes: [{(key: Date): ShowTime[]}];
  movieId: number;

  constructor(
    private route: ActivatedRoute,
    private showTimeService: ShowtimeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.movieId = +params.get('id');
      this.showTimeService.showTimes(this.movieId).subscribe((showTimes: ShowTime[]) => {
        this.showTimes = groupBy(showTimes, (showTime: ShowTime) => moment(showTime.time).startOf('day').toDate())
        console.log(this.showTimes)
      })
    });
  }

  book(): void {
    this.router.navigate(['seances',this.movieId ,'booking']);
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}

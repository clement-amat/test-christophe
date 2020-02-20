import { Component, OnInit } from '@angular/core';
import { Seating } from 'src/app/data/models/seating.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  seating: Seating = {
    roomName: 'Salle Imax',
    colCount: 4,
    rowCount: 2,
    availableSeats: 7,
    seats: [
      [ 
        {row: 0, col: 0, isAvailable: false, name: 'A0'},
        {row: 0, col: 1, isAvailable: false, name: 'A1'},
        {row: 0, col: 2, isAvailable: true, name: 'A2'},
        {row: 0, col: 3, isAvailable: true, name: 'A3'},
        {row: 0, col: 4, isAvailable: false, name: 'A4'},
        {row: 0, col: 5, isAvailable: true, name: 'A5'}
      ],
      [ 
        {row: 1, col: 0, isAvailable: true, name: 'B0'},
        {row: 1, col: 1, isAvailable: true, name: 'B1'},
        {row: 1, col: 2, isAvailable: true, name: 'B2'},
        {row: 1, col: 3, isAvailable: true, name: 'B3'}
      ]
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  book(seat: any): void {
    // post
  }

}

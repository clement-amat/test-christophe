import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { ShowtimeService } from './services/showtime.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MovieService,
    ShowtimeService
  ]
})
export class DataModule { }

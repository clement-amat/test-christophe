import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeancesComponent } from './seances/seances/seances.component';
import { SeanceForFilmComponent } from './seances/seance-for-film/seance-for-film.component';
import { ReservationComponent } from './seances/reservation/reservation.component';
import { HorairesComponent } from './seances/horaires/horaires.component';


const routes: Routes = [
  { path: '', component: SeancesComponent},
  { 
    path: 'seances/:id', component: SeanceForFilmComponent,
    children: [
      { path: '', component: HorairesComponent},
      { path: 'booking', component: ReservationComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

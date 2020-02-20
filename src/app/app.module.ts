import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbActionsModule, NbButtonModule, NbIconModule, NbPopoverModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SeancesComponent } from './seances/seances/seances.component';
import { DataModule } from './data/data.module';
import { SeanceForFilmComponent } from './seances/seance-for-film/seance-for-film.component';
import { MovieComponent } from './cards/movie/movie.component';
import { ReservationComponent } from './seances/reservation/reservation.component';
import { HorairesComponent } from './seances/horaires/horaires.component';

@NgModule({
  declarations: [
    AppComponent,
    SeancesComponent,
    SeanceForFilmComponent,
    MovieComponent,
    ReservationComponent,
    HorairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbPopoverModule,
    NbActionsModule,
    NbLayoutModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

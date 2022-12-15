import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationComponent } from './components/location/location.component';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CharacterComponent,
    CharactersComponent,
    LocationComponent,
    LocationsComponent,
    EpisodeComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CharacterComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

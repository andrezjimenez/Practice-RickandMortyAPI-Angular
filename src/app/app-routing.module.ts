import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

import { LocationComponent } from './components/location/location.component';
import { LocationsComponent } from './components/locations/locations.component';

const routes: Routes = [
    {
        path: 'home',
        component: CharactersComponent
    },
    {
        path: 'locations',
        component: LocationsComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'episodes',
        component: EpisodesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
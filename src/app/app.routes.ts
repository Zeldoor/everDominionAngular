import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerCardComponent } from './player-card/player-card.component';

export const routes: Routes = 
[
    {path: "", component: HomeComponent},
    {path: "player", component: PlayerCardComponent},
];

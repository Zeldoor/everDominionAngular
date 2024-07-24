import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { FightPageComponent } from './fight-page/fight-page.component';

export const routes: Routes = 
[
    {path: "", component: HomeComponent},
    {path: "player", component: PlayerCardComponent},
    {path: "fight", component: FightPageComponent},
];

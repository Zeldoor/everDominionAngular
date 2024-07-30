import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { FightPageComponent } from './fight-page/fight-page.component';
import { GearCardComponent } from './gear-card/gear-card.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

export const routes: Routes = 
[
    {path: "", component: HomeComponent},
    {path: "player", component: PlayerDetailComponent},
    {path: "fight", component: FightPageComponent},
    {path: "geartest", component: GearCardComponent},
];

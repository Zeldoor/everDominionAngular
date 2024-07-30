import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { FightPageComponent } from './fight-page/fight-page.component';
import { GearCardComponent } from './gear-card/gear-card.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = 
[
    {path: "home", component: HomeComponent},
    {path: "player", component: PlayerCardComponent},
    {path: "fight", component: FightPageComponent},
    {path: "geartest", component: GearCardComponent},
    {path: "", component: LoginPageComponent},
];

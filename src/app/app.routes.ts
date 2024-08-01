import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FightPageComponent } from './fight-page/fight-page.component';
import { GearCardComponent } from './gear-card/gear-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { LoggedGuardService } from './services/guards/logged-guard.service';

export const routes: Routes = 
[
    {path: "", component: LoginPageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "home", component: HomeComponent},
    {path: "player", component: PlayerDetailComponent},
    {path: "fight", component: FightPageComponent},
    
    {path: "geartest", component: GearCardComponent},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FightPageComponent } from './fight-page/fight-page.component';
import { GearCardComponent } from './gear-card/gear-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { LoggedGuardService } from './services/guards/logged-guard.service';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { FriendlistComponent } from './friendlist/friendlist.component';

export const routes: Routes = 
[
    {path: "", component: LoginPageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "home", component: HomeComponent, canActivate: [LoggedGuardService]},
    {path: "player", component: PlayerDetailComponent, canActivate: [LoggedGuardService]},
    {path: 'fight/:id', component: FightPageComponent, canActivate: [LoggedGuardService]},
    {path: "shop", component: ShopPageComponent},
    {path: "friendlist", component: FriendlistComponent},

    
    {path: "geartest", component: GearCardComponent},
];

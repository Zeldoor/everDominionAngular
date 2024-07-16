import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoggatiComponent } from './loggati/loggati.component';
import { LoggedGuardService } from './services/guards/logged-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AdminGuardService } from './services/guards/admin-guard.service';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"admin",component:AdminComponent,canActivate:[AdminGuardService]},
    {path:"logged",component:LoggatiComponent,canActivate:[LoggedGuardService]},
    {path:"unauthorized",component:UnauthorizedComponent},

];

import { Component } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  constructor(private webStorage:LocalStorageService, public authService: AuthService, private route: Router)
  {

  }

  player: Player = this.webStorage.getItem("player");

  logout()
  {
    this.authService.logout();
    this.player = this.webStorage.getItem("player");
  }
}

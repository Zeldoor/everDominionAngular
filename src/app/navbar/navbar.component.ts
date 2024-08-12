import { Component } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  constructor(private webStorage:LocalStorageService, public authService: AuthService, private route: Router, private playerService: PlayerService)
  {
    if(localStorage.getItem("id")!)
      playerService.getOne(parseInt(localStorage.getItem("id")!)).subscribe(data => this.player = data);
  }

  player!: Player;

  logout()
  {
    this.playerService.sendPlayerOffline(parseInt(localStorage.getItem("id")!));
    this.authService.logout();
  }
}

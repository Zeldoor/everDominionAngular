import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { StompService } from '../services/stomp.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  constructor(public authService: AuthService, private stomp: StompService)
  {
    // if(localStorage.getItem("id")!)
    //   this.stomp.subscribe("/topic/lead", message => 
    //     {
    //       let playersData = JSON.parse(message) as Player[];
    //       this.player = playersData ? playersData.filter(p => p.id == parseInt(localStorage.getItem("id")!)).at(0)! : this.player;
    //       console.log(this.player)
    //     })
  }

  @Input() player!: Player;

  logout()
  {
    this.authService.logout();
  }
}

import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { StompService } from '../services/stomp.service';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  @Input() player!: Player;
  icon: String = this.player ? this.player.icon : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';


  constructor(public authService: AuthService, private stomp: StompService, private polling: GameDataService)
  {

    console.log(this.player)

      // this.stomp.subscribe("/topic/players", message => 
      //   {
      //     if(localStorage.getItem("id")!)
      //     {
      //       let playersData = JSON.parse(message) as Player[];
      //       this.player = playersData ? playersData.filter(p => p.id == parseInt(localStorage.getItem("id")!)).at(0)! : this.player;
      //       console.log(this.player)
      //     }
      //   })
  } 

  logout()
  {
    this.authService.logout();
  }
}

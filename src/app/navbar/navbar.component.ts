import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { StompService } from '../services/stomp.service';
import { GameDataService } from '../services/game-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  player!: Player;
  icon: String = 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';
  cleaned_shield: String="";
  shield_expire: Date = new Date(this.player.shield.replace("T","") as string);
  // currentDate: Date = new Date();
  // shield_remaining_time: number = this.shield_expire.getTime() - this.currentDate.getTime();

  constructor(public authService: AuthService, private stomp: StompService, private polling: GameDataService)
  {
    this.stomp.subscribe("/topic/players", message => 
      {
        let playersData = JSON.parse(message) as Player[];
        this.player = playersData ? playersData.filter(p => p.id == parseInt(localStorage.getItem("id")!)).at(0)! : this.player;
        this.icon = this.player ? this.player.icon : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';
      })
    } 
    
  logout()
  {
    this.authService.logout();
  }

  ngOnInit() {
    if (this.player && this.player.shield) {
      
    } else {
        console.error('Player or shield is not yet defined.');
    }
}
  // hasShield()
  // {
  //   this.player.shield.
  // }
}

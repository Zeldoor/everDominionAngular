import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leaderboard-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './leaderboard-menu.component.html',
  styleUrl: './leaderboard-menu.component.css'
})
export class LeaderboardMenuComponent 
{
  
  players: Player[] = [];
  

  constructor(private playerServ: PlayerService)
  {
    playerServ.getAll().subscribe(data => this.players = data.filter(p => p.id != parseInt(localStorage.getItem("id")!)))
  }

  


  
}

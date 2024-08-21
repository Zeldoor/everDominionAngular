import { Component, Injector } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { Subscription } from 'rxjs';
import { StompService } from '../services/stomp.service';
import { LeaderboardPlayerCardComponent } from "../leaderboard-player-card/leaderboard-player-card.component";

@Component({
  selector: 'app-leaderboard-menu',
  standalone: true,
  imports: [LeaderboardPlayerCardComponent],
  templateUrl: './leaderboard-menu.component.html',
  styleUrl: './leaderboard-menu.component.css'
})
export class LeaderboardMenuComponent 
{
  stomp: StompService;
  players: Player[] = [];
  playerId: number = parseInt(localStorage.getItem("id")!);
  
  constructor(private playerServ: PlayerService, private injector: Injector)
  {
    this.stomp = this.injector.get(StompService);


    this.playerServ.getPlayersNoShield().subscribe(data => this.players = data.filter(p => p.id != parseInt(localStorage.getItem("id")!)));

    this.stomp.subscribe("/topic/lead", message => 
      {
        let playersData = JSON.parse(message) as Player[];
        this.players = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)  && !p.hasShield) : this.players;
      })
  }
}

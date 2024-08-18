import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-leaderboard-player-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './leaderboard-player-card.component.html',
  styleUrl: './leaderboard-player-card.component.css'
})
export class LeaderboardPlayerCardComponent 
{
  playerServ = inject(PlayerService);
  @Input() leadPlayer!: Player;
  @Input() playerId!: number;


  addFriend(id: number)
  {
    this.playerServ.addFriend(id, parseInt(localStorage.getItem("id")!)).subscribe();
  }

  checkIfAlreadyFriend(): boolean
  {
    

    return true;
  }
}

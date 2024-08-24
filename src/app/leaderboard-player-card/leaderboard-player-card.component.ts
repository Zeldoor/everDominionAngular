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
  playerId: number = parseInt(localStorage.getItem("id")!);


  addFriend(id: number)
  {
    this.playerServ.addFriend(id, parseInt(localStorage.getItem("id")!)).subscribe(
      {
        next: data =>{},
        error: err =>
          { 
            let backendError = err.error;
            alert (backendError) 
          }
      }
    );
  }

  checkIfNotFriend(): boolean
  {
    for(let friend of this.leadPlayer.friends)
      if(friend.id == this.playerId)
        return false;

    return true;
  }

  powerCalculator(): number
  {
    return Math.floor(this.leadPlayer.playerHealth + ((this.leadPlayer.playerMinDmg + this.leadPlayer.playerMaxDmg) / 2));
  }
}

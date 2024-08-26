import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  router: Router = inject(Router)

  @Input() leadPlayer!: Player;
  @Input() power!: number;

  playerServ = inject(PlayerService);
  playerId: number = parseInt(localStorage.getItem("id")!);

  popup : String = "";
  



  toggle()
  {
    if(this.popup=="")
      this.popup="visibility";
    else
      this.popup="";
  }

  visibility(): String
  {

    return this.popup;
  }

  powerAdjuster(): number
  {
    if(this.power <= 9)
      return 1;
    if(this.power <= 99)
      return 2;

    return 3;
  }

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

  interact()
  {
    if(this.leadPlayer.id == parseInt(localStorage.getItem("id")!))
      this.router.navigate(["player"])
    else
      this.router.navigate(["fight", this.leadPlayer.id])
  }
}

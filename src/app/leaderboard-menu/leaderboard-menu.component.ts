import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { RouterLink } from '@angular/router';
import { GameDataService } from '../services/game-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leaderboard-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './leaderboard-menu.component.html',
  styleUrl: './leaderboard-menu.component.css'
})
export class LeaderboardMenuComponent 
{
  private dataSubscription!: Subscription;
  players: Player[] = [];
  

  constructor(private playerServ: PlayerService, private gameDataService: GameDataService)
  {
    playerServ.getAll().subscribe(data => this.players = data.filter(p => p.id != parseInt(localStorage.getItem("id")!)))
  }

  addFriend(id: number)
  {
    this.playerServ.addFriend(id, parseInt(localStorage.getItem("id")!)).subscribe(data => console.log(data));
  }

  ngOnInit() 
  {
    this.dataSubscription = this.gameDataService.startPolling('player')
      .subscribe(data => 
      {
        let playersData = data as Player[];
        this.players = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)) : this.players;
      });
  }

  ngOnDestroy() 
  {
    if (this.dataSubscription) 
      this.dataSubscription.unsubscribe();
  }
}

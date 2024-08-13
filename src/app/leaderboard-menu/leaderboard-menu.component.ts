import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { RouterLink } from '@angular/router';
import { GameDataService } from '../services/game-data.service';
import { Subscription } from 'rxjs';
import { StompService } from '../services/stomp.service';

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
  
  constructor(private playerServ: PlayerService, private gameDataService: GameDataService, private stomp: StompService)
  {
    this.stomp.subscribe("/topic/lead", message => 
      {
        let playersData = JSON.parse(message) as Player[];
        this.players = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)) : this.players;
      })
  }


  addFriend(id: number)
  {
    this.playerServ.addFriend(id, parseInt(localStorage.getItem("id")!)).subscribe();
  }

  ngOnInit() 
  {
    // this.stomp.subscribe("/topic/lead", message => 
    //   {
    //     let playersData = JSON.parse(message) as Player[];
    //     this.players = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)) : this.players;
    //   })


    // this.dataSubscription = this.gameDataService.startPolling('player')
    //   .subscribe(data => 
    //   {
    //     let playersData = data as Player[];
    //     this.players = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)) : this.players;
    //   });
  }

  // ngOnDestroy() 
  // {
  //   if (this.dataSubscription) 
  //     this.dataSubscription.unsubscribe();
  // }
}

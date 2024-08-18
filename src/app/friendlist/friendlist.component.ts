import { Component } from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { TroopCardComponent } from "../troop-card/troop-card.component";
import { User } from '../model/User';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { PlayerService } from '../services/player.service';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { FriendCardComponent } from "../friend-card/friend-card.component";
import { GameDataService } from '../services/game-data.service';
import { Subscription } from 'rxjs';
import { Friend } from '../model/Friend';
import { StompService } from '../services/stomp.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-friendlist',
  standalone: true,
  imports: [ProfileCardComponent, TroopCardComponent, FriendCardComponent, CommonModule, MatGridListModule],
  templateUrl: './friendlist.component.html',
  styleUrl: './friendlist.component.css'
})
export class FriendlistComponent {

  user!: User;
  player!: Player;
  friends: Player[] = [];
  dataSubscription!: Subscription;

  constructor(private webStorage: LocalStorageService, private playerServ:PlayerService, private stomp: StompService, private gameDataService:GameDataService)
  {
    this.user = this.webStorage.getItem("user");
    
    this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(
      data =>
      {
        this.player = data;
        this.getFriends();
      }
    );
  }

  getFriends() 
  {
    this.dataSubscription = this.gameDataService.startPolling('player', 2000)
    .subscribe(data => 
    {
      this.friends = []
      let playersData = data as Player[];
      let players = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)) : this.friends;
      this.player.friends.forEach(f => {players.filter(p => p.id == f.id).at(0) ? this.friends.push(players.filter(p => p.id == f.id).at(0)!) : null})
    });
  }


  filterFriend(id:number):Player
  {
    return this.friends.filter(f => f.id == id).at(0)!;
  }

  
  ngOnDestroy() 
  {
    if (this.dataSubscription) 
      this.dataSubscription.unsubscribe();
  }
}

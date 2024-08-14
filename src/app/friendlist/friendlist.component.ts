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

@Component({
  selector: 'app-friendlist',
  standalone: true,
  imports: [ProfileCardComponent, TroopCardComponent, FriendCardComponent],
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
    this.dataSubscription = this.gameDataService.startPolling('player')
    .subscribe(data => 
    {
      let playersData = data as Player[];
      this.friends = playersData ? playersData.filter(p => p.id != parseInt(localStorage.getItem("id")!)) : this.friends;
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

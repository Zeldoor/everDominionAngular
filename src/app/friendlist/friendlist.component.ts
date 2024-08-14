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

  constructor(private webStorage: LocalStorageService, private playerServ:PlayerService, private gameDataService:GameDataService)
  {
    this.user = this.webStorage.getItem("user");
    this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(
      data =>
      {
        this.player = data;
        this.pollo();
      }
    );
  }


  pollo() 
  {
    this.dataSubscription = this.gameDataService.startPolling(`player/${this.player.id}/friends`)
      .subscribe(data => 
      {
        this.friends = data as Player[];
      });
  }

  ngOnDestroy() 
  {
    if (this.dataSubscription) 
      this.dataSubscription.unsubscribe();
  }

  filterFriend(id:number):Player
  {
    return this.friends.filter(f => f.id == id).at(0)!;
  }

}

import { FormControl, FormGroup } from "@angular/forms";
import { Player } from "../model/Player";
import { LocalStorageService } from "../services/local-storage.service";
import { PlayerService } from "../services/player.service";
import { StompService } from "../services/stomp.service";
import { Subscription } from "rxjs";
import { User } from "../model/User";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { FriendCardComponent } from "../friend-card/friend-card.component";
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { TroopCardComponent } from "../troop-card/troop-card.component";

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
  filteredFriends: Player[] = []; // Inizializza la lista filtrata con la lista completa
  dataSubscription!: Subscription;
  criteria!: any;
  firstTime: boolean = true;

  form = new FormGroup({
    email: new FormControl("")
  });

  constructor(private webStorage: LocalStorageService, private playerServ: PlayerService, private stomp: StompService) 
  {
    this.user = this.webStorage.getItem("user");

    this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(data => 
    {
      this.player = data;
    });

    this.stomp.subscribe("/topic/players", message => 
    {
      let playersData: Player[] = JSON.parse(message) as Player[];

      if (this.player && this.player.friends) 
      {
        let playersMap = new Map(playersData.map(p => [p.id, p]));

        this.friends = this.player.friends
          .map(f => playersMap.get(f.id))
          .filter(friend => friend !== undefined) as Player[];

        if(this.firstTime)
        {
          this.filteredFriends = this.friends;
          this.firstTime = false;
        }
      }
    });
  }

  filterCriteria(): void 
  {
    let inputElement = document.getElementById('searchbar') as HTMLInputElement;
    let searchValue = inputElement.value;

    if (searchValue && searchValue.trim() !== "") 
    {
      this.filteredFriends = this.friends.filter(f => 
        f.nick.toLowerCase().includes(searchValue.toLowerCase())
      );
    } 
    else 
    {
      this.filteredFriends = this.friends;
    }
  }

  filterFriend(id: number): Player {
    return this.filteredFriends.find(f => f.id === id)!;
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}

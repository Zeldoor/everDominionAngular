import { Component, Input } from '@angular/core';
import { User } from '../model/User';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { PlayerService } from '../services/player.service';
import { Friend } from '../model/Friend';

@Component({
  selector: 'app-friend-card',
  standalone: true,
  imports: [],
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.css'
})
export class FriendCardComponent {


  user!: User;
  @Input() player!: Player;
  @Input() friend!: Player;
  


  constructor(private webStorage: LocalStorageService, private playerServ:PlayerService,)
  {
    this.user = this.webStorage.getItem("user");
  }

  

}

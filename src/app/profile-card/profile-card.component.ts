import { Component, Input } from '@angular/core';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { TroopCardComponent } from '../troop-card/troop-card.component';
import { User } from '../model/User';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MatGridTile, TroopCardComponent, MatGridListModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  user!: User;
  @Input() player!: Player;

  constructor(private webStorage: LocalStorageService, private playerServ:PlayerService)
  {
    this.user = this.webStorage.getItem("user");
  }
}

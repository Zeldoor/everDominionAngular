import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { User } from '../model/User';
import { Player } from '../model/Player';
import { Troop } from '../model/Troop';
import { LocalStorageService } from '../services/local-storage.service';
import { PlayerService } from '../services/player.service';
import { TroopCardIdleComponent } from '../troop-card-idle/troop-card-idle.component';

@Component({
  selector: 'app-inventory-card',
  standalone: true,
  imports: [MatGridListModule, TroopCardIdleComponent],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.css'
})
export class InventoryCardComponent {

  user!: User;
  player!: Player;
  activeTroops: Troop[] = [];
  storageTroops: Troop[] = [];

  constructor(private webStorage: LocalStorageService, private playerServ:PlayerService)
  {
    this.user = this.webStorage.getItem("user");
    this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(
      data =>
      {
        this.player = data;
        this.activeTroops = this.player.activeTroops;
        this.storageTroops = this.player.storageTroops;
      }
    );
  }
}

import { Component } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { User } from '../model/User';
import { MatGridListModule } from '@angular/material/grid-list';
import { TroopCardComponent } from '../troop-card/troop-card.component';
import { Troop } from '../model/Troop';
import { LocalStorageService } from '../services/local-storage.service';
import { TroopCardIdleComponent } from '../troop-card-idle/troop-card-idle.component';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [MatGridListModule, TroopCardComponent,TroopCardIdleComponent],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})
export class PlayerDetailComponent {

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

  switchTroopState(troop: Troop, active: boolean)
  {
    if(active)
    {
      this.activeTroops = this.activeTroops.filter(t => t.id !== troop.id);
      this.storageTroops.unshift(troop);
      this.playerServ.switchTroopState(troop.id).subscribe(data => this.player = data)
    }
    else
      if(this.activeTroops.length < 6)
      {
        this.storageTroops = this.storageTroops.filter(t => t.id !== troop.id);
        this.activeTroops.push(troop);
        this.playerServ.switchTroopState(troop.id).subscribe(data => this.player = data)
      }
  }
}

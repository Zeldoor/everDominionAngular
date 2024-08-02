import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TroopCardIdleComponent } from '../troop-card-idle/troop-card-idle.component';
import { User } from '../model/User';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { Troop } from '../model/Troop';
import { TroopInShop } from '../model/TroopInShop';
import { Gear } from '../model/Gear';
import { ShopService } from '../services/shop.service';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [MatGridListModule, TroopCardIdleComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

  user: User;
  player!: Player;
  troopsInShop: TroopInShop[] = [];
  storageTroops: Troop[] = [];
  gears: Gear[] = [];

  constructor(private webStorage: LocalStorageService, private shopServ: ShopService, private playerServ: PlayerService)
  {
    shopServ.getShopTroops().subscribe(data => this.troopsInShop = data);
    shopServ.getShopGears().subscribe(data => this.gears = data);

    this.user = this.webStorage.getItem("user");
    this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(
      data =>
      {
        this.player = data;
        this.storageTroops = this.player.storageTroops;
      }
    );
  }
}

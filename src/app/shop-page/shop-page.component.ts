import { Component, EventEmitter, Output } from '@angular/core';
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
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { InventoryCardComponent } from '../inventory-card/inventory-card.component';
import { CommonModule } from '@angular/common';
import { GearCardComponent } from "../gear-card/gear-card.component";

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [MatGridListModule, ProfileCardComponent, InventoryCardComponent, TroopCardIdleComponent, ProfileCardComponent, CommonModule, GearCardComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

  user: User;
  player!: Player;
  overedGear!: Gear | null;

  troopsInShop: TroopInShop[] = [];
  gearsInShop: Gear[] = [];
  storageTroops: Troop[] = [];
  storageGears: Gear[] = [];


  
  constructor(private webStorage: LocalStorageService, private shopServ: ShopService, private playerServ: PlayerService)
  {
    shopServ.getShopTroops().subscribe(data => this.troopsInShop = data);
    shopServ.getShopGears().subscribe(data => this.gearsInShop = data);

    this.user = this.webStorage.getItem("user");
    this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(
      data =>
      {
        this.player = data;
        this.storageTroops = this.player.storageTroops.reverse();
        this.storageGears = this.player.storageGears.reverse();
      }
    );
  }

  buyTroop(troopId: number): void
  {
    this.shopServ.buyTroop(troopId, this.player).subscribe(
      data =>
      {
        this.player = data;
        this.storageTroops = this.player.storageTroops.reverse();
      });
  }

  buyGear(gearId: number): void
  {
    this.shopServ.buyGear(gearId, this.player).subscribe(
      data =>
      {
        this.player = data;
        this.storageGears = this.player.storageGears.reverse();
      });
  }

  mouseOveredGear(gear: Gear): Gear
  {
    return this.overedGear = gear;
  }

  mouseUnoverGear()
  {
    this.overedGear = null;
  }
}

import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TroopCardComponent } from '../troop-card/troop-card.component';
import { TroopCardIdleComponent } from '../troop-card-idle/troop-card-idle.component';
import { User } from '../model/User';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { Troop } from '../model/Troop';
import { TroopInShop } from '../model/TroopInShop';
import { Gear } from '../model/Gear';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [MatGridListModule, TroopCardIdleComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

  user: User;
  player: Player;
  troopsInShop: TroopInShop[] = [];
  gears: Gear[] = [];

  constructor(private webStorage: LocalStorageService, private shopServ: ShopService)
  {
    shopServ.getShopTroop().subscribe(data => this.troopsInShop = data);
    shopServ.getShopGear().subscribe(data => this.gears = data);

    this.user = this.webStorage.getItem("user");
    this.player = this.webStorage.getItem("player");
  }

  mock_inventory_troops: Troop[] = [];
  // [
  //   {
  //       className: "Archer",
  //       minDamage: 15,
  //       maxDamage: 25,
  //       health: 100,
  //       playerId: 1
  //   },
  //   {
  //       className: "Knight",
  //       minDamage: 20,
  //       maxDamage: 30,
  //       health: 150,
  //       playerId: 1
  //   },
  //   {
  //       className: "Mage",
  //       minDamage: 25,
  //       maxDamage: 35,
  //       health: 80,
  //       playerId: 2
  //   },
  //   {
  //       className: "Spearman",
  //       minDamage: 10,
  //       maxDamage: 20,
  //       health: 120,
  //       playerId: 2
  //   },
  //   {
  //     className: "Knight",
  //     minDamage: 20,
  //     maxDamage: 30,
  //     health: 150,
  //     playerId: 1
  //   },
  //   {
  //       className: "Mage",
  //       minDamage: 25,
  //       maxDamage: 35,
  //       health: 80,
  //       playerId: 2
  //   },
  //   {
  //     className: "Knight",
  //     minDamage: 20,
  //     maxDamage: 30,
  //     health: 150,
  //     playerId: 1
  //   },
  //   {
  //       className: "Mage",
  //       minDamage: 25,
  //       maxDamage: 35,
  //       health: 80,
  //       playerId: 2
  //   },
  //   {
  //     className: "Knight",
  //     minDamage: 20,
  //     maxDamage: 30,
  //     health: 150,
  //     playerId: 1
  //   },
  //   {
  //     className: "Mage",
  //     minDamage: 25,
  //     maxDamage: 35,
  //     health: 80,
  //     playerId: 2
  //   },
  //   {
  //     className: "Knight",
  //     minDamage: 20,
  //     maxDamage: 30,
  //     health: 150,
  //     playerId: 1
  //   },
  //   {
  //     className: "Mage",
  //     minDamage: 25,
  //     maxDamage: 35,
  //     health: 80,
  //     playerId: 2
  //   },
  //   {
  //     className: "Knight",
  //     minDamage: 20,
  //     maxDamage: 30,
  //     health: 150,
  //     playerId: 1
  //   },
  //   {
  //     className: "Mage",
  //     minDamage: 25,
  //     maxDamage: 35,
  //     health: 80,
  //     playerId: 2
  //   }
  // ];









}

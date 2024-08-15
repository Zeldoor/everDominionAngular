import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { User } from '../model/User';
import { Player } from '../model/Player';
import { Troop } from '../model/Troop';
import { LocalStorageService } from '../services/local-storage.service';
import { PlayerService } from '../services/player.service';
import { TroopCardIdleComponent } from '../troop-card-idle/troop-card-idle.component';
import { Gear } from '../model/Gear';
import { GearCardComponent } from "../gear-card/gear-card.component";

@Component({
  selector: 'app-inventory-card',
  standalone: true,
  imports: [MatGridListModule, TroopCardIdleComponent, GearCardComponent],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.css'
})
export class InventoryCardComponent 
{
  constructor(){}


  @Input() storageTroops!: Troop[];
  @Input() storageGears!: Gear[];
  @Output() switchTroopEvent: EventEmitter<Troop> = new EventEmitter<Troop>();
  @Output() switchGearEvent: EventEmitter<Gear> = new EventEmitter<Gear>();


  callTroopEvent(troop: Troop)
  {
    this.switchTroopEvent.emit(troop);
  }

  callGearEvent(gear: Gear)
  {
    this.switchGearEvent.emit(gear);
  }
}

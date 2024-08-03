import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class InventoryCardComponent 
{
  troop!: Troop;
  @Input() storageTroops!: Troop[];
  @Output() switchTroopEvent: EventEmitter<Troop> = new EventEmitter<Troop>();

  constructor(){}

  callFatherEvent(troop: Troop)
  {
    this.switchTroopEvent.emit(troop);
  }
}

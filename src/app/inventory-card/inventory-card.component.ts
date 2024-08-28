import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Troop } from '../model/Troop';
import { TroopCardIdleComponent } from '../troop-card-idle/troop-card-idle.component';
import { Gear } from '../model/Gear';
import { GearCardComponent } from "../gear-card/gear-card.component";
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventory-card',
  standalone: true,
  imports: [MatGridListModule, TroopCardIdleComponent, GearCardComponent, MatIconModule, RouterLink],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.css'
})
export class InventoryCardComponent 
{
  constructor(){}


  @Input() storageTroops!: Troop[];
  @Input() storageGears!: Gear[];
  @Input() activeGears!: Gear[];
  @Input() inventory!: boolean;

  @Output() switchTroopEvent: EventEmitter<Troop> = new EventEmitter<Troop>();
  @Output() switchGearEvent: EventEmitter<Gear> = new EventEmitter<Gear>();
  @Output() customOverMouse: EventEmitter<Gear> = new EventEmitter<Gear>();
  @Output() customUnoverMouse: EventEmitter<void> = new EventEmitter();


  callTroopEvent(troop: Troop)
  {
    this.switchTroopEvent.emit(troop);
  }

  callGearEvent(gear: Gear)
  {
    this.switchGearEvent.emit(gear);
  }

  callOverGear(gear: Gear)
  {
    this.customOverMouse.emit(gear);
  }

  callUnoverGear()
  {
    this.customOverMouse.emit();
  }
}

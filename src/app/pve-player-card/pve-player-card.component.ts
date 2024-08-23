import { Component, Input } from '@angular/core';
import { PvePlayer } from '../model/PvePlayer';
import { MatGridListModule } from '@angular/material/grid-list';
import { TroopCardComponent } from "../troop-card/troop-card.component";

@Component({
  selector: 'app-pve-player-card',
  standalone: true,
  imports: [MatGridListModule, TroopCardComponent],
  templateUrl: './pve-player-card.component.html',
  styleUrl: './pve-player-card.component.css'
})
export class PvePlayerCardComponent 
{
  @Input() pvePlayer !: PvePlayer;

  constructor(){}
}

import { Component } from '@angular/core';
import { Player } from '../model/Player';
import { Troop } from '../model/Troop';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent 
{
  constructor()
  {
    this.player = {nick: "Cesare", score: 10, troops:[]}
  }

  player : Player;
  troop: Troop = {className: "Tank", damage: 8, defence: 13}
}

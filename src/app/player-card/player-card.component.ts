import { Component } from '@angular/core';
import { Player } from '../model/Player';
import { Troop } from '../model/Troop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent 
{
  constructor()
  {
    this.player = {nick: "Cesare", score: 10, troops:[this.troop, this.troop, this.troop, this.troop, this.troop, this.troop], attack:10, health:10, onAttack:false, onDefence:true, maxTroops:6}
  }

  player : Player;
  troop: Troop = {className: "Tank", damage: 8, health: 13}
}

import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { Troop } from '../model/Troop';
import { Player } from '../model/Player';

@Component({
  selector: 'app-fight-page',
  standalone: true,
  imports: [MatGridListModule, PlayerCardComponent],
  templateUrl: './fight-page.component.html',
  styleUrl: './fight-page.component.css'
})
export class FightPageComponent 
{
  printString: string = "hjfbgasfabfabh";
  classNames: string[] = ["Tank", "Fighter", "Healer", "Bard"]
  players: Player[] = [];

  constructor()
  {
    this.players[0] = {nick: "Cesare", score: 10, troops: this.randomTroop(), damage:0, health:0, onAttack:false, maxTroops:6}
    this.players[1] = {nick: "Mattia", score: 10, troops: this.randomTroop(), damage:0, health:0, onAttack:true, maxTroops:6}

    this.getPlayerStats()
  }

  
  randomTroop(): Troop[]
  {
    let res: Troop[] = [];

    for(let i = 0; i<6; i++)
    {
      res.push(
      {
        className: this.classNames[Math.round(Math.random()*4)], 
        damage: Math.round(Math.random()*7)+1, 
        health: Math.round(Math.random()*20)+10
      });
    }

    return res;
  }

  getPlayerStats(): void
  {
    for(let player of this.players)
      for(let troop of player.troops)
      {
        player.damage += troop.damage;
        player.health += troop.health;
      }
  }
}

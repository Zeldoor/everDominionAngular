import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { Player } from '../model/Player';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../services/player.service';
import { Fight } from '../model/Fight';
import { FightLogComponent } from '../fight-log/fight-log.component';

@Component({
  selector: 'app-fight-page',
  standalone: true,
  imports: [MatGridListModule, PlayerCardComponent, CommonModule, FightLogComponent],
  templateUrl: './fight-page.component.html',
  styleUrl: './fight-page.component.css'
})
export class FightPageComponent 
{
  printString: string = "";
  players: Player[] = [];
  results: string[] = [];
  fightRes !: Fight;
  
  
  constructor(private playerServ: PlayerService)
  {
    playerServ.getAll().subscribe(res => this.players = res);
    this.results = ["You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia"]
  }
  
  beginFight()
  {
    let fight: Fight = {attacker: this.players[0], defender: this.players[1], results: []};

    this.playerServ.fight(fight).subscribe(
      dto => 
      {
        this.fightRes = dto;

        this.results = dto.results;

        for(let res of this.fightRes.results)
        {
          console.log(res);
        }
      }
    );
  }

}
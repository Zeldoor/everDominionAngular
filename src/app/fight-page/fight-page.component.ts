import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { Player } from '../model/Player';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../services/player.service';
import { Fight } from '../model/Fight';

@Component({
  selector: 'app-fight-page',
  standalone: true,
  imports: [MatGridListModule, PlayerCardComponent, CommonModule],
  templateUrl: './fight-page.component.html',
  styleUrl: './fight-page.component.css'
})
export class FightPageComponent 
{
  printString: string = "";
  players: Player[] = [];
  messages: string[] = [];
  fightRes !: Fight;
  
  constructor(private playerServ: PlayerService)
  {
    playerServ.getAll().subscribe(res => this.players = res);
  }
  
  beginFight()
  {
    let fight: Fight = {attacker: this.players[0], defender: this.players[1], results: []};

    this.playerServ.fight(fight).subscribe(
      dto => 
      {
        this.fightRes = dto;

        for(let res of this.fightRes.results)
        {
          console.log(res);
        }
      }
    );
  }
}
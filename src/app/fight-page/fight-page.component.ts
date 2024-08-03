import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { Player } from '../model/Player';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../services/player.service';
import { Fight } from '../model/Fight';
import { FightLogComponent } from '../fight-log/fight-log.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fight-page',
  standalone: true,
  imports: [MatGridListModule, PlayerCardComponent, CommonModule, FightLogComponent],
  templateUrl: './fight-page.component.html',
  styleUrl: './fight-page.component.css'
})
export class FightPageComponent 
{
  fightRes !: Fight;
  player!: Player;
  enemy!: Player;
  results: string[] = [];
  buttonOn = true;
  
  constructor(private playerServ: PlayerService, private route: ActivatedRoute)
  {
      this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(data => this.player = data);
  }

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe(
      params => 
      {
        this.playerServ.getOne(parseInt(params.get('id')!)).subscribe(data => this.enemy = data);
      });
  }

  beginFight()
  {
    let fight: Fight = {attacker: this.player, defender: this.enemy, results: []};

    this.playerServ.fight(fight).subscribe(
      dto => 
      {
        this.results = [];
        this.fightRes = dto;

        this.deActivateButtonAfterFight()

        this.cycleFightMessage()

        this.activateButtonAfterFight()
      }
    );
  }


  deActivateButtonAfterFight()
  {
    this.buttonOn = false;
  }

  activateButtonAfterFight()
  {
    setTimeout(() => 
    {
      this.buttonOn = true;
    }, this.fightRes.results.length * 1500); // 1000 ms = 1 secondo
  }

  cycleFightMessage()
  {
    this.fightRes.results.forEach((result, index) => 
    {
        setTimeout(() => 
        {
          this.results.unshift(result);
        }, index * 1500); // 1000 ms = 1 secondo
    });
  }
}
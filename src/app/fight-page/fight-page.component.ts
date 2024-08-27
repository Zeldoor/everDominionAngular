import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { Player } from '../model/Player';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../services/player.service';
import { Fight } from '../model/Fight';
import { FightLogComponent } from '../fight-log/fight-log.component';
import { ActivatedRoute, Router } from '@angular/router';

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
  backendErr!: string;

  playerHealthPos = 0;
  enemyHealthPos = 0;
  
  constructor(private playerServ: PlayerService, private route: ActivatedRoute, private router: Router)
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
    let fight: Fight = {attacker: this.player, defender: this.enemy, results: [], playerHealth: [], enemyHealth: []};

    this.playerServ.fight(fight).subscribe(
      {
        next: dto => 
        {
          this.results = [];
          this.fightRes = dto;

          this.deActivateButtonAfterFight();

          this.cycleFightMessage();

          this.activateButtonAfterFight();
        },
        error: err=>
        {
          this.backendErr = err.error;
          alert(this.backendErr);
          this.router.navigate(["home"])
        }
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
          

          if(result.includes("danni"))
            switch (result.split(" ")[0]) 
            {
              case this.player.nick:

                this.enemy.playerHealth = this.fightRes.enemyHealth[this.enemyHealthPos] < 0 ? 0 : this.fightRes.enemyHealth[this.enemyHealthPos];

                this.enemyHealthPos++
                
                break;

              case this.enemy.nick:

                this.player.playerHealth = this.fightRes.playerHealth[this.playerHealthPos] < 0 ? 0 : this.fightRes.playerHealth[this.playerHealthPos];
                this.playerHealthPos++

                break;
            
              default:
                break;
            }
        }, index * 1500); // 1000 ms = 1 secondo
    });
  }



// const socket = new SockJS('/ws');
// const stompClient = Stomp.over(socket);

// stompClient.connect({}, function (frame) 
// {
//     console.log('Connected: ' + frame);

//     stompClient.subscribe('/queue/combat-result/' + playerId, 
//     function (message) 
//     {
//         const fightResult = JSON.parse(message.body);
//         showFightResultNotification(fightResult);
//     });
// });

// function showFightResultNotification(fightResult) {
//     // Logica per mostrare la notifica e il risultato del combattimento
//     alert("Sei stato attaccato! Risultato: " + fightResult.outcome);
// }
}
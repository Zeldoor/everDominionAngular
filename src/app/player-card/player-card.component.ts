import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { TroopCardComponent } from '../troop-card/troop-card.component';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule, MatGridListModule, TroopCardComponent],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent 
{
  @Input() player !: Player;

  setCombatIcon(state: boolean):String
  {
    return state ? "https://i.imgur.com/vigJPAb.png" : "https://imgs.search.brave.com/u3ADKELIckQYTkzD6r6AYzjhWvJhDYWJ2P9nJDktNfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1kZXNp/Z24tc2VjdXJpdHkt/c2V0LW9uZS8yNC9z/aGllbGQtZ3JheS1j/b250b3VyLTEyOC5w/bmc"
  }
}

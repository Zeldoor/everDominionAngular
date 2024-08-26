import { Component, HostListener, Injector } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { Subscription } from 'rxjs';
import { StompService } from '../services/stomp.service';
import { LeaderboardPlayerCardComponent } from "../leaderboard-player-card/leaderboard-player-card.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-leaderboard-menu',
  standalone: true,
  imports: [LeaderboardPlayerCardComponent, NgStyle],
  templateUrl: './leaderboard-menu.component.html',
  styleUrl: './leaderboard-menu.component.css'
})
export class LeaderboardMenuComponent 
{
  stomp: StompService;
  players: Player[] = [];
  playerId: number = parseInt(localStorage.getItem("id")!);

  mouseX: number = 0;
  mouseY: number = 0;
  
  constructor(private playerServ: PlayerService, private injector: Injector)
  {
    this.stomp = this.injector.get(StompService);

    this.playerServ.getPlayersNoShield().subscribe(data => this.players = data);

    this.stomp.subscribe("/topic/players", message => 
      {
        let playersData = JSON.parse(message) as Player[];
        this.players = playersData;
      })
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void 
  {
    this.mouseX = event.clientX+5;
    this.mouseY = event.clientY+5;
  }

  sortByPower(): Player[]
  {
      return this.players.sort((a, b) => this.powerCalculator(b) - this.powerCalculator(a));
  }

  powerCalculator(player: Player): number
  {
    return Math.floor(player.playerHealth + ((player.playerMinDmg + player.playerMaxDmg) / 2));
  }
}

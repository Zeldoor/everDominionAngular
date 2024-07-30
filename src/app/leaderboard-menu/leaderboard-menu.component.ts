import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-leaderboard-menu',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard-menu.component.html',
  styleUrl: './leaderboard-menu.component.css'
})
export class LeaderboardMenuComponent 
{
  
  @Input() players: Player[] = [];
  

  constructor(private playerServ: PlayerService)
  {
    // this.results = ["You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia","Mattia dealt 5 dmg to you", "You dealt 8 dmg to Mattia"]
  
    this.players = [
      {
          id: 1,
          nick: "Player1",
          playerMinDmg: 10,
          playerMaxDmg: 20,
          playerHealth: 100,
          stamina: 50,
          gold: 1000,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 2,
          nick: "Player2",
          playerMinDmg: 12,
          playerMaxDmg: 22,
          playerHealth: 110,
          stamina: 52,
          gold: 1100,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 3,
          nick: "Player3",
          playerMinDmg: 14,
          playerMaxDmg: 24,
          playerHealth: 120,
          stamina: 54,
          gold: 1200,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 4,
          nick: "Player4",
          playerMinDmg: 16,
          playerMaxDmg: 26,
          playerHealth: 130,
          stamina: 56,
          gold: 1300,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 5,
          nick: "Player5",
          playerMinDmg: 18,
          playerMaxDmg: 28,
          playerHealth: 140,
          stamina: 58,
          gold: 1400,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 6,
          nick: "Player6",
          playerMinDmg: 20,
          playerMaxDmg: 30,
          playerHealth: 150,
          stamina: 60,
          gold: 1500,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 7,
          nick: "Player7",
          playerMinDmg: 22,
          playerMaxDmg: 32,
          playerHealth: 160,
          stamina: 62,
          gold: 1600,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 8,
          nick: "Player8",
          playerMinDmg: 24,
          playerMaxDmg: 34,
          playerHealth: 170,
          stamina: 64,
          gold: 1700,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 9,
          nick: "Player9",
          playerMinDmg: 26,
          playerMaxDmg: 36,
          playerHealth: 180,
          stamina: 66,
          gold: 1800,
          activeTroops: [],
          // troops_bought: []
      },
      {
          id: 10,
          nick: "Player10",
          playerMinDmg: 28,
          playerMaxDmg: 38,
          playerHealth: 190,
          stamina: 68,
          gold: 1900,
          activeTroops: [],
          // troops_bought: []
      }
  ];
  }

  


  
}

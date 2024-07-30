import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { PlayerService } from '../services/player.service';
import { User } from '../model/User';
import { MatGridListModule } from '@angular/material/grid-list';
import { TroopCardComponent } from '../troop-card/troop-card.component';
import { Troop } from '../model/Troop';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [MatGridListModule, TroopCardComponent],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})
export class PlayerDetailComponent {

  user!: User;
  player!: Player;
  mock_inventory_troops: Troop[] = [
    {
        className: "Archer",
        minDamage: 15,
        maxDamage: 25,
        health: 100,
        playerId: 1
    },
    {
        className: "Knight",
        minDamage: 20,
        maxDamage: 30,
        health: 150,
        playerId: 1
    },
    {
        className: "Mage",
        minDamage: 25,
        maxDamage: 35,
        health: 80,
        playerId: 2
    },
    {
        className: "Spearman",
        minDamage: 10,
        maxDamage: 20,
        health: 120,
        playerId: 2
    },
    {
      className: "Knight",
      minDamage: 20,
      maxDamage: 30,
      health: 150,
      playerId: 1
  },
  {
      className: "Mage",
      minDamage: 25,
      maxDamage: 35,
      health: 80,
      playerId: 2
  },
  {
    className: "Knight",
    minDamage: 20,
    maxDamage: 30,
    health: 150,
    playerId: 1
},
{
    className: "Mage",
    minDamage: 25,
    maxDamage: 35,
    health: 80,
    playerId: 2
},
{
  className: "Knight",
  minDamage: 20,
  maxDamage: 30,
  health: 150,
  playerId: 1
},
{
  className: "Mage",
  minDamage: 25,
  maxDamage: 35,
  health: 80,
  playerId: 2
},
{
  className: "Knight",
  minDamage: 20,
  maxDamage: 30,
  health: 150,
  playerId: 1
},
{
  className: "Mage",
  minDamage: 25,
  maxDamage: 35,
  health: 80,
  playerId: 2
},
{
  className: "Knight",
  minDamage: 20,
  maxDamage: 30,
  health: 150,
  playerId: 1
},
{
  className: "Mage",
  minDamage: 25,
  maxDamage: 35,
  health: 80,
  playerId: 2
}
];
  
  
  constructor(private playerServ: PlayerService)
  {
    this.user = {id:1,username:'Cesare',email:'ciccio@puzzo.com' ,password:'password',role:'Admin',player_id:1}
    playerServ.getOne(this.user.player_id).subscribe(res => this.player = res);

  }




}

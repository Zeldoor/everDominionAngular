import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { LeaderboardMenuComponent } from '../leaderboard-menu/leaderboard-menu.component';
import { MapComponent } from '../map/map.component';
import { TroopMenuComponent } from '../troop-menu/troop-menu.component';
import { SharedService } from '../services/shared.service';
import { Player } from '../model/Player';


/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,LeaderboardMenuComponent, MapComponent, TroopMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  constructor(private sharedServ: SharedService){}

  player : Player = this.sharedServ.getData("player") ? this.sharedServ.getData("player") : {nick: "GUEST"};
}

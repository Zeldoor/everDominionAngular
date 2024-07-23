import { Component } from '@angular/core';
import { LeaderboardMenuComponent } from '../leaderboard-menu/leaderboard-menu.component';
import { MapComponent } from '../map/map.component';
import { TroopMenuComponent } from '../troop-menu/troop-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeaderboardMenuComponent, MapComponent, TroopMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
}

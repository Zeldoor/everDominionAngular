import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { LeaderboardMenuComponent } from '../leaderboard-menu/leaderboard-menu.component';
import { MapComponent } from '../map/map.component';
import { TroopMenuComponent } from '../troop-menu/troop-menu.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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
export class HomeComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 7, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
  ];
}

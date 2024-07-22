import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { PlayerService } from './services/player.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from "./map/map.component";
import { TroopMenuComponent } from "./troop-menu/troop-menu.component";
import { LeaderboardMenuComponent } from "./leaderboard-menu/leaderboard-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, MapComponent, TroopMenuComponent, LeaderboardMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'EverDominion';
  constructor(private service: PlayerService){}

  

  damage : number = 0;
  defence : number = 0;
  result : string = "Match"
  

  fight()
  {
    this.service.fight(this.damage, this.defence).subscribe(
      res => this.result = res.result
    );
  }
}

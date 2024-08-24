import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { MatGridListModule } from '@angular/material/grid-list';
import { Gear } from '../model/Gear';

@Component({
  selector: 'app-profile-card-stat',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './profile-card-stat.component.html',
  styleUrl: './profile-card-stat.component.css'
})
export class ProfileCardStatComponent 
{
  @Input() player!: Player;

  checkGear(name: String): Gear | null
  {
    let gear = null;

    for(let g of this.player.activeGears)
      if(g.name.toLowerCase() == name.toLowerCase())
        gear = g;
    
    return gear;
  }
}

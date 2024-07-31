import { Component, Input } from '@angular/core';
import { Troop } from '../model/Troop';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-troop-card-idle',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './troop-card-idle.component.html',
  styleUrl: './troop-card-idle.component.css'
})
export class TroopCardIdleComponent {

  @Input() troop!:Troop;



  getBackground():string
  {
    if(this.troop.className=="knight")
    {
      return "https://i.imgur.com/JKzHY0e.png";
    }
    else
    {
      return "https://i.imgur.com/t7A4csn.png";
    }
  }
}

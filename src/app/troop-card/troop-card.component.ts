import { Component, Input } from '@angular/core';
import { Troop } from '../model/Troop';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-troop-card',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './troop-card.component.html',
  styleUrl: './troop-card.component.css'
})
export class TroopCardComponent 
{
  @Input() troop!:Troop;
}

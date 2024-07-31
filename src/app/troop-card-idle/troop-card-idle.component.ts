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
}

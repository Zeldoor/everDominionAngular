import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { MatGridListModule } from '@angular/material/grid-list';

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
}

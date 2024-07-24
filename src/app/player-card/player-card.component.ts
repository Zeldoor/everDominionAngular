import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent 
{
  @Input() player !: Player;
}

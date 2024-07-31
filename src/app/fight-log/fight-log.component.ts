import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../model/Player';

@Component({
  selector: 'app-fight-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fight-log.component.html',
  styleUrl: './fight-log.component.css'
})
export class FightLogComponent 
{
  @Input() results !: string[];
  @Input() players!: Player[];
  @Output() fightStart : EventEmitter<void> = new EventEmitter;

  constructor()
  {
  }

  fightButtonClicked(): void
  {
      this.fightStart.emit();
  }

  messageAlign(message: string) : string
  {
    return message.includes(this.players[0].nick + " ha") ? "flex-start" : "flex-end";
  }

  cssClass(message: string)
  {
    return message.includes(this.players[0].nick + " ha") ? "attackerStyle" : "defenderStyle";
  }
}

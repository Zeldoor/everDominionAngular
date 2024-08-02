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
  @Input() player!: Player;
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
    return message.includes(this.player.nick + " ha") ? "flex-start" : "flex-end";
  }

  cssClass(message: string)
  {
    return message.includes(this.player.nick + " ha") ? "attackerStyle" : "defenderStyle";
  }
}
